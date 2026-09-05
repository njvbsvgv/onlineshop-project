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
    inputElem.setAttribute("name", item.name);
    inputElem.setAttribute("placeholder", item.placeholder);
    inputElem.addEventListener("input", (event) => {
      inputChange(event);

      if (item.validation) {
        inputElem.classList.remove("input-error");
        if (errorElem) errorElem.style.display = "none";
      }
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

    // --- Validation ---
    inputElem.setAttribute("data-valid", item.validation ? "false" : "true");
    let errorElem = null;
    if (item.validation) {
      errorElem = document.createElement("span");
      errorElem.classList.add("input-error-message");
      errorElem.style.display = "none";

      inputElem.addEventListener("blur", () => {
        const val = inputElem.value.trim();
        let isValid = true;

        if (val === "") {
          isValid = false;
        } else if (
          item.validation.required &&
          !item.validation.pattern &&
          !item.validation.minLength
        ) {
          isValid = true; // فقط required بود و پر شده ✅
        } else if (
          item.validation.pattern &&
          !item.validation.pattern.test(val)
        ) {
          isValid = false;
        } else if (
          item.validation.minLength &&
          val.length < item.validation.minLength
        ) {
          isValid = false;
        }

        if (!isValid) {
          inputElem.setAttribute("data-valid", "false");
          errorElem.textContent = item.validation.errorMessage;
          errorElem.style.display = "block";
          inputElem.classList.add("input-error");
        } else {
          inputElem.setAttribute("data-valid", "true");
          errorElem.style.display = "none";
          inputElem.classList.remove("input-error");
        }
      });
    }
    // --- End Validation ---

    if (customInputItemContainer) {
      if (errorElem) {
        customInputItemContainer.append(labelElem, inputControl, errorElem);
      } else {
        customInputItemContainer.append(labelElem, inputControl);
      }
      divControl.appendChild(customInputItemContainer);
    } else {
      divControl.appendChild(inputControl);
    }
  });

  return divControl;
};


export default inputGenerator