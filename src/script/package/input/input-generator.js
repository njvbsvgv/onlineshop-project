const inputGenerator = (inputDataArray, inputWidth, inputChange) => {
  const divControl = document.createElement("div");
  divControl.classList.add("custom-input-section-container");
  inputDataArray.map((item) => {
    let customInputItemContainer = null;
    let inputType = item.type;

    if (item.label && item.label != "") {
      customInputItemContainer = document.createElement("div");
      customInputItemContainer.classList.add("custominput-item-container");
      customInputItemContainer.style.width = inputWidth
        ? `${inputWidth}%`
        : "auto";
    }

    const inputControl = document.createElement("div");
    inputControl.classList.add("custom-input-control");
    inputControl.style.width = inputWidth ? `${inputWidth}%` : "auto";

    let iconElem = null;

    let labelElem = null;

    const inputElem = document.createElement("input");
    inputElem.classList.add("custom-input");
    inputElem.setAttribute("type", inputType);
    inputElem.setAttribute("placeholder", item.placeholder);
    inputElem.addEventListener("input", (event) => {
      inputChange(event);
    });

    if (item.icon && item.icon != "") {
      iconElem = document.createElement("img");
      iconElem.setAttribute("src", item.icon);
      iconElem.classList.add("custom-icon-elem");
      let showFlag = false;
      iconElem.addEventListener("click", () => {
        if (item.isIconClick) {
            if (!showFlag) {
              inputType = "text";
              showFlag = true;
            } else {
              inputType = "password";
              showFlag = false;
            }
            inputElem.setAttribute("type", inputType);
        }
      });
      inputControl.append(inputElem, iconElem);
    } else {
      inputControl.append(inputElem);
    }

    if (customInputItemContainer) {
      labelElem = document.createElement("p");
      labelElem.textContent = item.label;
    }

    if (customInputItemContainer) {
      customInputItemContainer.append(labelElem, inputControl);
      divControl.appendChild(customInputItemContainer);
    } else {
      divControl.appendChild(inputControl);
    }
  });
  return divControl;
};
