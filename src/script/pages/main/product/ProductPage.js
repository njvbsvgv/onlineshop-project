const ProductPage = () => {
  const t = languageTranslation("productPage");

  const container = document.createElement("div");
  container.className = "product-page-container";

  const topItemController = document.createElement("div");
  topItemController.setAttribute("class", "top-item-controller");

  const sortItem = document.createElement("div");
  sortItem.setAttribute("class", "sort-item");

  const bottomItemController = document.createElement("div");
  bottomItemController.setAttribute("class", "bottom-item-controller");

  const cardController = document.createElement("div");
  cardController.setAttribute("class", "card-controller");

  const filtersBoxController = document.createElement("div");
  filtersBoxController.setAttribute("class", "filters-box-controller");

  filtersBoxController.append(
    FilterBoxGenerator(
      categoryData,
      "checkbox",
      "category",
      "text",
      "دسته بندی",
    ),
    FilterBoxGenerator(brandData, "checkbox", "brand", "text", "برندها"),
  );

  products.forEach((item) => {
    cardController.appendChild(
      ProductCard({
        image: item.image,
        title: item.title,
        description: item.description,
        price: item.price,
      }),
    );
  });

  sortItem.appendChild(inputGenerator(t("inputData"), 50));
  topItemController.append(sortItem);
  bottomItemController.append(filtersBoxController, cardController);

  container.append(topItemController, bottomItemController);

  return MainPageLayout(container);
};
