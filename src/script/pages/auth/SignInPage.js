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

  return AuthPageContaienr(
    Motion(
      AuthCardGenerator({
        miniTitle: "ورود به حساب کاربری",
        subTitle: "برای ورود به حساب کاربری مشخصات خود را وارد کنید",
        inputsChildren: formGenerator({
          inputChildren: inputGenerator(signUpInputData, 100, (event) =>
            inputChangeHandler(event),
          ),
          buttonChildren: buttonGenerator(
            "ورود به حساب کاربری",
            "submit",
            "btn",
            true,
          ),
        }),
        btnText: "ورود به حساب کاربری",
        leftText: "ایجاد حساب کاربری",
        rightText: "تازه وارد هستید ؟",
        holderId: "",
        actions: {
          gotoSignUp: () => {
            gotoSignUpPage();
          },
          gotoHomeBtn: () => {
            useUpdateRout("/landing");
          },
        },
      }),
      0.25,
      [
        {key: "display", style: "flex"},
        {key: "justifyContent", style: "center"},
        {key: "alignItems", style: "center"},
      ]
    ),
  );
};
