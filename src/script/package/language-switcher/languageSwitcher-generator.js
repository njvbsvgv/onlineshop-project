/**
 * languageSwitcherGenerator
 *
 * روی dropdownGenerator ساخته شده.
 * فقط ظاهر اختصاصی آیتم‌ها (badge + check) رو تعریف می‌کنه —
 * بقیه رفتارها (open/close، label، chevron، outside click) رو
 * dropdownGenerator مدیریت می‌کنه.
 *
 * @param {string}   locale       - زبان فعلی: 'fa' | 'en'
 * @param {Function} clickHandler - callback تغییر زبان: (locale) => {}
 *
 * @returns {HTMLElement} wrapper — با متدهای:
 *   .getLocale()
 *   .setLocale(locale)
 *   .open() / .close() / .toggle()
 */

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
