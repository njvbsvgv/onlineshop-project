import { buttonGenerator } from "../../../../package/button/button-generator.js";
import formGenerator from "../../../../package/form/form-generator.js";
import inputGenerator from "../../../../package/input/input-generator.js";
import { languageTranslation } from "../../../../package/language-translation-module/languageTranslation.js";

const commentForm = (cubmitClick) => {
  const t = languageTranslation("commentFormData");
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "comment-form-wrapper");

  const btnController = document.createElement("div");
  btnController.setAttribute("class", "create-form-btn-controller");
  btnController.append(
    buttonGenerator(t("btnData.submit"), "submit", "create-comment", true),
    buttonGenerator(t("btnData.reset"), "reset", "reset-form", false),
  );

  wrapper.appendChild(
    formGenerator({
      buttonChildren: btnController,
      inputChildren: inputGenerator(t("inputData"), 100),
      submitHandler: (target) => cubmitClick(target),
    }),
  );

  return wrapper;
};

export default commentForm