const PageHeader = () => {
  const t = languageTranslation("header");
  let token = getDataFromLocalStorage("onlineshopAccessToken", false);
  const headerContainer = document.createElement("div");
  headerContainer.className = "page-header-container";

  const itemsControl = document.createElement("div");
  itemsControl.className = "items-control";

  const topItem = document.createElement("div");
  topItem.className = "header-top-item";

  const bottomItem = document.createElement("div");
  bottomItem.className = "header-bottom-item";

  const bottomItemRight = document.createElement("div");
  bottomItemRight.className = "right-item";
  bottomItemRight.appendChild(NavigationPage(t("navigationData")));

  const basketIcon = document.createElement("img");
  basketIcon.src = "./src/assets/icons/menu-icon.svg";
  basketIcon.className = "basket-icon";

  const bottomItemLeft = document.createElement("div");
  bottomItemLeft.className = "left-item";
  bottomItemLeft.appendChild(basketIcon);

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

  const http = new httpInterceptore();
  const userId = getDataFromLocalStorage("onlineshopUserId", true);
  const user = http.get(`/users/${userId}`);
  const btnGeneration = new BtnGeneratorClass(() => {
    useUpdateRout("/auth/sign-in");
  });

  const dropdown = dropdownGenerator({
    items: [
      {
        value: user.data?.fullName,
        label: t("logoutBtn"),
        badge: t("logoutBtn")[0],
      },
    ],
    value: "",
    initialValue: user.data?.fullName,
    onChange: () => {
      deleteDataFromLocalStorage("onlineshopAccessToken");
      deleteDataFromLocalStorage("onlineshopUserId");
      token = getDataFromLocalStorage("onlineshopAccessToken", false);
      btnControl.innerHTML = "";
      btnControl.append(
        languageSwitcherGenerator(language, changeLanguageHandler),
        btnGeneration.generator(
          token ? t("logoutBtn") : t("loginBtn"),
          "button",
          "btn",
          false,
        ),
      );
    },
    className: "language-switcher",
    triggerClassName: "language-switcher__trigger",
    menuClassName: "language-switcher__dropdown",
    itemClassName: "language-switcher__item",
  });

  btnControl.append(
    languageSwitcherGenerator(language, changeLanguageHandler),
    !token
      ? btnGeneration.generator(
          token ? t("logoutBtn") : t("loginBtn"),
          "button",
          "btn",
          false,
        )
      : dropdown,
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
      (event) => {},
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
