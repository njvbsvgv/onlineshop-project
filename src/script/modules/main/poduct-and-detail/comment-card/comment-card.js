class commentCardGenerator {
  likeClick = () => {};
  dislikeClick = () => {};

  constructor(likeClickHandler, dislikeClickHandler) {
    this.likeClick = (id) => {likeClickHandler(id)}
    this.dislikeClick = (id) => {dislikeClickHandler(id)}
  }

  likeAndDislikeBtn(iconSrc, num, clickHandler) {
    const btn = document.createElement("button");
    btn.setAttribute("class", "like-or-dislike-btn");
    btn.addEventListener("click", () => {clickHandler()})

    const icon = document.createElement("img");
    icon.setAttribute("src", iconSrc);

    const likeOrmDislikeNum = document.createElement("span");
    likeOrmDislikeNum.textContent = num;

    btn.append(icon, likeOrmDislikeNum);
    return btn;
  }

  generator({id, userName, startTitle, endTitle, startDesc, endDesc, likeNum, dislikeNum }) {
    const cardWrapper = document.createElement("div");
    cardWrapper.setAttribute("class", "card-wrapper");
    const itemController = document.createElement("div");
    itemController.setAttribute("class", "item-controller");

    const topItem = document.createElement("div");
    topItem.setAttribute("class", "comment-card-top-item");

    const userImageBtn = document.createElement("button");
    userImageBtn.setAttribute("class", "user-image-btn");

    const userImage = document.createElement("img");
    userImage.setAttribute("class", "user-image");
    userImage.setAttribute("src", "./src/assets/icons/user.svg");

    userImageBtn.appendChild(userImage);

    const userNameElem = document.createElement("span");
    userNameElem.setAttribute("class", "user-name");
    userNameElem.textContent = userName;

    const centerItem = document.createElement("div");
    centerItem.setAttribute("class", "comment-card-center-item");

    const titleController = document.createElement("p");
    titleController.setAttribute("class", "title-controller");
    const titleElem = document.createElement("span");
    titleElem.textContent = `${startTitle}: `;
    const titleMessage = document.createElement("span");
    titleMessage.textContent = endTitle;
    titleController.append(titleElem, titleMessage)


    const descController = document.createElement("p");
    descController.setAttribute("class", "title-controller");
    const descElem = document.createElement("span");
    descElem.textContent = `${startDesc}: `;
    const descMessage = document.createElement("span");
    descMessage.textContent = endDesc;
    descController.append(descElem, descMessage)


    // const descMessage = document.createElement("p");
    // descMessage.textContent = desc;

    topItem.append(userImageBtn, userNameElem);
    centerItem.append(titleController, descController);

    const bottomItem = document.createElement("div");
    bottomItem.setAttribute("class", "comment-card-bottom-item");

    bottomItem.append(
      this.likeAndDislikeBtn("./src/assets/icons/like-icon.svg", likeNum, () => {this.likeClick(id)}),
      this.likeAndDislikeBtn("./src/assets/icons/dislike-icon.svg", dislikeNum, () => {this.dislikeClick(id)}),
    );
    itemController.append(topItem, centerItem, bottomItem);
    cardWrapper.append(itemController);
    return cardWrapper;
  }
}

export default commentCardGenerator