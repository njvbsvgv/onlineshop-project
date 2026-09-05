const dropdownGenerator = ({
  items = [],
  value,
  initialValue="",
  btnValue,
  onChange,
  renderTrigger,
  renderItem,
  placement = "bottom-end",
  className = "",
  triggerClassName = "",
  menuClassName = "",
  itemClassName = "",
} = {}) => {
  let currentValue =
    value !== undefined ? value : items[0] ? items[0].value : undefined;

  // ============================================
  // Wrapper
  // ============================================

  const wrapper = document.createElement("div");
  wrapper.className = ["dropdown", className].filter(Boolean).join(" ");

  // ============================================
  // Trigger
  // ============================================

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = ["dropdown__trigger", triggerClassName]
    .filter(Boolean)
    .join(" ");
  trigger.setAttribute("aria-haspopup", "true");
  trigger.setAttribute("aria-expanded", "false");

  // ============================================
  // Menu
  // ============================================

  const resolvedMenuClass = menuClassName
    ? menuClassName
    : placement === "bottom-start"
      ? "dropdown__menu dropdown__menu--start"
      : "dropdown__menu";

  const menu = document.createElement("div");
  menu.className = resolvedMenuClass;
  menu.setAttribute("aria-hidden", "true");

  wrapper.append(trigger, menu);

  // ============================================
  // Helpers
  // ============================================

  function getSelectedItem() {
    return (
      items.find((item) => item.value === currentValue) || items[0] || null
    );
  }

  function setContent(el, content) {
    el.innerHTML = "";
    if (content instanceof Node) {
      el.appendChild(content);
    } else if (content != null) {
      el.innerHTML = content;
    }
  }

  // ============================================
  // Render Trigger
  // ============================================

  function renderTriggerContent() {
    const selected = getSelectedItem();

    if (typeof renderTrigger === "function") {
      setContent(trigger, renderTrigger(selected));
    } else {
      trigger.innerHTML = "";

      const label = document.createElement("span");
      label.className = "dropdown__trigger-label";
      label.textContent = initialValue && initialValue != "" ? initialValue : selected ? selected.label : "";

      const chevron = document.createElement("i");
      chevron.setAttribute("data-lucide", "chevron-down");
      chevron.className = "dropdown__chevron";

      trigger.append(label, chevron);
    }

    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================
  // Render Menu
  // ============================================

    function renderItem(item, isActive) {
    const fragment = document.createDocumentFragment();

    const left = document.createElement("span");
    left.className = "language-switcher__item-left";

    const badge = document.createElement("span");
    badge.className = "language-switcher__badge";
    badge.textContent = item.badge;

    const label = document.createElement("span");
    label.className = "language-switcher__label";
    label.textContent = item.label;

    left.append(badge, label);
    fragment.appendChild(left);

    if (isActive) {
      const check = document.createElement("span");
      check.className = "language-switcher__check";

      const checkIcon = document.createElement("i");
      checkIcon.setAttribute("data-lucide", "check");
      check.appendChild(checkIcon);

      fragment.appendChild(check);
    }

    return fragment;
  }

  function renderMenu() {
    menu.innerHTML = "";

    items.forEach((item) => {
      const isActive = item.value === currentValue;
      const isDisabled = !!item.disabled || isActive;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = itemClassName ? itemClassName : "dropdown__item";

      if (isActive) btn.classList.add("is-active");
      if (isDisabled) btn.disabled = true;

      if (typeof renderItem === "function") {
        setContent(btn, renderItem(item, isActive));
      } else {
        // ─── default ───────────────────────────
        const label = document.createElement("span");
        label.className = "dropdown__item-label";
        label.textContent = item.label;
        btn.appendChild(label);

        if (isActive) {
          const checkIcon = document.createElement("i");
          checkIcon.setAttribute("data-lucide", "check");
          checkIcon.className = "dropdown__item-check";
          btn.appendChild(checkIcon);
        }
      }

      btn.addEventListener("click", (event) => {
        event.stopPropagation();
        if (item.value === currentValue || item.disabled) return;

        currentValue = item.value;
        render();
        close();

        if (typeof onChange === "function") {
          onChange(currentValue, item);
        }
      });

      menu.appendChild(btn);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // ============================================
  // Full Render
  // ============================================

  function render() {
    renderTriggerContent();
    renderMenu();
  }

  // ============================================
  // Open / Close / Toggle
  // ============================================

  function open() {
    wrapper.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    menu.setAttribute("aria-hidden", "false");
  }

  function close() {
    wrapper.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
  }

  function toggle() {
    wrapper.classList.contains("is-open") ? close() : open();
  }

  // ============================================
  // Events
  // ============================================

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggle();
  });

  menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // close btn
  document.addEventListener("click", () => close());

  // Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") close();
  });

  // ============================================
  // Public API
  // ============================================

  wrapper.getValue = () => currentValue;

  wrapper.setValue = (newValue) => {
    if (!items.some((item) => item.value === newValue)) return;
    currentValue = newValue;
    render();
  };

  wrapper.open = open;
  wrapper.close = close;
  wrapper.toggle = toggle;

  // one step rendering
  render();

  return wrapper;
};

export default dropdownGenerator