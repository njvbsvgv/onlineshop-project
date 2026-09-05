// const AuthCardGenerator = ({
//   miniTitle,
//   subTitle,
//   inputsChildren,
//   btnText,
//   rightText,
//   leftText,
//   holderId,
//   actions: { gotoSignUp, gotoHomeBtn },
// }) => {
//   const cardContainer = document.createElement("div");
//   cardContainer.classList.add("auth-layout-card");

import { getDataFromLocalStorage } from "../../../hooks/local-storage/index.js";
import languageSwitcherGenerator from "../../package/language-switcher/languageSwitcher-generator.js";
import { updateLanguage } from "../../package/language-translation-module/languageTranslation.js";
import Logo from "../common/logo/logo.js";
import { RebuildWebPages } from "../partial/create-web-page.js";

//   const logoControlElem = document.createElement("div");
//   logoControlElem.classList.add("logo-control");

//   const logoTextElem = document.createElement("span");
//   logoTextElem.classList.add("logo-text");
//   logoTextElem.innerHTML = "لوگو";

//   const logoImageElem = document.createElement("img");
//   logoImageElem.setAttribute("src", "./src/assets/photos/logo.svg");
//   logoImageElem.classList.add("logo-image");

//   const titleControlElem = document.createElement("div");
//   titleControlElem.classList.add("title-container");

//   const miniTitleElem = document.createElement("h1");
//   miniTitleElem.innerHTML = miniTitle;
//   miniTitleElem.classList.add("main-title");
//   miniTitleElem.id = "miniTitle";

//   const subTitleElem = document.createElement("h4");
//   subTitleElem.innerHTML = subTitle;
//   subTitleElem.classList.add("sub-title");
//   subTitleElem.id = "subTitle";

//   const inputsControlElem = document.createElement("div");
//   inputsControlElem.classList.add("inputs-control");

//   const bottomItemControlElem = document.createElement("div");
//   bottomItemControlElem.classList.add("bottom-item");

//   const rightTextElem = document.createElement("span");
//   rightTextElem.innerHTML = rightText;
//   rightTextElem.classList.add("right-text");

//   const leftTextElem = document.createElement("span");
//   leftTextElem.innerHTML = leftText;
//   leftTextElem.classList.add("left-text");
//   leftTextElem.addEventListener("click", () => {
//     gotoSignUp();
//   });

//   const text = document.createElement("p");
//   text.classList.add("goto-home-btn");
//   text.textContent = "بازگشت به خانه";
//   text.addEventListener("click", () => {
//     gotoHomeBtn();
//   });

//   const language = getDataFromLocalStorage("language");
//   const changeLanguageHandler = (locale) => {
//     if (locale == "fa") {
//       updateLanguage("fa");
//     } else {
//       updateLanguage("en");
//     }
//     RebuildWebPages();
//   };

//   logoControlElem.append(
//     logoImageElem,
//     logoTextElem,
//     languageSwitcherGenerator(language, changeLanguageHandler),
//   );

//   titleControlElem.append(miniTitleElem, subTitleElem);

//   inputsControlElem.append(inputsChildren);

//   bottomItemControlElem.append(rightTextElem, leftTextElem);

//   cardContainer.append(
//     logoControlElem,
//     titleControlElem,
//     inputsControlElem,
//     bottomItemControlElem,
//     text,
//   );

//   if (holderId && holderId.trim() != "") {
//     const holdred = document.getElementById(holderId);
//     holdred.appendChild(cardContainer);
//   } else {
//     return cardContainer;
//   }
// };

class AuthCardClass {
  miniTitle = "";
  subTitle = "";
  inputsChildren = "";
  btnText = "";
  rightText = "";
  leftText = "";
  cardBottomText = "";
  holderId = "";
  actions = { gotoSignUp: () => {}, gotoHomeBtn: () => {} };
  constructor(
    miniTitle,
    subTitle,
    inputsChildren,
    btnText,
    rightText,
    leftText,
    cardBottomText,
    holderId,
    actions = { gotoSignUp, gotoHomeBtn },
  ) {
    this.miniTitle = miniTitle;
    this.subTitle = subTitle;
    this.inputsChildren = inputsChildren;
    this.btnText = btnText;
    this.rightText = rightText;
    this.leftText = leftText;
    this.cardBottomText = cardBottomText;
    this.holderId = holderId;
    this.actions = actions;
  }

  generator() {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("auth-layout-card");

    const logoControlElem = document.createElement("div");
    logoControlElem.classList.add("logo-control");

    // const logoTextElem = document.createElement("span");
    // logoTextElem.classList.add("logo-text");
    // logoTextElem.innerHTML = "لوگو";
    const logoImageControl = document.createElement("div")
    logoImageControl.classList.add("logo-image-control")

    // const logoImageElem = document.createElement("img");
    // logoImageElem.setAttribute("src", "./src/assets/photos/logo.svg");
    // logoImageElem.classList.add("logo-image");

    const titleControlElem = document.createElement("div");
    titleControlElem.classList.add("title-container");

    const miniTitleElem = document.createElement("h1");
    miniTitleElem.classList.add("main-title");
    miniTitleElem.id = "miniTitle";
    miniTitleElem.innerHTML = this.miniTitle;

    const subTitleElem = document.createElement("h4");
    subTitleElem.classList.add("sub-title");
    subTitleElem.id = "subTitle";
    subTitleElem.innerHTML = this.subTitle;

    const inputsControlElem = document.createElement("div");
    inputsControlElem.classList.add("inputs-control");

    const bottomItemControlElem = document.createElement("div");
    bottomItemControlElem.classList.add("bottom-item");

    const rightTextElem = document.createElement("span");
    rightTextElem.classList.add("right-text");
    rightTextElem.innerHTML = this.rightText;

    const leftTextElem = document.createElement("span");
    leftTextElem.classList.add("left-text");
    leftTextElem.innerHTML = this.leftText;
    leftTextElem.addEventListener("click", () => {
      this.actions.gotoSignUp();
    });

    const text = document.createElement("p");
    text.classList.add("goto-home-btn");
    text.textContent = this.cardBottomText;
    text.addEventListener("click", () => {
      this.actions.gotoHomeBtn();
    });

    const language = getDataFromLocalStorage("language");
    const changeLanguageHandler = (locale) => {
      updateLanguage(locale);
      // if (locale == "fa") {
      // } else {
      //   updateLanguage("en");
      // }
      RebuildWebPages();
    };

    logoImageControl.appendChild(Logo({onClick: () => {}}))
    logoControlElem.append(
      languageSwitcherGenerator(language, changeLanguageHandler),
      logoImageControl,
      // logoTextElem,
    );

    titleControlElem.append(miniTitleElem, subTitleElem);

    inputsControlElem.append(this.inputsChildren);

    bottomItemControlElem.append(rightTextElem, leftTextElem);

    cardContainer.append(
      logoControlElem,
      titleControlElem,
      inputsControlElem,
      bottomItemControlElem,
      text,
    );

    if (this.holderId && this.holderId.trim() != "") {
      const holdred = document.getElementById(this.holderId);
      holdred.appendChild(cardContainer);
    } else {
      return cardContainer;
    }
  }
}

export default AuthCardClass