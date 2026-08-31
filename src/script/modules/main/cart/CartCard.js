const actionBtn = (children, click) => {
  const btn = document.createElement("button");
  btn.setAttribute("class", "action-btn");
  btn.appendChild(children);
  btn.addEventListener("click", () => click());
  return btn;
};

class CartCardGenerator {
  actions = {
    plusAction: () => {},
    minusAction: () => {},
    deleteAction: () => {},
  };

  constructor(plusAction, minusAction, deleteAction) {
    this.actions = {
      plusAction: (id) => plusAction(id),
      minusAction: (id) => minusAction(id),
      deleteAction: (id) => deleteAction(id),
    };
  }

  generator(id, image, title, size, color, count, price) {
    const card = document.createElement("div");
    card.setAttribute("class", "cart-card");

    const rightItem = document.createElement("div");
    rightItem.setAttribute("class", "right-item");
    const pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.setAttribute("src", image);

    const leftItem = document.createElement("div");
    leftItem.setAttribute("class", "left-item");

    const leftTop = document.createElement("div");
    leftTop.setAttribute("class", "left-top");

    const titleElem = document.createElement("h3");
    titleElem.textContent = title;

    const deleteIcon = document.createElement("img");
    deleteIcon.setAttribute("src", "./src/assets/icons/trash.svg");
    deleteIcon.addEventListener("click", () => {
      this.actions.deleteAction(id);
    });

    const leftCenter = document.createElement("div");
    leftCenter.setAttribute("class", "left-center");

    const sizeButton = document.createElement("button");
    sizeButton.setAttribute("class", "size-button");
    const sizeIcon = document.createElement("img");
    sizeIcon.setAttribute("src", "./src/assets/icons/size.svg");
    const sizeText = document.createElement("span");
    if (Array.isArray(size)) {
      size.forEach((item) => (sizeText.textContent = item));
    } else {
      sizeText.textContent = size;
    }
    sizeButton.append(sizeIcon, sizeText);

    const colorButton = document.createElement("button");
    colorButton.setAttribute("class", "color-button");
    const colorIcon = document.createElement("img");
    colorIcon.setAttribute("src", "./src/assets/icons/color.svg");
    const colorText = document.createElement("span");
    if (Array.isArray(color)) {
      color.forEach((item) => (colorText.textContent = item));
    } else {
      colorText.textContent = color;
    }
    colorButton.append(colorIcon, colorText);

    const leftBottom = document.createElement("div");
    leftBottom.setAttribute("class", "left-bottom");

    const leftBottomRight = document.createElement("div");

    const plusIcon = document.createElement("img");
    plusIcon.setAttribute("class", "plus-icon");
    plusIcon.setAttribute("src", "./src/assets/icons/add-line.svg");
    const plusBtn = actionBtn(plusIcon, () => this.actions.plusAction(id));

    const minusIcon = document.createElement("img");
    minusIcon.setAttribute("class", "minus-icon");
    minusIcon.setAttribute("src", "./src/assets/icons/minus.svg");
    const minusBtn = actionBtn(minusIcon, () => this.actions.minusAction(id));

    const counterText = document.createElement("span");
    counterText.textContent = count;

    leftBottomRight.append(minusBtn, counterText, plusBtn);

    const priceElem = document.createElement("span");
    priceElem.textContent = (price * count);

    rightItem.appendChild(pic);
    leftTop.append(titleElem, deleteIcon);
    leftCenter.append(sizeButton, colorButton);
    leftBottom.append(leftBottomRight, priceElem);
    leftItem.append(leftTop, leftCenter, leftBottom);
    card.append(rightItem, leftItem);
    return card;
  }
}

// const CartCard = (
//   image,
//   title,
//   size,
//   color,
//   count,
//   price,
//   actions = { plusAction, minusAction, deleteAction },
// ) => {
//   const card = document.createElement("div");
//   card.setAttribute("class", "cart-card");

//   const rightItem = document.createElement("div");
//   rightItem.setAttribute("class", "right-item");
//   const pic = document.createElement("img");
//   pic.setAttribute("class", "pic");
//   pic.setAttribute("src", image);

//   const leftItem = document.createElement("div");
//   leftItem.setAttribute("class", "left-item");

//   const leftTop = document.createElement("div");
//   leftTop.setAttribute("class", "left-top");

//   const titleElem = document.createElement("h3");
//   titleElem.textContent = title;

//   const deleteIcon = document.createElement("img");
//   deleteIcon.setAttribute("src", "./src/assets/icons/trash.svg");
//   deleteIcon.addEventListener("click", () => {
//     actions.deleteAction();
//   });

//   const leftCenter = document.createElement("div");
//   leftCenter.setAttribute("class", "left-center");

//   const sizeButton = document.createElement("button");
//   sizeButton.setAttribute("class", "size-button");
//   const sizeIcon = document.createElement("img");
//   sizeIcon.setAttribute("src", "./src/assets/icons/size.svg");
//   const sizeText = document.createElement("span");
//   if (Array.isArray(size)) {
//     size.forEach((item) => (sizeText.textContent = item));
//   } else {
//     sizeText.textContent = size;
//   }
//   sizeButton.append(sizeIcon, sizeText);

//   const colorButton = document.createElement("button");
//   colorButton.setAttribute("class", "color-button");
//   const colorIcon = document.createElement("img");
//   colorIcon.setAttribute("src", "./src/assets/icons/color.svg");
//   const colorText = document.createElement("span");
//   if (Array.isArray(color)) {
//     color.forEach((item) => (colorText.textContent = item));
//   } else {
//     colorText.textContent = color;
//   }
//   colorButton.append(colorIcon, colorText);

//   const leftBottom = document.createElement("div");
//   leftBottom.setAttribute("class", "left-bottom");

//   const leftBottomRight = document.createElement("div");

//   const plusIcon = document.createElement("img");
//   plusIcon.setAttribute("class", "plus-icon");
//   plusIcon.setAttribute("src", "./src/assets/icons/add-line.svg");
//   const plusBtn = actionBtn(plusIcon, () => actions.plusAction());

//   const minusIcon = document.createElement("img");
//   minusIcon.setAttribute("class", "minus-icon");
//   minusIcon.setAttribute("src", "./src/assets/icons/minus.svg");
//   const minusBtn = actionBtn(minusIcon, () => actions.minusAction());

//   const counterText = document.createElement("span");
//   counterText.textContent = count;

//   leftBottomRight.append(minusBtn, counterText, plusBtn);

//   const priceElem = document.createElement("span");
//   priceElem.textContent = price;

//   rightItem.appendChild(pic);
//   leftTop.append(titleElem, deleteIcon);
//   leftCenter.append(sizeButton, colorButton);
//   leftBottom.append(leftBottomRight, priceElem);
//   leftItem.append(leftTop, leftCenter, leftBottom);
//   card.append(rightItem, leftItem);
//   return card;
// };
