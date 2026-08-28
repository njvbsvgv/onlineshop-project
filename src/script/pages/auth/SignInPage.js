const SignInPage = () => {
  const gotoSignUpPage = () => {
    useUpdateRout("/auth/sign-up");
  };

  // textAnimation("ورود به حساب کاربری", 100, 0, (title) => {
  //   const element = (document.getElementById("miniTitle").innerHTML = title);
  // });

  // textAnimation(
  //   "برای ورود به حساب کاربری مشخصات خود را وارد کنید",
  //   100,
  //   2,
  //   (title) => {
  //     const element = (document.getElementById("subTitle").innerHTML = title);
  //   },
  // );

  const http = new httpInterceptore();
  const usersData = http.get("/users/1");

  console.log("usersData id ==>", usersData)
  const t = languageTranslation("auth.login");
  const authCardClass = new AuthCardClass(
    t("title"),
    t("subTitle"),
    formGenerator({
      inputChildren: inputGenerator(t("signinInputData"), 100, (event) => {}
        // inputChangeHandler(event),
      ),
      buttonChildren: buttonGenerator(t("submitBtn"), "submit", "btn", true),
      submitHandler: (event) => {
        const formData = extractFormData(event, 2)
        const usersData = http.get(`/users/${formData.email}`);
        if (usersData.data) {
          if (formData.password == usersData.data.password) {
            toast().success(t("toastMessage.success"))
            const token = tokenGenerator()
            setDataToLocalStorage("onlineshopAccessToken", token, false)
            setDataToLocalStorage("onlineshopUserId", usersData.data.id, true)
            useUpdateRout("/landing")
          }else {
            toast().error(t("toastMessage.passwordErrorMessage"))
          }
        }else {
          toast().worning(t("toastMessage.error"))
          useUpdateRout("/auth/sign-up")
        }
      }
    }),
    "ورود به حساب کاربری",
    t("bottomText.right"),
    t("bottomText.left"),
    t("bottomText.gotoHomeBtn"),
    "",
    {
      gotoSignUp: () => gotoSignUpPage(),
      gotoHomeBtn: () => useUpdateRout("/landing"),
    },
  );

  return AuthPageContaienr(
    Motion(authCardClass.generator(), 0.25, [
      { key: "display", style: "flex" },
      { key: "justifyContent", style: "center" },
      { key: "alignItems", style: "center" },
    ]),
  );
};
