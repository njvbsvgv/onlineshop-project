const PageFooter = () => {
  const itemsController = (children) => {
    const controller = document.createElement("div");
    controller.setAttribute("class", "footer-items-controller");
    if (Array.isArray(children)) {
      children.forEach((item) => controller.append(item));
    } else {
      controller.append(children);
    }
    return controller;
  };

  const t = languageTranslation("footer");
  const container = document.createElement("div");
  container.setAttribute("class", "footer-container");

  const topItemControl = document.createElement("div");
  topItemControl.setAttribute("class", "top-item-controller");
  const bottomItemControl = document.createElement("div");
  bottomItemControl.setAttribute("class", "bottom-item-controller");

  const leftItem = document.createElement("div");
  leftItem.className = "left-item";

  const siteLogo = document.createElement("img")
  siteLogo.setAttribute("class", "site-logo")
  siteLogo.setAttribute("src", "./src/assets/photos/footer-logo.svg")

  leftItem.appendChild(siteLogo)

  const centerItem = document.createElement("div");
  centerItem.className = "center-item";

  const rightItem = document.createElement("div");
  rightItem.className = "right-item";

  const rightTitle = document.createElement("p");
  rightTitle.textContent = t("rightItem.logo");
  rightTitle.setAttribute("class", "footer-p right-title");
  const rightDesc = document.createElement("p");
  rightDesc.setAttribute("class", "footer-p footer-text-gray right-desc");
  rightDesc.textContent = t("rightItem.desc");

  const oneList = document.createElement("div");
  oneList.setAttribute("class", "list");
  const oneListLabel = document.createElement("p");
  oneListLabel.setAttribute("class", "footer-p");
  oneListLabel.textContent = t("centerItem.aboutMe.label");

  rightItem.append(rightTitle, rightDesc);

  oneList.appendChild(oneListLabel);

  const towList = document.createElement("div");
  towList.setAttribute("class", "list");
  const towListLabel = document.createElement("p");
  towListLabel.setAttribute("class", "footer-p");
  towListLabel.textContent = t("centerItem.aboutMe.label");

  towList.appendChild(towListLabel);

  const threeList = document.createElement("div");
  threeList.setAttribute("class", "list");
  const threeListLabel = document.createElement("p");
  threeListLabel.setAttribute("class", "footer-p");
  threeListLabel.textContent = t("centerItem.aboutMe.label");

  threeList.appendChild(threeListLabel);

  t("centerItem.aboutMe.list").forEach((item) => {
    const desc = document.createElement("p");
    desc.setAttribute("class", "footer-p footer-text-gray");
    desc.textContent = item;
    oneList.appendChild(desc);
  });

  t("centerItem.aboutMe.list").forEach((item) => {
    const desc = document.createElement("p");
    desc.setAttribute("class", "footer-p footer-text-gray");
    desc.textContent = item;
    towList.appendChild(desc);
  });

  t("centerItem.aboutMe.list").forEach((item) => {
    const desc = document.createElement("p");
    desc.setAttribute("class", "footer-p footer-text-gray");
    desc.textContent = item;
    threeList.appendChild(desc);
  });

  centerItem.append(oneList, towList, threeList);

  topItemControl.append(itemsController([rightItem, centerItem, leftItem]));
  container.append(topItemControl, bottomItemControl);
  return container;
};
