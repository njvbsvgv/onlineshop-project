const AuthCardGenerator = ({
  miniTitle,
  subTitle,
  inputsChildren,
  btnText,
  rightText,
  leftText,
  holderId,
  actions:{
    gotoSignUp,
    gotoHomeBtn
  }
}) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("auth-layout-card");

  const logoControlElem = document.createElement("div");
  logoControlElem.classList.add("logo-control");

  const logoTextElem = document.createElement("span");
  logoTextElem.classList.add("logo-text");
  logoTextElem.innerHTML = "لوگو";

  const logoImageElem = document.createElement("img");
  logoImageElem.setAttribute("src", "./src/assets/photos/logo.svg");
  logoImageElem.classList.add("logo-image");

  const titleControlElem = document.createElement("div");
  titleControlElem.classList.add("title-container");

  const miniTitleElem = document.createElement("h1");
  miniTitleElem.innerHTML = miniTitle;
  miniTitleElem.classList.add("main-title");
  miniTitleElem.id = "miniTitle"

  const subTitleElem = document.createElement("h4");
  subTitleElem.innerHTML = subTitle;
  subTitleElem.classList.add("sub-title");
  subTitleElem.id = "subTitle"

  const inputsControlElem = document.createElement("div");
  inputsControlElem.classList.add("inputs-control");

  // const btnElem = document.createElement("button");
  // btnElem.innerHTML = btnText;
  // btnElem.classList.add("btn");

  const bottomItemControlElem = document.createElement("div");
  bottomItemControlElem.classList.add("bottom-item");

  const rightTextElem = document.createElement("span");
  rightTextElem.innerHTML = rightText;
  rightTextElem.classList.add("right-text");

  const leftTextElem = document.createElement("span");
  leftTextElem.innerHTML = leftText;
  leftTextElem.classList.add("left-text");
  leftTextElem.addEventListener("click", () => {gotoSignUp()})

  const text = document.createElement("p")
  text.classList.add("goto-home-btn")
  text.textContent = "بازگشت به خانه"
  text.addEventListener("click", () => {gotoHomeBtn()})

  logoControlElem.append(logoImageElem, logoTextElem);

  titleControlElem.append(miniTitleElem, subTitleElem);

  inputsControlElem.append(inputsChildren);

  bottomItemControlElem.append(rightTextElem, leftTextElem);

  cardContainer.append(
    logoControlElem,
    titleControlElem,
    inputsControlElem,
    bottomItemControlElem,
    text
  );

  if (holderId && holderId.trim() != "") {
    const holdred = document.getElementById(holderId)
    holdred.appendChild(cardContainer)
  }else {
    return cardContainer
  }
};
