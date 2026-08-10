const LadingPage = () => {
  const container = document.createElement("div");
  container.className = "landing-page-container"

  const herouSection = document.createElement("div");
  herouSection.className = "herou-section";

  const productOneSectionControl = document.createElement("div")
  productOneSectionControl.className = "product-one-section-control"

  const productTowSectionControl = document.createElement("div")
  productTowSectionControl.className = "product-one-section-control"

  herouSection.appendChild(
    modernSlider(
      [
        {
          image:
            "./src/assets/photos/slider/f7a20a4ec15036874bc0888ae6d21bb570ec0db7.jpg",
        },
        {
          image:
            "./src/assets/photos/slider/images (1).jpg",
        },
        {
          image:
            "./src/assets/photos/slider/images (2).jpg",
        },
        {
          image:
            "./src/assets/photos/slider/images.jpg",
        },
      ],
      "image",
      "./src/assets/icons/arrow-right.svg",
      "./src/assets/icons/arrow-left.svg",
    ),
  );

  productOneSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))
  productTowSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))
  productTowSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))
  productTowSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))
  productTowSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))
  productTowSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))
  productTowSectionControl.appendChild(ProductBox({title: "پرفروش ترین ها"}))

  container.append(herouSection, productOneSectionControl, productTowSectionControl);
  return MainPageLayout(container);
};
