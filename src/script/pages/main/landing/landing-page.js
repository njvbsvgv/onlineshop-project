const LadingPage = () => {
  const t = languageTranslation("landing");

  const imageData = [
    {
      id: 1,
      text: "هودی",
      image: "./src/assets/photos/landing/imageBox/01.png",
      styles: [
        { key: "width", value: "100%" },
        { key: "height", value: "100%" },
      ],
    },
    {
      id: 2,
      text: "کلاه زمستانه",
      image: "./src/assets/photos/landing/imageBox/02.jpg",
      styles: [
        { key: "width", value: "100%" },
        { key: "height", value: "100%" },
      ],
    },
    {
      id: 3,
      text: "دورس",
      image: "./src/assets/photos/landing/imageBox/03.png",
      styles: [
        { key: "width", value: "100%" },
        { key: "height", value: "100%" },
      ],
    },
    {
      id: 4,
      text: "شلوار جین",
      image: "./src/assets/photos/landing/imageBox/04.png",
      styles: [
        { key: "width", value: "100%" },
        { key: "height", value: "100%" },
      ],
    },
    {
      id: 5,
      text: "کلاه بیسبالی",
      image: "./src/assets/photos/landing/imageBox/05.jpg",
      styles: [
        { key: "width", value: "100%" },
        { key: "height", value: "100%" },
      ],
    },
  ];

  const container = document.createElement("div");
  container.className = "landing-page-container";

  const herouSection = document.createElement("div");
  herouSection.className = "herou-section";

  const productOneSectionControl = document.createElement("div");
  productOneSectionControl.className = "product-section-control";

  const productTowSectionControl = document.createElement("div");
  productTowSectionControl.className = "product-section-control";

  const productThreeSectionControl = document.createElement("div");
  productThreeSectionControl.className =
    "product-section-control three-section";

  const imageBox = document.createElement("div");
  imageBox.setAttribute("class", "image-box");

  const imageBoxLeft = document.createElement("div");
  imageBoxLeft.setAttribute("class", "image-box-left");
  const imageBoxCenter = document.createElement("div");
  imageBoxCenter.setAttribute("class", "image-box-center");
  const imageBoxRight = document.createElement("div");
  imageBoxRight.setAttribute("class", "image-box-right");

  imageBox.append(imageBoxRight, imageBoxCenter, imageBoxLeft);

  herouSection.appendChild(
    Motion(
      modernSlider(
        [
          {
            image:
              "./src/assets/photos/slider/f7a20a4ec15036874bc0888ae6d21bb570ec0db7.jpg",
          },
          {
            image: "./src/assets/photos/slider/images (1).jpg",
          },
          {
            image: "./src/assets/photos/slider/images (2).jpg",
          },
          {
            image: "./src/assets/photos/slider/images.jpg",
          },
        ],
        "image",
        "./src/assets/icons/arrow-right.svg",
        "./src/assets/icons/arrow-left.svg",
      ),
      0.2,
    ),
  );

  const product = products.filter((el) => el.status.includes("پرفروش ترین"));
  const newProduct = products.filter((el) => el.status.includes("جدیدترین"));
  console.log("product ==>", product);

  productOneSectionControl.appendChild(
    ProductBox({
      title: t("productOneSection.title"),
      children: Motion(
        sliderGenerator({
          children: product.map((item) =>
            ProductCard({
              image: item.image,
              title: item.title,
              description: item.description,
              price: item.price,
              cardClick: () => useUpdateRout("/product-detail", {data: {productId: item.id}}),
            }),
          ),
          slidesPerView: 5, // تعداد کارت در هر صفحه
          spaceBetween: 8, // فاصله بین کارت‌ها به px
          autoplay: true,
          autoplayDelay: 3000,
          loop: true,
          showPagination: true,
          showNavigation: true,
          width: "100%",
        }),
        0.5,
      ),
    }),
  );

  productTowSectionControl.appendChild(
    ProductBox({
      title: t("productTowSection.title"),
      children: Motion(
        sliderGenerator({
          children: newProduct.map((item) =>
            // Motion(
            //   1
            // ),
            ProductCard({
              image: item.image,
              title: item.title,
              description: item.description,
              price: item.price,
              cardClick: () => useUpdateRout("/product-detail", {data: {productId: item.id}}),
            }),
          ),
          slidesPerView: 5, // تعداد کارت در هر صفحه
          spaceBetween: 8, // فاصله بین کارت‌ها به px
          autoplay: true,
          autoplayDelay: 3000,
          loop: true,
          showPagination: true,
          showNavigation: true,
          width: "100%",
        }),
        1,
      ),
    }),
  );

  // imageBox.appendChild()
  // LandingImageCardSection

  imageData.slice(3, 5).forEach((item, index) => {
    imageBoxRight.appendChild(
      Motion(LandingImageCardSection(item.image, item.text, item.styles), 1.5, [
        { key: "height", style: "50%" },
      ]),
      // LandingImageCardSection(item.image, item.text, item.styles),
    );
  });

  imageData.slice(2, 3).forEach((item, index) => {
    imageBoxCenter.appendChild(
      Motion(LandingImageCardSection(item.image, item.text, item.styles), 2),
      // LandingImageCardSection(item.image, item.text, item.styles),
    );
  });

  imageData.slice(0, 2).forEach((item, index) => {
    imageBoxLeft.appendChild(
      Motion(LandingImageCardSection(item.image, item.text, item.styles), 2.5),
    );
  });

  productThreeSectionControl.appendChild(
    ProductBox({
      title: t("productTowSection.title"),
      children: Motion(
        sliderGenerator({
          children: newProduct.map((item) =>
            // Motion(
            //   1
            // ),
            ProductCard({
              image: item.image,
              title: item.title,
              description: item.description,
              price: item.price,
              cardClick: () => useUpdateRout("/product-detail", {data: {productId: item.id}}),
            }),
          ),
          slidesPerView: 5, // تعداد کارت در هر صفحه
          spaceBetween: 8, // فاصله بین کارت‌ها به px
          autoplay: true,
          autoplayDelay: 3000,
          loop: true,
          showPagination: true,
          showNavigation: true,
          width: "100%",
        }),
        3,
      ),
    }),
  );

  container.append(
    herouSection,
    productOneSectionControl,
    productTowSectionControl,
    imageBox,
    productThreeSectionControl,
  );
  return MainPageLayout(container);
};
