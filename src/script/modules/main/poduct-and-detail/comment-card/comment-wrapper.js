const commentWrapper = () => {
  const t = languageTranslation("commentFormData");
  const http = new httpInterceptore();
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "comment-wrapper");

  const listWrapper = document.createElement("div");
  listWrapper.setAttribute("class", "list-wrapper");

  const noResultElem = document.createElement("p");
  noResultElem.setAttribute("class", "no-result-elem");
  noResultElem.textContent = t("noResult");

  let commentData = getCommentListHandler();

  const cardGeneration = new commentCardGenerator(
    (id) => {
      const result = likeHandler(id);
      console.log("result ==>", result);
      if (result) {
        commentData = getCommentListHandler();
        listWrapper.innerHTML = "";
        commentData.forEach((item) => {
          listWrapper.appendChild(
            Motion(
              cardGeneration.generator({
                id: item.id,
                userName: item.userName,
                startTitle: t("cardData.title"),
                endTitle: item.title,
                startDesc: t("cardData.caption"),
                endDesc: item.comment,
                likeNum: item.likeCount,
                dislikeNum: item.dislikeCount,
              }),
              0,
              [
                { key: "width", style: "100%" },
                { key: "height", style: "auto" },
              ],
            ),
          );
        });
      }
    },
    (id) => {
      const result = dislikeHandler(id);
      if (result) {
        commentData = getCommentListHandler();
        listWrapper.innerHTML = "";
        commentData.forEach((item) => {
          listWrapper.appendChild(
            Motion(
              cardGeneration.generator({
                id: item.id,
                userName: item.userName,
                startTitle: t("cardData.title"),
                endTitle: item.title,
                startDesc: t("cardData.caption"),
                endDesc: item.comment,
                likeNum: item.likeCount,
                dislikeNum: item.dislikeCount,
              }),
              0,
              [
                { key: "width", style: "100%" },
                { key: "height", style: "auto" },
              ],
            ),
          );
        });
      }
    },
  );

  console.log("commentData ==>", commentData);
  const submitHandler = (target) => {
    const formData = extractFormData(target, 3);
    const createResult = createCommentHandler(formData);
    commentData = getCommentListHandler();
    if (createResult) {
      listWrapper.innerHTML = "";
      commentData.forEach((item) => {
        listWrapper.appendChild(
          Motion(
            cardGeneration.generator({
              id: item.id,
              userName: item.userName,
              startTitle: t("cardData.title"),
              endTitle: item.title,
              startDesc: t("cardData.caption"),
              endDesc: item.comment,
              likeNum: item.likeCount,
              dislikeNum: item.dislikeCount,
            }),
            0,
            [
              { key: "width", style: "100%" },
              { key: "height", style: "auto" },
            ],
          ),
        );
      });
    }
    clearFormData(target, 3);
  };

  if (commentData.length > 0) {
    commentData.forEach((item) => {
      listWrapper.appendChild(
        Motion(
          cardGeneration.generator({
            id: item.productId,
            userName: item.userName,
            startTitle: t("cardData.title"),
            endTitle: item.title,
            startDesc: t("cardData.caption"),
            endDesc: item.comment,
            likeNum: item.likeCount,
            dislikeNum: item.dislikeCount,
          }),
          3.4,
          [
            { key: "width", style: "100%" },
            { key: "height", style: "auto" },
          ],
        ),
      );
    });
  } else {
    listWrapper.appendChild(noResultElem);
  }

  wrapper.append(
    Motion(
      commentForm((target) => {
        submitHandler(target);
      }),
      3.2,
      [
        { key: "width", style: "100%" },
        { key: "height", style: "auto" },
      ],
    ),
    listWrapper,
  );
  return wrapper;
};
