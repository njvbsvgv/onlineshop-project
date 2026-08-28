const ProductPage = () => {
  const t = languageTranslation("productPage");

  const container = document.createElement("div");
  container.className = "product-page-container";

  const topItemController = document.createElement("div");
  topItemController.setAttribute("class", "top-item-controller");

  const sortItem = document.createElement("div");
  sortItem.setAttribute("class", "sort-item");

  const listResultItem = document.createElement("span");
  listResultItem.setAttribute("class", "list-result");

  const bottomItemController = document.createElement("div");
  bottomItemController.setAttribute("class", "bottom-item-controller");

  const cardController = document.createElement("div");
  cardController.setAttribute("class", "card-controller");

  const paginationContainer = document.createElement("div");
  paginationContainer.setAttribute("class", "pagination-controller");

  const filtersBoxController = document.createElement("div");
  filtersBoxController.setAttribute("class", "filters-box-controller");

  filtersBoxController.append(
    FilterBoxGenerator(
      categoryData,
      "checkbox",
      "category",
      "text",
      t("filterBox.category.label"),
    ),
    FilterBoxGenerator(
      brandData,
      "checkbox",
      "brand",
      "text",
      t("filterBox.brand.label"),
    ),
  );

  sortItem.appendChild(inputGenerator(t("inputData"), 50));
  topItemController.append(sortItem, listResultItem);
  bottomItemController.append(filtersBoxController, cardController);
  container.append(
    topItemController,
    bottomItemController,
    paginationContainer,
  );

  const page = MainPageLayout(container);
  const searchInputEl = sortItem.querySelector("input");

  setTimeout(() => {
    const filterPagination = ProductFilterPagination({
      productsData: products,
      cardController,
      renderItem: (item, list) => {
        console.log("list ==>", list);
        listResultItem.textContent = `${list ? list : 0} ${t("listResult")}`;
        if (list > 0) {
          cardController.appendChild(
            Motion(
              ProductCard({
                image: item.image,
                title: item.title,
                description: item.description,
                price: item.price,
                cardClick: () => {
                  useUpdateRout("/product-detail", item.id);
                  // alert(`Product Id: ${item.id}`)
                },
                favoriteClick: () => alert(`Product Id: ${item.id}`),
              }),
              0.2,
              [
                { key: "width", style: "auto" },
                { key: "height", style: "auto" },
              ],
            ),
          );
        }
      },
      searchInput: searchInputEl,
      paginationContainer,
      itemsPerPage: 8,
    });
    filterPagination.init();
  }, 0);

  return page;
};
