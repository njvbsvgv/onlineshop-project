const useUpdateRout = (routName) => {
  localStorage.setItem("routName", routName);
  // const routData = getDataFromLocalStorage("routData", true)
  // console.log("routData ==>", routData)
  // RoutController()
  // CreateWebPages(routData)
  CreateWebPages([
    { path: "/auth/sign-in", element: SignInPage() },
    { path: "/auth/sign-up", element: SignUpPage() },
    { path: "/landing", element: LadingPage() },
    { path: "/products", element: ProductPage() },
  ]);
  // window.location.reload()
};
