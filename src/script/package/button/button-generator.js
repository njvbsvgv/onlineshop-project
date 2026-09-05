export const buttonGenerator = (text, type, name, styleType, onClick, icon) => {
  const customBtn = document.createElement("button");
  if (onClick) {
    customBtn.addEventListener("click", () => {
      onClick();
    });
  }
  switch (styleType) {
    case true:
      customBtn.classList.add("custom-btn");
      break;
    case false:
      customBtn.classList.add("custom-btn-border");
      break;
  }
  customBtn.setAttribute("type", type);
  customBtn.setAttribute("name", name);
  // console.log("icon ==>", icon);
  if (icon) {
    const iconElme = document.createElement("img");
    iconElme.setAttribute("src", icon);
    customBtn.appendChild(iconElme);
  }
  customBtn.textContent = text;
  return customBtn;
};

export class BtnGeneratorClass {
  click = null;

  constructor(clickHandler) {
    if (clickHandler) {
      this.click = clickHandler;
    }
  }

  generator(text, type, name, styleType, icon) {
    const customBtn = document.createElement("button");
    if (this.click) {
      customBtn.addEventListener("click", () => {
        this.click();
      });
    }
    switch (styleType) {
      case true:
        customBtn.classList.add("custom-btn");
        break;
      case false:
        customBtn.classList.add("custom-btn-border");
        break;
    }
    customBtn.setAttribute("type", type);
    customBtn.setAttribute("name", name);
    // console.log("icon ==>", icon);
    if (icon) {
      const iconElme = document.createElement("img");
      iconElme.setAttribute("src", icon);
      customBtn.appendChild(iconElme);
    }
    customBtn.textContent = text;
    return customBtn;
  }
}