// const signUpPageContainer = document.getElementById("signUpPage");

// const inputChangeHandler = (event) => {
//   console.log(event);
// };

metaDataGenerator("auth-sign-in");

// const gotoSignUpPage = () => {
//   useUpdateRout("/auth/sign-up");
// };

// const gotoSignInPage = () => {
//   useUpdateRout("/auth/sign-in");
// };
// alert("")

document.addEventListener("DOMContentLoaded", () => {
  // useUpdateRout("/auth/sign-in");
  CreateWebPages([
    { path: "/auth/sign-in", element: SignInPage() },
    { path: "/auth/sign-up", element: SignUpPage() },
    { path: "/landing", element: LadingPage() },
    { path: "/products", element: ProductPage() },
  ]);
  // useDataBaseGeneratorToLocalStorage();
});