const RoutController = () => {
  //   const { routeName } = appStore;
  const routName = localStorage.getItem("routName");

    console.log("routName  RoutController ==>",routName)

  const webPages = {
    authPages: {
      holder: document.getElementById("authPagesController"),
      signInPage: document.getElementById("signInPage"),
      signUpPage: document.getElementById("signUpPage"),
    },
    mainPages: {},
  };

  switch (routName) {
    case "/auth/sign-in":
      webPages.authPages.signUpPage.classList.replace("show-flex", "hide");
      webPages.authPages.signInPage.classList.replace("hide", "show-flex");
      break;
    case "/auth/sign-up":
      webPages.authPages.signInPage.classList.replace("show-flex", "hide");
      webPages.authPages.signUpPage.classList.replace("hide", "show-flex");
      break;
  }
};
