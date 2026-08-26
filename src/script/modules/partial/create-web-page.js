// const CreateWebPages = () => {
//   const webPages = {
//     authPages: {
//       holder: document.getElementById("authPagesController"),
//       signInPage: document.getElementById("signInPage"),
//       signUpPage: document.getElementById("signUpPage"),
//     },
//     mainPages: {
//       landingPage: document.getElementById("landingPage"),
//     },
//   };

//   webPages.authPages.signInPage.appendChild(SignInPage());

//   webPages.authPages.signUpPage.appendChild(SignUpPage());
// };




let currentRoutData = [];

const CreateWebPages = (routData) => {
  currentRoutData = routData;
  RebuildWebPages();
};

const RebuildWebPages = () => {
  const pathName = localStorage.getItem("routName");
  const language = localStorage.getItem("language")
  const rootElement = document.getElementById("root");

  if (language) {
    if (language == "fa") {
      document.body.dir = "rtl"
    }else {
      document.body.dir = "ltr"
    }
  }

  rootElement.innerHTML = "";

  currentRoutData.forEach((item) => {
    if (item.path.includes(pathName)) {
      const element = item.element();
      rootElement.append(element);
    }
  });
};