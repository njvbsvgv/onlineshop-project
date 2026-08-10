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

const CreateWebPages = (routData) => {
  // setDataToLocalStorage("routData", routData, true)
  // console.log("routData ==>", routData)
  const pathName = getDataFromLocalStorage("routName", false)
  // const elementHolder = document.createElement("div")
  // elementHolder.style.width = "100%"
  // elementHolder.style.height = "100%"
  const rootElement = document.getElementById("root")
  rootElement.innerHTML = ""
  routData.forEach((item, index) => {
    if (item.path.includes(pathName)) {
      rootElement.appendChild(item.element)
      // alert("")
    }
  })

  // webPages.authPages.signInPage.appendChild(SignInPage());

  // webPages.authPages.signUpPage.appendChild(SignUpPage());
};
