import dropdownGenerator from "../dropDown-generator/dropDown-generator.js";

const languages = [
  { value: "fa", label: "فارسی", badge: "فا", select: "fa" },
  { value: "en", label: "English", badge: "EN", select: "en" },
];

const languageSwitcherGenerator = (locale, clickHandler) => {
  // ============================================
  // ساخت Dropdown
  // ============================================

  const dropdown = dropdownGenerator({
    items: languages,
    value: locale || "fa",
    initialValue: "",
    onChange: typeof clickHandler === "function" ? clickHandler : null,
    // renderItem,
    className: "language-switcher",
    triggerClassName: "language-switcher__trigger",
    menuClassName: "language-switcher__dropdown",
    itemClassName: "language-switcher__item",
  });

  // ============================================
  // Public API (سازگار با کد قدیمی)
  // ============================================

  dropdown.getLocale = () => dropdown.getValue();
  dropdown.setLocale = (newLocale) => dropdown.setValue(newLocale);

  return dropdown;
};


export default languageSwitcherGenerator