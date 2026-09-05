import { buttonGenerator } from "../../../package/button/button-generator.js";
import { languageTranslation } from "../../../package/language-translation-module/languageTranslation.js";

class purchaseDetailsGenerator {
  click = () => {};

  constructor(clickHandler) {
    this.click = () => clickHandler();
  }

  generator(productCount, price) {
    const t = languageTranslation("cartPage");
    const container = document.createElement("div");
    container.setAttribute("class", "purchase-details-container");

    const title = document.createElement("p");
    title.textContent = `${productCount} ${t("product")}`;

    const sendBox = document.createElement("div");
    sendBox.setAttribute("class", "purchase-details-send-box");
    const rightText = document.createElement("span");
    rightText.textContent = t("shippingCost");

    const leftText = document.createElement("span");
    leftText.textContent = t("freeShipping");

    const hrElem = document.createElement("hr");

    const priceSection = document.createElement("div");
    priceSection.setAttribute("class", "price-section");
    const finalPriceElemText = document.createElement("span");
    finalPriceElemText.textContent = t("totalAmount");

    const finalPriceElem = document.createElement("span");
    finalPriceElem.setAttribute("class", "final-price-elem");
    finalPriceElem.textContent = `${price} تومان`;

    priceSection.append(finalPriceElemText, finalPriceElem);

    const btnController = document.createElement("div");
    btnController.setAttribute("class", "btn-controller");
    btnController.appendChild(
      buttonGenerator(
        t("placeOrder"),
        "button",
        "",
        true,
        () => {},
        "./src/assets/icons/order.svg",
      ),
    );

    sendBox.append(rightText, leftText);
    container.append(title, sendBox, hrElem, priceSection, btnController);
    return container;
  }
}

export default purchaseDetailsGenerator