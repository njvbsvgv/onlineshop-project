export const Motion = (children, delay, customStyles) => {
  const motionContainer = document.createElement("div");
  motionContainer.appendChild(children);

  motionContainer.style.width = "100%";
  motionContainer.style.height = "100%";

  if (customStyles && Array.isArray(customStyles)) {
    customStyles.forEach((item) => {
      motionContainer.style[item.key] = item.style;
    });
  }

  // initial
  motionContainer.style.opacity = "0";
  motionContainer.style.transition = "1s";

  // animate
  setTimeout(() => {
    motionContainer.style.opacity = "1";
  }, delay * 1000);
  return motionContainer;
};
