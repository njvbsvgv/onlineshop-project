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
  // createLanguage("fa")
  // setDataToLocalStorage(
  //   "dataBase",
  //   {
  //     users: [
  //       {
  //         id: 1,
  //         fullName: "masih",
  //         email: "mohammadmasih43@gmail.com",
  //         password: "masih1382",
  //       },
  //       {
  //         id: 2,
  //         fullName: "mahan",
  //         email: "mohammadmasih43@gmail.com",
  //         password: "mahan1387",
  //       }
  //     ],
  //     products: [],
  //     basket: [],
  //   },
  //   true,
  // );
  CreateWebPages([
    { path: "/auth/sign-in", element: () => SignInPage() },
    { path: "/auth/sign-up", element: () => SignUpPage() },
    { path: "/landing", element: () => LadingPage() },
    { path: "/products", element: () => ProductPage() },
  ]);
  // useDataBaseGeneratorToLocalStorage();
});

