import { getProductList } from "../../../../services/product-api.js";
import { Motion } from "../../../modules/animation/motion.js";
import ProductCard from "../../../modules/partial/product-card/productCard-generator.js";
import { useUpdateRout } from "../../../modules/partial/use-update-route.js";
import FilterBoxGenerator from "../../../package/filter-box/filter-box-generator.js";
import inputGenerator from "../../../package/input/input-generator.js";
import { languageTranslation } from "../../../package/language-translation-module/languageTranslation.js";
import { metaDataGenerator } from "../../../package/metadata/metadata-generator.js";
import ProductFilterPagination from "../../../package/product-filter-pagination/product-filter-pagination.js";
import { brandData, categoryData } from "../../../store.js";
import MainPageLayout from "../main-page-layout.js";

const ProductPage = () => {
  const t = languageTranslation("productPage");
  metaDataGenerator("products");

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

  const products = getProductList()

  setTimeout(() => {
    const filterPagination = ProductFilterPagination({
      productsData: products,
      cardController,
      renderItem: (item, list) => {
        // console.log("list ==>", list);
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
                  useUpdateRout("/product-detail", {data: {productId: item.id}});
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


export default ProductPage