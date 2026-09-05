import { getDataFromLocalStorage } from "../hooks/local-storage/index.js";
import { languageTranslation } from "../script/package/language-translation-module/languageTranslation.js";
import { toast } from "../script/package/tooaster/toaster.js";
import httpInterceptore from "./interceptore.js";
import { requestMeddleware } from "./middleware.js";

export const getCommentListHandler = () => {
  const http = new httpInterceptore();
  let commentData = http.get("/commentList");
  const productId = getDataFromLocalStorage("routState", true).data.productId;
  const findProductCommentList = commentData.data.filter(
    (el) => el.productId == productId,
  );
  return findProductCommentList;
};

export const createCommentHandler = (data) => {
  const http = new httpInterceptore();
  const t = languageTranslation("toastMessage.comment")
  let success = false;
  requestMeddleware(() => {
    const commentList = http.get("/commentList");
    const userId = getDataFromLocalStorage("onlineshopUserId", true);
    const productId = getDataFromLocalStorage("routState", true).data.productId;
    console.log("productId ==>", productId)
    const userData = http.get(`/users/${userId}`);
    const userCommentLength = commentList.data.filter(
      (el) => el.userId == userId && el.productId == productId,
    );
    if (userCommentLength.length >= 3) {
      toast().worning(t("worning"));
      success = false;
    } else {
      success = true;
      const newData = {
        id: commentList.data.length + 1,
        userId,
        productId: productId,
        userName: userData.data?.fullName,
        likeCount: 0,
        dislikeCount: 0,
        ...data,
      };
      const createResult = http.create("/commentList", newData);
      toast().success(t("success"));
    }
  });
  return success;
};

export const findCommentHandler = (db, commentId, productId) => {
  const http = new httpInterceptore();
  const likeData = http.get(`/${db}`);
  const findComment = likeData.data.find(
    (el) => el.commentId == commentId && el.productId == productId,
  );
  return findComment;
};

export const updateLikeOrDislikeCount = (varient, commentId, count) => {
  const http = new httpInterceptore();
  let db = http.get(`/commentList/${commentId}`).data;
  let newData = { ...db };
  switch (varient) {
    case "like":
      newData = {
        ...newData,
        likeCount: count,
      };
      break;
    case "dislike":
      newData = {
        ...newData,
        dislikeCount: count,
      };
      break;
  }
  http.update(`/commentList/${commentId}`, newData);
};

export const likeHandler = (commentId) => {
  const http = new httpInterceptore();
  let success = false;
  const t = languageTranslation("toastMessage.comment.likeMessage")
  requestMeddleware(() => {
    const userId = getDataFromLocalStorage("onlineshopUserId", true);
    const productId = getDataFromLocalStorage("routState", true).data.productId;
    let findComment = findCommentHandler("likeDB", commentId, productId);
    if (findComment) {
      const findUserId = findComment.userIdList.find((el) => el == userId);
      if (findUserId) {
        success = false;
        toast().worning(t("worning"));
      } else {
        const newLikeList = [...findComment.userIdList, userId];
        const newData = {
          ...findComment,
          userIdList: newLikeList,
        };
        http.update(`/likeDB/${findComment.id}`, newData);
        toast().success(t("success"));
        success = true;
      }
    } else {
      const newData = {
        commentId,
        productId: productId,
        userIdList: [userId],
      };
      http.create("/likeDB", newData);
      success = true;
      toast().success(t("success"));
    }
    findComment = findCommentHandler("likeDB", commentId, productId);
    updateLikeOrDislikeCount("like", commentId, findComment.userIdList.length);
  });
  return success;
};

export const dislikeHandler = (commentId) => {
  const http = new httpInterceptore();
  let success = false;
  const t = languageTranslation("toastMessage.comment.dislikeMessage")
  requestMeddleware(() => {
    const userId = getDataFromLocalStorage("onlineshopUserId", true);
    const productId = getDataFromLocalStorage("routState", true).data.productId;
    let findComment = findCommentHandler("dislikeDB", commentId, productId);
    if (findComment) {
      const findUserId = findComment.userIdList.find((el) => el == userId);
      if (findUserId) {
        success = false;
        console.log(t("worning"))
        toast().worning(t("worning"));
      } else {
        const newLikeList = [...findComment.userIdList, userId];
        const newData = {
          ...findComment,
          userIdList: newLikeList,
        };
        http.update(`/dislikeDB/${findComment.id}`, newData);
        console.log(t("success"))
        toast().success(t("success"));
        success = true;
      }
    } else {
      const newData = {
        commentId,
        productId: productId,
        userIdList: [userId],
      };
      http.create("/dislikeDB", newData);
      success = true;
      toast().success(t("success"));
    }
    findComment = findCommentHandler("dislikeDB", commentId, productId);
    updateLikeOrDislikeCount(
      "dislike",
      commentId,
      findComment.userIdList.length,
    );
  });
  return success;
};
