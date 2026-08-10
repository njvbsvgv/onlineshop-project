const SignUpPage = () => {
  const gotoSignInPage = () => {
    useUpdateRout("/auth/sign-in");
  };

  return AuthPageContaienr(
    Motion(
      AuthCardGenerator({
        miniTitle: "ایجاد حساب کاربری",
        subTitle:
          "برای شروع، شماره تماس خود را وارد کنید تا حساب شما ساخته شود.",
        inputsChildren: formGenerator({
          inputChildren: inputGenerator(signInInputData, 100, (event) =>
            inputChangeHandler(event),
          ),
          buttonChildren: buttonGenerator("ثبت نام", "submit", "btn", true),
        }),
        btnText: "ورود به حساب کاربری",
        leftText: "وارد شوید",
        rightText: "تازه وارد هستید ؟",
        holderId: "",
        actions: {
          gotoSignUp: () => {
            gotoSignInPage();
          },
          gotoHomeBtn: () => {
            useUpdateRout("/landing");
          },
        },
      }),
      0.25,
      [
        { key: "display", style: "flex" },
        { key: "justifyContent", style: "center" },
        { key: "alignItems", style: "center" },
      ],
    ),
  );
};
