const toggleTheme = (clickHandler) => {
  const t = languageTranslation("header");
  const themeMode = localStorage.getItem("onlineshopThemeMode");
  const toggleElement = dropdownGenerator({
    items: t("themeModeData"),

    value: themeMode == "dark" ? "dark" : "light",

    onChange: (theme) => {
      localStorage.setItem("onlineshopThemeMode", theme);
      document.body.className = theme;
      if (clickHandler) {
        clickHandler(theme);
      }
    },
  });
  document.body.className = themeMode;
  return toggleElement;
};
