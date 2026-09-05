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

import { getPathName } from "./use-update-route.js";

//   webPages.authPages.signInPage.appendChild(SignInPage());

//   webPages.authPages.signUpPage.appendChild(SignUpPage());
// };

let currentRoutData = [];

export const CreateWebPages = (routData) => {
  currentRoutData = routData;
  RebuildWebPages();
};

export const RebuildWebPages = () => {
  // let pathName = localStorage.getItem("routName");
  let pathName = getPathName()
  console.log("pathName ==>", pathName)
  const language = localStorage.getItem("language");
  const rootElement = document.getElementById("root");

  if (language) {
    if (language == "fa") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }

  rootElement.innerHTML = "";

  currentRoutData.forEach((item) => {
    // console.log("item ==>", item)
    // if (item.check) {
    //   console.log(item.check)
    //   const token = localStorage.getItem("onlineshopAccessToken");
    //   if (!token) {
    //     localStorage.setItem("routName", "/landing");
    //   }
    // }
    // pathName = localStorage.getItem("routName");
    // console.log("pathName ==>", pathName)
    if (item.path == pathName) {
      const element = item.element();
      rootElement.append(element);
    }
  });

  // console.log("flag ==>", flag)
  // if (flag) {
  //   useUpdateRout("/")
  // }
};
