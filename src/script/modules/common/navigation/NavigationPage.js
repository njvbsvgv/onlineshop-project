const NavigationPage = (data) => {
  const navigationContainer = document.createElement("div");
  navigationContainer.className = "navigation-container";

  const routName = getDataFromLocalStorage("routName", false);

  data.forEach((item) => {
    const navigationText = document.createElement("span");
    navigationText.className = "navigation-text navigation-text-noactive";

    if (item.link.includes(routName)) {
      navigationText.className = "navigation-text navigation-text-active";
    }

    navigationText.textContent = item.text;
    navigationText.addEventListener("click", () => {useUpdateRout(item.link)})
    navigationContainer.appendChild(navigationText);
  });
  return navigationContainer;
};
