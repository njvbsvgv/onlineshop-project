import { useDataBaseGeneratorToLocalStorage } from "../hooks/dataBase-generator.js";
import { CreateWebPages } from "./modules/partial/create-web-page.js";
import { getPathName } from "./modules/partial/use-update-route.js";
import { metaDataGenerator } from "./package/metadata/metadata-generator.js";
import { toggleTheme } from "./package/toggleTheme-generator/toggleTheme-generator.js";
import SignInPage from "./pages/auth/SignInPage.js";
import SignUpPage from "./pages/auth/SignUpPage.js";
import CartPage from "./pages/main/cart/cart-page.js";
import LandingPage from "./pages/main/landing/landing-page.js";
import ProductDetailPage from "./pages/main/product/detail/ProductDetailPage.js";
import ProductPage from "./pages/main/product/ProductPage.js";

metaDataGenerator("auth-sign-in");

document.addEventListener("DOMContentLoaded", () => {
  useDataBaseGeneratorToLocalStorage();
  CreateWebPages([
    { path: "/auth/sign-in", element: () => SignInPage(), check: false },
    { path: "/auth/sign-up", element: () => SignUpPage(), check: false },
    { path: "/landing", element: () => LandingPage(), check: false },
    { path: "/", element: () => LandingPage(), check: false },
    { path: "/products", element: () => ProductPage(), check: false },
    { path: "/product-detail", element: () => ProductDetailPage(), check: false },
    { path: "/cart", element: () => CartPage(), check: true },
  ]);
  toggleTheme()
});
