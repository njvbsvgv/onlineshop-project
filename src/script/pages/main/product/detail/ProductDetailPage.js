import { getDataFromLocalStorage } from "../../../../../hooks/local-storage/index.js";
import { addToBasketHandler } from "../../../../../services/addToBasketHandler.js";
import httpInterceptore from "../../../../../services/interceptore.js";
import { getSimilerProduct } from "../../../../../services/product-api.js";
import { Motion } from "../../../../modules/animation/motion.js";
import commentWrapper from "../../../../modules/main/poduct-and-detail/comment-card/comment-wrapper.js";
import descriptionAndCommentBoxGenerator from "../../../../modules/main/poduct-and-detail/description-comment-bx/descriptionAndCommentBox-generator.js";
import ProductBox from "../../../../modules/partial/product-box/product-box.js";
import ProductCard from "../../../../modules/partial/product-card/productCard-generator.js";
import { useUpdateRout } from "../../../../modules/partial/use-update-route.js";
import { buttonGenerator } from "../../../../package/button/button-generator.js";
import { languageTranslation } from "../../../../package/language-translation-module/languageTranslation.js";
import { metaDataGenerator } from "../../../../package/metadata/metadata-generator.js";
import sliderGenerator from "../../../../package/slider/slider-generator.js";
import statusBtnGenerator from "../../../../package/status-btn/status-btn-generator.js";
import MainPageLayout from "../../main-page-layout.js";

const colorAndSizeBox = (labelText, children) => {
  const container = document.createElement("div");
  container.setAttribute("class", "size-section-controller");

  metaDataGenerator("product-detail");

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
  const routState = getDataFromLocalStorage("routState", true);
  const productId = routState.data.productId
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
        () => {
          addToBasketHandler(productId);
        },
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

  const productInfoController = document.createElement("div")
  productInfoController.setAttribute("class", "product-info-controller")
  const productInfoLabel = document.createElement("h4")
  productInfoLabel.textContent = t("productInfoLabel")
  const productInfo = document.createElement("p")
  productInfo.textContent = product.data.description
  productInfoController.append(productInfoLabel, productInfo)

  const similerProduct = getSimilerProduct(product.data.category);
  container.append(
    productInformationController,
    descriptionAndCommentBoxGenerator(productInfoController, commentWrapper()),
    similerProduct.length > 0 ?
    Motion(
      ProductBox({
        title: t("similarProducts"),
        children: Motion(
          sliderGenerator({
            children: similerProduct.map((item) =>
              ProductCard({
                image: item.image,
                title: item.title,
                description: item.description,
                price: item.price,
                cardClick: () => {
                  useUpdateRout("/product-detail", item.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                },
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
      3.6,
      [
        { key: "width", style: "auto" },
        { key: "height", style: "auto" },
      ],
    ) : null,
  );

  const page = MainPageLayout(container);
  return page;
};


export default ProductDetailPage