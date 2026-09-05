let topPosition = 10

export const toast = () => {
//   const holder = document.getElementById("toasterContainer");
  const btn = document.createElement("button");
  btn.setAttribute("class", "toasetr-btn-elem");
  btn.style.top = `${topPosition}px`
  topPosition += 60
  const messageElem = document.createElement("span");
  const removeElem = document.createElement("img");
  removeElem.setAttribute("class", "toast-remove-elem");
  removeElem.setAttribute("src", "./src/assets/icons/close-fill.svg");

  const success = (message) => {
    messageElem.textContent = message;
    btn.classList.remove("error")
    btn.classList.remove("worning")
    btn.classList.add("success")
  };

  const error = (message) => {
    messageElem.textContent = message;
    btn.classList.remove("success")
    btn.classList.remove("worning")
    btn.classList.add("error")
  };

  const worning = (message) => {
    messageElem.textContent = message;
    btn.classList.remove("success")
    btn.classList.remove("error")
    btn.classList.add("worning")
  };

  btn.append(removeElem, messageElem);
//   holder.appendChild(btn);
  document.body.appendChild(btn)

  setTimeout(() => {
    document.body.removeChild(btn)
    topPosition -= 60
  }, 3000)

  return { success, error, worning };
};
