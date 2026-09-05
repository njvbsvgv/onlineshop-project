class descriptionAndCommentBoxTitleGenerator {
  click = () => {};

  constructor(clickHandler) {
    this.click = clickHandler;
  }

  generator(data) {
    const container = document.createElement("div");
    container.setAttribute(
      "class",
      "description-and-comment-box-title-controller",
    );

    data.forEach((item) => {
      const textElme = document.createElement("span");
      textElme.textContent = item.text
      textElme.setAttribute("class", `text-elem ${item.className}`);
      textElme.addEventListener("click", () => this.click(data.findIndex(el => el.text == item.text)))
      container.appendChild(textElme);
    });
    return container;
  }
}

export default descriptionAndCommentBoxTitleGenerator