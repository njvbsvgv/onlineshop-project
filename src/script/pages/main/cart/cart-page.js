import { deleteOrder, getOrderDataHandler, minusOrderCounter, plusOrderConter } from "../../../../services/cart-api.js";
import CartCardGenerator from "../../../modules/main/cart/CartCard.js";
import purchaseDetailsGenerator from "../../../modules/main/cart/purchaseDetails-generator.js";
import { useUpdateRout } from "../../../modules/partial/use-update-route.js";
import { buttonGenerator } from "../../../package/button/button-generator.js";
import { languageTranslation } from "../../../package/language-translation-module/languageTranslation.js";
import { metaDataGenerator } from "../../../package/metadata/metadata-generator.js";
import MainPageLayout from "../main-page-layout.js";

const CartPage = () => {
  let orderData = getOrderDataHandler();
  console.log("orderData ==>", orderData);
  const t = languageTranslation("cartPage");
  const container = document.createElement("div");
  container.setAttribute("class", "cart-page-container");

  metaDataGenerator("cart");

  const topItemController = document.createElement("div");
  topItemController.setAttribute("class", "top-item-controller");

  const rightItem = document.createElement("div");
  rightItem.setAttribute("class", "cart-right-item");

  const rightItemTitle = document.createElement("h3");
  rightItemTitle.textContent = t("yourShopingCart");

  const cardController = document.createElement("div");
  cardController.setAttribute("class", "cart-box card-controller");

  const leftItem = document.createElement("div");
  leftItem.setAttribute("class", "cart-left-item");

  const leftItemTitle = document.createElement("h3");
  leftItemTitle.textContent = t("purchaseDetails");

  const leftBox = document.createElement("div");
  leftBox.setAttribute("class", "cart-box left-box");

  const noResult = document.createElement("p");
  noResult.setAttribute("class", "order-no-result");
  noResult.textContent = t("noOrderResultMessage");

  let finalePrice = 0
  orderData?.forEach((item) => {
    console.log("item ==>", item)
    finalePrice += item.price
  })
  const purchaseDetailsGeneration = new purchaseDetailsGenerator(() => {})

  const cardGeneratorClass = new CartCardGenerator(
    (id) => {
      plusOrderConter(id);
      orderData = getOrderDataHandler();
      orderData.forEach((item) => finalePrice += item.price)
      leftBox.innerHTML = ""
      leftBox.appendChild(purchaseDetailsGeneration.generator(orderData?.length, finalePrice))
      cardController.innerHTML = "";
      if (orderData && orderData.length > 0) {
        orderData.forEach((item) => {
          cardController.appendChild(
            cardGeneratorClass.generator(
              item.id,
              item.image,
              item.title,
              item.size,
              item.color,
              item.count,
              item.price,
            ),
          );
        });
      } else {
        cardController.append(
          noResult,
          buttonGenerator(t("btnText"), "button", "", true, () => {
            useUpdateRout("/products");
          }),
        );
      }
    },
    (id) => {
      minusOrderCounter(id);
      orderData = getOrderDataHandler();
      orderData.forEach((item) => finalePrice += item.price)
      leftBox.innerHTML = ""
      leftBox.appendChild(purchaseDetailsGeneration.generator(orderData?.length, finalePrice))
      cardController.innerHTML = "";
      if (orderData && orderData.length > 0) {
        orderData.forEach((item) => {
          cardController.appendChild(
            cardGeneratorClass.generator(
              item.id,
              item.image,
              item.title,
              item.size,
              item.color,
              item.count,
              item.price,
            ),
          );
        });
      } else {
        cardController.append(
          noResult,
          buttonGenerator(t("btnText"), "button", "", true, () => {
            useUpdateRout("/products");
          }),
        );
      }
    },
    (id) => {
      deleteOrderHandler(id);
      orderData = getOrderDataHandler();
      cardController.innerHTML = "";
      if (orderData && orderData.length > 0) {
        orderData.forEach((item) => {
          cardController.appendChild(
            cardGeneratorClass.generator(
              item.id,
              item.image,
              item.title,
              item.size,
              item.color,
              item.count,
              item.price,
            ),
          );
        });
      } else {
        cardController.append(
          noResult,
          buttonGenerator(t("btnText"), "button", "", true, () => {
            useUpdateRout("/products");
          }),
        );
      }
    },
  );

  const deleteOrderHandler = (id) => {
    deleteOrder(id);
  };

  if (orderData && orderData.length > 0) {
    orderData.forEach((item) => {
      cardController.appendChild(
        cardGeneratorClass.generator(
          item.id,
          item.image,
          item.title,
          item.size,
          item.color,
          item.count,
          item.price,
        ),
      );
    });
  } else {
    cardController.append(
      noResult,
      buttonGenerator(t("btnText"), "button", "", true, () => {
        useUpdateRout("/products");
      }),
    );
  }

  

  rightItem.append(rightItemTitle, cardController);

  
  leftBox.appendChild(purchaseDetailsGeneration.generator(orderData?.length, finalePrice))
  leftItem.append(leftItemTitle, leftBox);

  topItemController.append(rightItem, leftItem);
  container.append(topItemController);
  return MainPageLayout(container);
};


export default CartPage