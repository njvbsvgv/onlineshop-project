const descriptionAndCommentBoxGenerator = (description, comment) => {
  const container = document.createElement("div");
  container.setAttribute("class", "description-and-comment-box");

  const topItem = document.createElement("div");
  topItem.setAttribute("class", "top-item");

  const bottomItem = document.createElement("div");
  bottomItem.setAttribute("class", "bottom-item");

  //   const textGeneration = new descriptionAndCommentBoxTitleGenerator(
  //     (selectedIndex) => {
  //       container.innerHTML = "";

  //       container.appendChild(
  //         textGeneration.generator([
  //           {
  //             text: "توضیحات محصول",
  //             className: selectedIndex === 0 ? "active" : "not-active",
  //           },
  //           {
  //             text: "نظرات کاربران",
  //             className: selectedIndex === 1 ? "active" : "not-active",
  //           },
  //         ]),
  //       );
  //     },
  //   );

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

  container.append(topItem);
  return container;
};
