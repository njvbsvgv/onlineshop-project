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

  // اگه کارت‌ها کمتر از slidesPerView بود، خودکار تنظیم کن
  slidesPerView = Math.min(slidesPerView, totalSlides);

  // اگه همه کارت‌ها توی یه صفحه جا میشن، loop و nav و pagination لازم نیست
  if (totalSlides <= slidesPerView) {
    loop = false;
    showNavigation = false;
    showPagination = false;
  }

  let currentIndex = 0;
  let autoplayInterval = null;
  let isTransitioning = false;
  const maxIndex = totalSlides - slidesPerView;

  // --- Container ---
  const sliderContainer = document.createElement("div");
  sliderContainer.classList.add("slider-container");
  sliderContainer.style.width = width;
  sliderContainer.style.direction = "ltr";

  // --- Wrapper ---
  const sliderWrapper = document.createElement("div");
  sliderWrapper.classList.add("slider-wrapper");
  sliderWrapper.style.gap = `${spaceBetween}px`;

  // --- Clone ها برای loop ---
  const allChildren = [...children];
  if (loop) {
    const clonesStart = children
      .slice(-slidesPerView)
      .map((child) => child.cloneNode(true));
    const clonesEnd = children
      .slice(0, slidesPerView)
      .map((child) => child.cloneNode(true));
    allChildren.unshift(...clonesStart);
    allChildren.push(...clonesEnd);
    currentIndex = slidesPerView;
  }

  // --- Slides ---
  allChildren.forEach((child) => {
    const slideElem = document.createElement("div");
    slideElem.classList.add("slider-slide");
    // عرض هر slide رو داینامیک حساب کن
    slideElem.style.minWidth = `calc((100% - ${spaceBetween * (slidesPerView - 1)}px) / ${slidesPerView})`;
    slideElem.appendChild(child);
    sliderWrapper.appendChild(slideElem);
  });

  sliderContainer.appendChild(sliderWrapper);

  // --- محاسبه translateX ---
  const getTranslateX = (index) => {
    const slideWidthPx =
      (sliderWrapper.offsetWidth - spaceBetween * (slidesPerView - 1)) /
      slidesPerView;
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

    if (showPagination && dots.length) {
      const realIndex = loop ? index - slidesPerView : index;
      const clampedDot = Math.max(0, Math.min(realIndex, dots.length - 1));
      dots.forEach((d) => d.classList.remove("active"));
      dots[clampedDot]?.classList.add("active");
    }

    currentIndex = index;

    setTimeout(() => {
      if (loop) {
        if (currentIndex <= slidesPerView - 1) {
          currentIndex = totalSlides + currentIndex;
          setPositionSilently(currentIndex);
        }
        if (currentIndex >= totalSlides + slidesPerView) {
          currentIndex = currentIndex - totalSlides;
          setPositionSilently(currentIndex);
        }
      }
      isTransitioning = false;
    }, 400);
  };

  // --- Navigation ---
  if (showNavigation) {
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
  if (showPagination) {
    const pagination = document.createElement("div");
    pagination.classList.add("slider-pagination");

    for (let i = 0; i <= maxIndex; i++) {
      const dot = document.createElement("span");
      dot.classList.add("slider-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => goTo(loop ? i + slidesPerView : i));
      dots.push(dot);
      pagination.appendChild(dot);
    }

    sliderContainer.appendChild(pagination);
  }

  // --- Autoplay ---
  const startAutoplay = () => {
    if (!autoplay) return;
    autoplayInterval = setInterval(() => goTo(currentIndex + 1), autoplayDelay);
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

  // --- Init ---
  setTimeout(() => {
    setPositionSilently(currentIndex);
    startAutoplay();
  }, 0);

  return sliderContainer;
};