import extractFormData from "../../../hooks/form-data/extractFormData.js";
import { setDataToLocalStorage } from "../../../hooks/local-storage/index.js";
import tokenGenerator from "../../../hooks/token/token-generator.js";
import httpInterceptore from "../../../services/interceptore.js";
import { Motion } from "../../modules/animation/motion.js";
import AuthCardClass from "../../modules/auth/auth-card-generator.js";
import { useUpdateRout } from "../../modules/partial/use-update-route.js";
import { buttonGenerator } from "../../package/button/button-generator.js";
import formGenerator from "../../package/form/form-generator.js";
import inputGenerator from "../../package/input/input-generator.js";
import { languageTranslation } from "../../package/language-translation-module/languageTranslation.js";
import { metaDataGenerator } from "../../package/metadata/metadata-generator.js";
import { toast } from "../../package/tooaster/toaster.js";
import AuthPageContaienr from "./AuthPageContaienr.js";

const SignUpPage = () => {
  const gotoSignInPage = () => {
    useUpdateRout("/auth/sign-in");
  };

  metaDataGenerator("auth-sign-up");

  const t = languageTranslation("auth.register");
  const http = new httpInterceptore();
  let userData = http.get("/users");
  const authCardClass = new AuthCardClass(
    t("title"),
    t("subTitle"),
    formGenerator({
      inputChildren: inputGenerator(t("signupInputData"), 100, (event) =>
        inputChangeHandler(event),
      ),
      buttonChildren: buttonGenerator(t("submitBtn"), "submit", "btn", true),
      submitHandler: (event) => {
        const formData = extractFormData(event, 2);
        const findUser = userData.data.find((el) => el.email == formData.email);
        if (findUser) {
          toast().worning(t("toastMessage.error"));
          gotoSignInPage();
        } else {
          const newData = { id: userData.data.length + 1, ...formData };
          http.create("/users", newData);
          const token = tokenGenerator();
          setDataToLocalStorage("onlineshopAccessToken", token, false);
          setDataToLocalStorage("onlineshopUserId", newData.id, true);
          toast().success(t("toastMessage.success"));
          useUpdateRout("/landing");
        }
        userData = http.get("/users");
      },
    }),
    "ورود به حساب کاربری",
    t("bottomText.right"),
    t("bottomText.left"),
    t("bottomText.gotoHomeBtn"),
    "",
    {
      gotoSignUp: () => gotoSignInPage(),
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

export default SignUpPage