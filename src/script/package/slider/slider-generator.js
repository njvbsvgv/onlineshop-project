const sliderGenerator = ({
  children,
  autoplay = false,
  autoplayDelay = 3000,
  loop = false,
  showPagination = true,
  showNavigation = true,
  slidesPerView = 4,
  spaceBetween = 16,
  width = "100%",
}) => {
  const totalSlides = children.length;

  // --- Wrapper خارجی که همیشه توی DOM هست ---
  const outerWrapper = document.createElement("div");
  outerWrapper.style.width = width;

  // --- تابع رندر ساده (بدون اسلایدر) ---
  const renderFlat = () => {
    outerWrapper.innerHTML = "";
    const flatContainer = document.createElement("div");
    flatContainer.classList.add("slider-flat-container");
    flatContainer.style.display = "flex";
    flatContainer.style.gap = `${spaceBetween}px`;
    flatContainer.style.flexWrap = "wrap";

    children.forEach((child) => {
      const item = document.createElement("div");
      item.classList.add("slider-flat-item");
      item.appendChild(child);
      flatContainer.appendChild(item);
    });

    outerWrapper.appendChild(flatContainer);
  };

  // --- تابع رندر اسلایدر ---
  const renderSlider = (currentSlidesPerView) => {
    outerWrapper.innerHTML = "";

    let _slidesPerView = Math.min(currentSlidesPerView, totalSlides);
    let _loop = loop;
    let _showNavigation = showNavigation;
    let _showPagination = showPagination;

    if (totalSlides <= _slidesPerView) {
      _loop = false;
      _showNavigation = false;
      _showPagination = false;
    }

    let currentIndex = 0;
    let autoplayInterval = null;
    let isTransitioning = false;
    const maxIndex = totalSlides - _slidesPerView;

    // --- Container ---
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("slider-container");
    sliderContainer.style.width = "100%";
    sliderContainer.style.direction = "ltr";

    // --- Wrapper ---
    const sliderWrapper = document.createElement("div");
    sliderWrapper.classList.add("slider-wrapper");
    sliderWrapper.style.gap = `${spaceBetween}px`;

    // --- Clone ها برای loop ---
    const allChildren = [...children];
    if (_loop) {
      const clonesStart = children
        .slice(-_slidesPerView)
        .map((child) => child.cloneNode(true));
      const clonesEnd = children
        .slice(0, _slidesPerView)
        .map((child) => child.cloneNode(true));
      allChildren.unshift(...clonesStart);
      allChildren.push(...clonesEnd);
      currentIndex = _slidesPerView;
    }

    // --- Slides ---
    allChildren.forEach((child) => {
      const slideElem = document.createElement("div");
      slideElem.classList.add("slider-slide");
      slideElem.style.minWidth = `calc((100% - ${spaceBetween * (_slidesPerView - 1)}px) / ${_slidesPerView})`;
      slideElem.appendChild(child.cloneNode(true));
      sliderWrapper.appendChild(slideElem);
    });

    sliderContainer.appendChild(sliderWrapper);

    // --- محاسبه translateX ---
    const getTranslateX = (index) => {
      const slideWidthPx =
        (sliderWrapper.offsetWidth - spaceBetween * (_slidesPerView - 1)) /
        _slidesPerView;
      return index * (slideWidthPx + spaceBetween);
    };

    // --- Set position بدون انیمیشن ---
    const setPositionSilently = (index) => {
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(-${getTranslateX(index)}px)`;
      sliderWrapper.offsetHeight;
      sliderWrapper.style.transition = "transform 0.4s ease";
    };

    // --- Go To Slide ---
    const goTo = (index) => {
      if (isTransitioning) return;
      isTransitioning = true;

      sliderWrapper.style.transform = `translateX(-${getTranslateX(index)}px)`;

      if (_showPagination && dots.length) {
        const realIndex = _loop ? index - _slidesPerView : index;
        const clampedDot = Math.max(0, Math.min(realIndex, dots.length - 1));
        dots.forEach((d) => d.classList.remove("active"));
        dots[clampedDot]?.classList.add("active");
      }

      currentIndex = index;

      setTimeout(() => {
        if (_loop) {
          if (currentIndex <= _slidesPerView - 1) {
            currentIndex = totalSlides + currentIndex;
            setPositionSilently(currentIndex);
          }
          if (currentIndex >= totalSlides + _slidesPerView) {
            currentIndex = currentIndex - totalSlides;
            setPositionSilently(currentIndex);
          }
        }
        isTransitioning = false;
      }, 400);
    };

    // --- Navigation ---
    if (_showNavigation) {
      const prevBtn = document.createElement("button");
      prevBtn.classList.add("slider-btn", "slider-btn-prev");
      prevBtn.innerHTML = "&#8249;";
      prevBtn.addEventListener("click", () => goTo(currentIndex - 1));

      const nextBtn = document.createElement("button");
      nextBtn.classList.add("slider-btn", "slider-btn-next");
      nextBtn.innerHTML = "&#8250;";
      nextBtn.addEventListener("click", () => goTo(currentIndex + 1));

      sliderContainer.appendChild(prevBtn);
      sliderContainer.appendChild(nextBtn);
    }

    // --- Pagination ---
    let dots = [];
    if (_showPagination) {
      const pagination = document.createElement("div");
      pagination.classList.add("slider-pagination");

      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement("span");
        dot.classList.add("slider-dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () =>
          goTo(_loop ? i + _slidesPerView : i),
        );
        dots.push(dot);
        pagination.appendChild(dot);
      }

      sliderContainer.appendChild(pagination);
    }

    // --- Autoplay ---
    const startAutoplay = () => {
      if (!autoplay) return;
      autoplayInterval = setInterval(
        () => goTo(currentIndex + 1),
        autoplayDelay,
      );
    };

    const stopAutoplay = () => {
      if (autoplayInterval) clearInterval(autoplayInterval);
    };

    sliderContainer.addEventListener("mouseenter", stopAutoplay);
    sliderContainer.addEventListener("mouseleave", startAutoplay);

    // --- Touch / Swipe ---
    let touchStartX = 0;
    sliderContainer.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
    });
    sliderContainer.addEventListener("touchend", (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(diff > 0 ? currentIndex + 1 : currentIndex - 1);
      }
    });

    setTimeout(() => {
      setPositionSilently(currentIndex);
      startAutoplay();
    }, 0);

    outerWrapper.appendChild(sliderContainer);
  };

  // ─── تصمیم گیری: اسلایدر یا flat ───────────────────────────────────────
  let lastMode = null; // "slider" | "flat"

  const decide = () => {
    const containerWidth = outerWrapper.parentElement
      ? outerWrapper.parentElement.offsetWidth
      : window.innerWidth;

    // حساب کن چند اسلاید توی عرض فعلی جا میشه
    // هر اسلاید حداقل 200px فرض میکنیم (میتونی تغییر بدی)
    const minSlideWidth = 200;
    const fitsCount = Math.floor(
      (containerWidth + spaceBetween) / (minSlideWidth + spaceBetween),
    );
    const effectiveSlidesPerView = Math.min(slidesPerView, fitsCount);

    if (totalSlides > effectiveSlidesPerView) {
      if (lastMode !== "slider") {
        lastMode = "slider";
        renderSlider(effectiveSlidesPerView);
      }
    } else {
      if (lastMode !== "flat") {
        lastMode = "flat";
        renderFlat();
      }
    }
  };

  // --- ResizeObserver برای ریسپانسیو ---
  const resizeObserver = new ResizeObserver(() => decide());

  // وقتی outerWrapper به DOM وصل شد، observe شروع میشه
  setTimeout(() => {
    if (outerWrapper.parentElement) {
      resizeObserver.observe(outerWrapper.parentElement);
    } else {
      resizeObserver.observe(document.body);
    }
    decide();
  }, 0);

  return outerWrapper;
};

export default sliderGenerator