const PageHeader = () => {
  const t = languageTranslation("header");
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
    NavigationPage(t("navigationData")),
  );

  const basketIcon = document.createElement("img")
  basketIcon.src = "./src/assets/icons/menu-icon.svg"
  basketIcon.className = "basket-icon"

  const bottomItemLeft = document.createElement("div");
  bottomItemLeft.className = "left-item"
  bottomItemLeft.appendChild(basketIcon)

  const language = getDataFromLocalStorage("language");
    const changeLanguageHandler = (locale) => {
      if (locale == "fa") {
        updateLanguage("fa");
      } else {
        updateLanguage("en");
      }
      RebuildWebPages();
    };

  const btnControl = document.createElement("div");
  btnControl.className = "btn-control";
  btnControl.append(
    languageSwitcherGenerator(language, changeLanguageHandler),
    buttonGenerator(t("loginBtn"), "button", "btn", false, () => {
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
          placeholder: t("inputPlaceholder"),
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
