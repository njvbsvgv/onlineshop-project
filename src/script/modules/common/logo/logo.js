const Logo = ({ onClick }) => {
  const logo = document.createElement("button");
  logo.className = "logo-control";

  if (onClick) {
    logo.addEventListener("click", () => {
      onClick();
    });
  }

  const logoText = document.createElement("span");
  logoText.className = "logo-text";
  logoText.textContent = "لوگو";

  const logoImage = document.createElement("img");
  logoImage.src = "./src/assets/icons/logo.svg";

  logo.append(logoImage, logoText);
  return logo;
};
