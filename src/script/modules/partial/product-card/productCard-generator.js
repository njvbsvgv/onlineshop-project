const ProductCard = ({
  image,
  title,
  description,
  price,
  cardClick,
  favoriteClick,
}) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const imageControl = document.createElement("div");
  imageControl.className = "image-control";

  const imageElem = document.createElement("img");
  imageElem.setAttribute("src", image);

  const addToFavoriteElem = document.createElement("button");
  addToFavoriteElem.className = "addto-favorite-btn";

  if (favoriteClick) {
    addToFavoriteElem.addEventListener("click", () => {
      favoriteClick();
    });
  }

  const addToFavoriteIcon = document.createElement("img");
  addToFavoriteIcon.src = "./src/assets/icons/favorite.svg";

  const infoControl = document.createElement("div");
  infoControl.className = "info-control";

  const titleElem = document.createElement("h1");
  titleElem.className = "title";
  titleElem.innerHTML = title;

  const descriptionElem = document.createElement("p");
  descriptionElem.className = "description";
  descriptionElem.innerHTML = description;

  const bottomItemControl = document.createElement("div");
  bottomItemControl.className = "bottom-item-control";

  const showDetailBtn = document.createElement("button");
  showDetailBtn.className = "show-detail-btn";
  showDetailBtn.innerHTML = "توضیحات بیشتر";

  if (cardClick) {
    showDetailBtn.addEventListener("click", () => {
      cardClick();
    });
  }

  const priceElem = document.createElement("p");
  priceElem.innerHTML = `${price} تومان`;
  priceElem.className = "price";
  bottomItemControl.append(priceElem, showDetailBtn);

  addToFavoriteElem.appendChild(addToFavoriteIcon);
  imageControl.append(imageElem, addToFavoriteElem);
  card.append(imageControl, titleElem, descriptionElem, bottomItemControl);
  return card;
};
