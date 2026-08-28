const colorAndSizeBox = (labelText, children) => {
  const container = document.createElement("div");
  container.setAttribute("class", "size-section-controller");

  const label = document.createElement("span");
  label.setAttribute("class", "size-section-label");
  label.textContent = labelText;

  const bottomItem = document.createElement("div");
  bottomItem.setAttribute("class", "size-section-bottom");

  if (Array.isArray(children)) {
    children.forEach((item) => {
      bottomItem.append(item);
    });
  } else {
    bottomItem.append(children);
  }
  container.append(label, bottomItem);

  return container;
};

const ProductDetailPage = () => {
  const productId = getDataFromLocalStorage("routState", true);
  const http = new httpInterceptore();
  const product = http.get(`/products/${productId}`);
  const sizeList = http.get(`/sizeList`);
  const colorList = http.get(`/colorList`);
  const t = languageTranslation("productPage.detail");

  const container = document.createElement("div");
  container.setAttribute("class", "product-detail-page-container");

  const productInformationController = document.createElement("div");
  productInformationController.setAttribute(
    "class",
    "product-information-controller",
  );

  // top items
  const rightItemController = document.createElement("div");
  rightItemController.setAttribute("class", "right-item-controller");

  const image = document.createElement("img");
  image.setAttribute("src", product.data.image);

  rightItemController.appendChild(
    Motion(image, 0.2, [{ key: "width", style: "100%" }]),
  );

  const leftItemController = document.createElement("div");
  leftItemController.setAttribute("class", "left-item-controller");

  const titleElem = document.createElement("h1");
  titleElem.setAttribute("class", "title-elem");
  titleElem.textContent = `${t("title")}: ${product.data.title}`;

  const descElem = document.createElement("p");
  descElem.setAttribute("class", "desc-elem");
  const descStart = document.createElement("span");
  descStart.setAttribute("class", "desc-start");
  descStart.textContent = `${t("desc")}: `;
  const desEnd = document.createElement("span");
  desEnd.textContent = `${product.data.description}`;
  descElem.append(descStart, desEnd);

  const sizeAndColorItemBox = document.createElement("div");
  sizeAndColorItemBox.setAttribute("class", "size-and-color-item-box");

  const priceItemController = document.createElement("div");
  priceItemController.setAttribute("class", "product-item-controller");
  const priceElem = document.createElement("span");
  priceElem.textContent = `${product.data.price} تومان`;
  priceElem.setAttribute("class", "price-elem");
  const finalPriceElem = document.createElement("span");
  finalPriceElem.textContent = `${product.data.price} تومان`;
  finalPriceElem.setAttribute("class", "final-price-elem");

  const buttonItemController = document.createElement("div");
  buttonItemController.setAttribute("class", "button-item-controller");

  sizeAndColorItemBox.append(
    Motion(
      colorAndSizeBox(
        t("sizeLabel"),
        sizeList.data.map((item, index) => {
          return Motion(
            statusBtnGenerator(
              item.name,
              [
                {
                  key: "background",
                  value: product.data.size.includes(item.name)
                    ? "#FE8B1E"
                    : "white",
                },
                {
                  key: "color",
                  value: product.data.size.includes(item.name)
                    ? "white"
                    : "black",
                },
              ],
              ["key", "value"],
            ),
            0.6 + (index + 1) / 5,
            [
              { key: "width", style: "auto" },
              { key: "height", style: "auto" },
            ],
          );
        }),
      ),
      0.4,
      [
        { key: "width", style: "auto" },
        { key: "height", style: "auto" },
      ],
    ),

    Motion(
      colorAndSizeBox(
        t("colorLabel"),
        colorList.data.map((item, index) => {
          return Motion(
            statusBtnGenerator(
              item.name,
              [
                {
                  key: "background",
                  value: product.data.color.includes(item.name)
                    ? "#FE8B1E"
                    : "white",
                },
                {
                  key: "color",
                  value: product.data.color.includes(item.name)
                    ? "white"
                    : "black",
                },
              ],
              ["key", "value"],
            ),
            1.2 + (index + 1) / 5,
            [
              { key: "width", style: "auto" },
              { key: "height", style: "auto" },
            ],
          );
        }),
      ),
      0.8,
      [
        { key: "width", style: "auto" },
        { key: "height", style: "auto" },
      ],
    ),
  );
  priceItemController.append(
    Motion(priceElem, 2.2, [
      { key: "width", style: "auto" },
      { key: "height", style: "auto" },
    ]),
    Motion(finalPriceElem, 2.4, [
      { key: "width", style: "auto" },
      { key: "height", style: "auto" },
    ]),
  );

  buttonItemController.append(
    Motion(
      buttonGenerator(
        t("addToBasket"),
        "button",
        "",
        true,
        () => {addToBasketHandler(productId)},
        "./src/assets/icons/arrow-light.svg",
      ),
      2.6,
      [
        { key: "width", style: "auto" },
        { key: "height", style: "auto" },
      ],
    ),
  );

  leftItemController.append(
    Motion(titleElem, 0.2, [
      { key: "width", style: "auto" },
      { key: "height", style: "auto" },
    ]),
    Motion(descElem, 0.4, [
      { key: "width", style: "auto" },
      { key: "height", style: "auto" },
    ]),
    sizeAndColorItemBox,
    priceItemController,
    buttonItemController,
  );
  productInformationController.append(rightItemController, leftItemController);
  // top items

  container.append(productInformationController);

  const page = MainPageLayout(container);
  return page;
};
