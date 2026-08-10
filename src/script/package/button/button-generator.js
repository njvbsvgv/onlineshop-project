/**
 * Creates a custom button element.
 *
 * @param {string} text - Text displayed inside the button
 * @param {("button" | "submit" | "reset")} type - HTML button type
 * @param {string} name - Name attribute of the button
 * @param {boolean} styleType - true = filled style, false = border style
 * @returns {HTMLButtonElement} The generated button element
 */

const buttonGenerator = (text, type, name, styleType, onClick) => {
  const customBtn = document.createElement("button");
  customBtn.addEventListener("click", () => {onClick()})
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
  customBtn.textContent = text;
  return customBtn;
};
