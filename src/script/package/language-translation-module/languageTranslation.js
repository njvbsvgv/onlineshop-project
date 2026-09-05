import { allLanguage } from "./languages/allLanguage.js";

export const languageTranslation = (name) => {
  const language = localStorage.getItem("language");
  const rootTranslation = allLanguage[language];

  const nameParts = name ? name.split(".") : [];

  const handler = (total) => {
    let result = rootTranslation;

    const totalParts = total.split(".");
    const parts = [...nameParts, ...totalParts];

    parts.forEach((item) => {
      result = result?.[item];
    });

    return result;
  };

  return handler;
};

export const createLanguage = (language) => {
  localStorage.setItem("language", language);
};

export const updateLanguage = (language) => {
  if (language == "fa") {
    document.body.dir = "rtl"
  }else {
    document.body.dir = "ltr"
  }
  localStorage.setItem("language", language);
};