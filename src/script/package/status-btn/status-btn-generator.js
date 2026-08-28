const statusBtnGenerator = (text, customStyle, key) => {
  const btn = document.createElement("button");
  btn.setAttribute("class", "btn-status");
  customStyle.forEach((item) => {
    btn.style[item[key[0]]] = item[key[1]];
  });
  btn.textContent = text;
  return btn;
};
