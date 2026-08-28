const descriptionAndCommentBoxGenerator = (description, comment) => {
  const container = document.createElement("div");
  container.setAttribute("class", "description-and-comment-box");

  const topItem = document.createElement("div");
  topItem.setAttribute("class", "top-item");

  const bottomItem = document.createElement("div");
  bottomItem.setAttribute("class", "bottom-item");

  const textGeneration = new descriptionAndCommentBoxTitleGenerator(
    (selectedIndex) => {
      selectedIndexv === 0
        ? bottomItem.appendChild(description)
        : bottomItem.appendChild(comment);
    },
  );

  const text = textGeneration.generator([
    { text: "نظرات کاربران", className: "active" },
    // { text: "نظرات کاربران", className: "not-active" },
  ]);

  topItem.appendChild(text);

  bottomItem.appendChild(commentWrapper())
  container.append(Motion(topItem, 2.8, [{key: "width", style: "100%"}, {key: "height", style: "auto"}]), Motion(bottomItem, 3, [{key: "width", style: "100%"}, {key: "height", style: "auto"}]));
  return container;
};
