const getCommentListHandler = () => {
  const http = new httpInterceptore();
  let commentData = http.get("/commentList");
  const prooductId = getDataFromLocalStorage("routState", true);
  const findProductCommentList = commentData.data.filter(
    (el) => el.productId == prooductId,
  );
  return findProductCommentList;
};

const createCommentHandler = (data) => {
  const http = new httpInterceptore();
  let success = false;
  requestMeddleware(() => {
    const commentList = http.get("/commentList");
    const userId = getDataFromLocalStorage("onlineshopUserId", true);
    const productId = getDataFromLocalStorage("routState", true);
    const userData = http.get(`/users/${userId}`);
    const userCommentLength = commentList.data.filter(
      (el) => el.userId == userId && el.productId == productId,
    );
    if (userCommentLength.length >= 3) {
      toast().worning("شما تعداد 3 کامنت از قبل ثبت کردید");
      success = false;
    } else {
      success = true;
      const newData = {
        id: commentList.data.length,
        userId,
        productId: productId,
        userName: userData.data.fullName,
        likeCount: 0,
        dislikeCount: 0,
        ...data,
      };
      const createResult = http.create("/commentList", newData);
      toast().success("نظرتان با موفقیت ثبت شد😍");
    }
  });
  return success;
};
