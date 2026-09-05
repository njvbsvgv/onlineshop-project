import { languageTranslation } from "../../../../package/language-translation-module/languageTranslation.js";
import { Motion } from "../../../animation/motion.js";
import descriptionAndCommentBoxTitleGenerator from "./title-generator.js";

const descriptionAndCommentBoxGenerator = (description, comment) => {
  const t = languageTranslation("productPage.detail");
  const container = document.createElement("div");
  container.setAttribute("class", "description-and-comment-box");

  const topItem = document.createElement("div");
  topItem.setAttribute("class", "top-item");

  const bottomItem = document.createElement("div");
  bottomItem.setAttribute("class", "bottom-item");

  const textGeneration = new descriptionAndCommentBoxTitleGenerator(
    (selectedIndex) => {
      topItem.innerHTML = "";
      bottomItem.innerHTML = "";
      if (selectedIndex === 0) {
        topItem.appendChild(
          textGeneration.generator([
            { text: t("tabInputData.description"), className: "active" },
            { text: t("tabInputData.userComment"), className: "not-active" },
          ]),
        );
        bottomItem.appendChild(description);
      } else {
        topItem.appendChild(
          textGeneration.generator([
            { text: t("tabInputData.description"), className: "not-active" },
            { text: t("tabInputData.userComment"), className: "active" },
          ]),
        );
        bottomItem.appendChild(comment);
      }
    },
  );

  const text = textGeneration.generator([
    { text: t("tabInputData.description"), className: "active" },
    { text: t("tabInputData.userComment"), className: "not-active" },
  ]);

  topItem.appendChild(text);

  bottomItem.appendChild(description);
  container.append(
    Motion(topItem, 2.8, [
      { key: "width", style: "100%" },
      { key: "height", style: "auto" },
    ]),
    Motion(bottomItem, 3, [
      { key: "width", style: "100%" },
      { key: "height", style: "auto" },
    ]),
  );
  return container;
};

export default descriptionAndCommentBoxGenerator