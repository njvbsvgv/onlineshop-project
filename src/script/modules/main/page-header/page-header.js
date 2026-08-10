const PageHeader = () => {
  const headerContainer = document.createElement("div");
  headerContainer.className = "page-header-container";

  const itemsControl = document.createElement("div");
  itemsControl.className = "items-control";

  const topItem = document.createElement("div");
  topItem.className = "header-top-item";

  const bottomItem = document.createElement("div");
  bottomItem.className = "header-bottom-item";

  const bottomItemRight = document.createElement("div");
  bottomItemRight.className = "right-item"
  bottomItemRight.appendChild(
    NavigationPage([
      { text: "صفحه اصلی", link: "/landing" },
      { text: "همه محصولات", link: "/products" },
      { text: "اخبار", link: "/news" },
    ]),
  );

  const basketIcon = document.createElement("img")
  basketIcon.src = "./src/assets/icons/menu-icon.svg"
  basketIcon.className = "basket-icon"

  const bottomItemLeft = document.createElement("div");
  bottomItemLeft.className = "left-item"
  bottomItemLeft.appendChild(basketIcon)

  const btnControl = document.createElement("div");
  btnControl.className = "btn-control";
  btnControl.appendChild(
    buttonGenerator("ورود / ثبت نام", "button", "btn", false, () => {
      useUpdateRout("/auth/sign-in");
    }),
  );

  const inputControl = document.createElement("div");
  inputControl.className = "input-control";
  inputControl.appendChild(
    inputGenerator(
      [
        {
          label: "",
          type: "text",
          placeholder: "نام لباس ، برند یا ...",
          icon: "./src/assets/icons/search.svg",
          isIconClick: false,
        },
      ],
      100,
      (event) => inputChangeHandler(event),
    ),
  );

  topItem.append(
    Logo({
      onClick: () => {
        useUpdateRout("/auth/sign-in");
      },
    }),
    inputControl,
    btnControl,
  );

  //  bottom item
  bottomItem.append(bottomItemRight, bottomItemLeft);

  itemsControl.append(topItem, bottomItem);
  headerContainer.append(itemsControl);
  return headerContainer;
};
