import { languageTranslation } from "../../../package/language-translation-module/languageTranslation.js";

const ProductBox = ({ title, children }) => {
  const t = languageTranslation("landing")
  // console.log("children ==>", children);
  const container = document.createElement("div");
  container.className = "product-box-container";

  const topItemControl = document.createElement("div");
  topItemControl.className = "product-box-top-item-control";

  const rightItem = document.createElement("div");
  rightItem.className = "right-item";

  const productIcon = document.createElement("img");
  productIcon.className = "product-icon";
  productIcon.setAttribute("src", "./src/assets/icons/product-icon.svg");

  const titleText = document.createElement("h3");
  titleText.className = "title-text";
  titleText.textContent = title;

  const hrLine = document.createElement("hr");
  hrLine.className = "hr-line";

  const leftItem = document.createElement("div");
  leftItem.className = "left-item";

  const arrowIcon = document.createElement("img");
  arrowIcon.setAttribute("src", "./src/assets/icons/arrow.svg");
  arrowIcon.className = "arrow-icon";

  const showAllText = document.createElement("span");
  showAllText.className = "show-all-text";
  showAllText.textContent = t("showAllBtn");

  leftItem.append(showAllText, arrowIcon);
  rightItem.append(productIcon, titleText);

  topItemControl.append(rightItem, hrLine, leftItem);

  const cardItem = document.createElement("div");
  cardItem.className = "product-box-card-item-control";

  // if (Array.isArray(children)) {
  //   children.map((item) => cardItem.appendChild(item));
  // } else {
  //   cardItem.appendChild(children);
  // }

  container.append(topItemControl, children);

  return container;
};

export default ProductBox