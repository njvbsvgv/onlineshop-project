const bastekIcon = (clickHandelr) => {
  const basketIcon = document.createElement("span");
  basketIcon.innerHTML = `
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="basket-icon"
    >
      <mask id="basket-mask" fill="white">
        <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"/>
      </mask>

      <path
        d="M20 40V38.5C9.78273 38.5 1.5 30.2173 1.5 20H0H-1.5C-1.5 31.8741 8.12588 41.5 20 41.5V40ZM40 20H38.5C38.5 30.2173 30.2173 38.5 20 38.5V40V41.5C31.8741 41.5 41.5 31.8741 41.5 20H40ZM20 0V1.5C30.2173 1.5 38.5 9.78273 38.5 20H40H41.5C41.5 8.12588 31.8741 -1.5 20 -1.5V0ZM20 0V-1.5C8.12588 -1.5 -1.5 8.12588 -1.5 20H0H1.5C1.5 9.78273 9.78273 1.5 20 1.5V0Z"
        fill="currentColor"
        mask="url(#basket-mask)"
      />

      <path
        d="M16 15H24C25.8856 15 26.8284 15 27.4142 15.5858C28 16.1716 28 17.1144 28 19V23C28 26.2998 28 27.9497 26.9749 28.9749C25.9497 30 24.2998 30 21 30H19C15.7002 30 14.0502 30 13.0251 28.9749C12 27.9497 12 26.2998 12 23V19C12 17.1144 12 16.1716 12.5858 15.5858C13.1716 15 14.1144 15 16 15Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        d="M24 17.5C24 13.634 22.2091 10 20 10C17.7909 10 16 13.634 16 17.5"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;

  const svg = basketIcon.firstElementChild;
  svg.setAttribute("class", "basket-icon")
  if (clickHandelr) {
    svg.addEventListener("click", () => clickHandelr());
  }
  return svg;
};

const PageHeader = () => {
  const t = languageTranslation("header");
  let token = getDataFromLocalStorage("onlineshopAccessToken", false);
  const headerContainer = document.createElement("div");
  headerContainer.className = "page-header-container";

  const itemsControl = document.createElement("div");
  itemsControl.className = "items-control";

  const topItem = document.createElement("div");
  topItem.className = "header-top-item";

  const logoAndToggleThemeControl = document.createElement("div");
  logoAndToggleThemeControl.setAttribute(
    "class",
    "logo-and-toggleTheme-control",
  );

  const bottomItem = document.createElement("div");
  bottomItem.className = "header-bottom-item";

  const bottomItemRight = document.createElement("div");
  bottomItemRight.className = "right-item";
  bottomItemRight.appendChild(NavigationPage(t("navigationData")));

  // const basketIcon = document.createElement("img");
  // basketIcon.src = "./src/assets/icons/menu-icon.svg";
  // basketIcon.className = "basket-icon";
  // basketIcon.addEventListener("click", () =>
  //   useUpdateRout("/cart", { check: true }),
  // );

  const bottomItemLeft = document.createElement("div");
  bottomItemLeft.className = "left-item";
  bottomItemLeft.appendChild(bastekIcon(() => useUpdateRout("/cart", { check: true })));

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
      useUpdateRout("/landing");
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

  logoAndToggleThemeControl.append(
    Logo({
      onClick: () => {
        useUpdateRout("/landing");
      },
    }),
    toggleTheme(),
  );
  topItem.append(
    logoAndToggleThemeControl,
    inputControl,
    btnControl,
    // toggleTheme(),
  );

  //  bottom item
  bottomItem.append(bottomItemRight, bottomItemLeft);

  itemsControl.append(topItem, bottomItem);
  headerContainer.append(itemsControl);
  return headerContainer;
};
