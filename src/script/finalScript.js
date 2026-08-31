metaDataGenerator("auth-sign-in");

document.addEventListener("DOMContentLoaded", () => {
  CreateWebPages([
    { path: "/auth/sign-in", element: () => SignInPage(), check: false },
    { path: "/auth/sign-up", element: () => SignUpPage(), check: false },
    { path: "/landing", element: () => LadingPage(), check: false },
    { path: "/", element: () => LadingPage(), check: false },
    { path: "/products", element: () => ProductPage(), check: false },
    { path: "/product-detail", element: () => ProductDetailPage(), check: false },
    { path: "/cart", element: () => CartPage(), check: true },
  ]);
  toggleTheme()
  useDataBaseGeneratorToLocalStorage();
});
