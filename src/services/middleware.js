import { getDataFromLocalStorage } from "../hooks/local-storage/index.js"
import { languageTranslation } from "../script/package/language-translation-module/languageTranslation.js"
import { toast } from "../script/package/tooaster/toaster.js"

export const requestMeddleware = (next) => {
  const t = languageTranslation("toastMessage")
  const token = getDataFromLocalStorage("onlineshopAccessToken", false)
  if (token) {
    next()
  }else {
    console.log(t("error"))
    toast().error(t("error"))
  }
}