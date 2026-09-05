const LandingImageCardSection = (imageAddress, text, customStyle) => {
  const card = document.createElement("div");
//   card.style.width = "200px";
  card.style.borderRadius = "30px";
  card.style.overflow = "hidden"
  card.style.border = "1px solid #00000045"
  card.style.position = "relative"

  customStyle.forEach((item, index) => {
    card.style[item.key] = item.value;
  });

  const image = document.createElement("img");
  image.setAttribute("src", imageAddress);
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.objectFit = "cover"
  const span = document.createElement("span");
  span.textContent = text;
  span.style.fontSize = "13px"
  span.style.position = "absolute"
  span.style.bottom = "20px"
  span.style.insetInlineStart = "20px"
  span.style.background = "black"
  span.style.color = "white"
  span.style.padding = "5px"
  span.style.paddingInline = "15px"
  span.style.borderRadius = "50px"

  card.append(image, span);
  return card;
};

export default LandingImageCardSection