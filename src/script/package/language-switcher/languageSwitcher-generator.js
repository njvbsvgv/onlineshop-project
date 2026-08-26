const languages = [
  {
    code: 'fa',
    label: 'فارسی',
    shortLabel: 'فا'
  },
  {
    code: 'en',
    label: 'English',
    shortLabel: 'EN'
  }
];


function languageSwitcherGenerator(
  locale,
  clickHandler
) {

  let currentLocale = locale || 'fa';

  const onClick =
    typeof clickHandler === 'function'
      ? clickHandler
      : function () {};


  // ======================================
  // Wrapper
  // ======================================

  const wrapper =
    document.createElement('div');

  wrapper.className =
    'language-switcher';


  // ======================================
  // Trigger
  // ======================================

  const trigger =
    document.createElement('button');

  trigger.type = 'button';

  trigger.className =
    'language-switcher__trigger';

  trigger.setAttribute(
    'aria-haspopup',
    'true'
  );

  trigger.setAttribute(
    'aria-expanded',
    'false'
  );


  // ======================================
  // Globe
  // ======================================

  const globe =
    document.createElement('i');

  globe.setAttribute(
    'data-lucide',
    'globe'
  );

  globe.className =
    'language-switcher__globe';


  // ======================================
  // Current Language
  // ======================================

  const currentLanguage =
    document.createElement('span');

  currentLanguage.className =
    'language-switcher__current';


  // ======================================
  // Chevron
  // ======================================

  const chevron =
    document.createElement('i');

  chevron.setAttribute(
    'data-lucide',
    'chevron-down'
  );

  chevron.className =
    'language-switcher__chevron';


  trigger.append(
    globe,
    currentLanguage,
    chevron
  );


  // ======================================
  // Dropdown
  // ======================================

  const dropdown =
    document.createElement('div');

  dropdown.className =
    'language-switcher__dropdown';

  dropdown.setAttribute(
    'aria-hidden',
    'true'
  );


  wrapper.append(
    trigger,
    dropdown
  );


  // ======================================
  // Get Current Language
  // ======================================

  function getCurrentLanguage() {

    return (
      languages.find(
        item =>
          item.code === currentLocale
      ) || languages[0]
    );

  }


  // ======================================
  // Render Dropdown
  // ======================================

  function renderDropdown() {

    dropdown.innerHTML = '';


    languages.forEach(language => {

      const isActive =
        language.code === currentLocale;


      const item =
        document.createElement('button');

      item.type = 'button';

      item.className =
        'language-switcher__item';


      if (isActive) {

        item.classList.add(
          'is-active'
        );

        item.disabled = true;

      }


      // Left
      const left =
        document.createElement('span');

      left.className =
        'language-switcher__item-left';


      // Badge
      const badge =
        document.createElement('span');

      badge.className =
        'language-switcher__badge';

      badge.textContent =
        language.shortLabel;


      // Label
      const label =
        document.createElement('span');

      label.className =
        'language-switcher__label';

      label.textContent =
        language.label;


      left.append(
        badge,
        label
      );


      item.appendChild(
        left
      );


      // ==================================
      // Check
      // ==================================

      if (isActive) {

        const check =
          document.createElement('span');

        check.className =
          'language-switcher__check';


        const checkIcon =
          document.createElement('i');

        checkIcon.setAttribute(
          'data-lucide',
          'check'
        );


        check.appendChild(
          checkIcon
        );


        item.appendChild(
          check
        );

      }


      // ==================================
      // Click Handler
      // ==================================

      item.addEventListener(
        'click',
        function (event) {

          event.stopPropagation();


          if (
            language.code === currentLocale
          ) {
            return;
          }


          currentLocale =
            language.code;


          render();

          closeDropdown();


          // فقط locale به callback ارسال می‌شود
          onClick(currentLocale);

        }
      );


      dropdown.appendChild(
        item
      );

    });


    if (window.lucide) {
      window.lucide.createIcons();
    }

  }


  // ======================================
  // Render
  // ======================================

  function render() {

    const current =
      getCurrentLanguage();


    currentLanguage.textContent =
      current.label;


    renderDropdown();


    if (window.lucide) {
      window.lucide.createIcons();
    }

  }


  // ======================================
  // Open
  // ======================================

  function openDropdown() {

    wrapper.classList.add(
      'is-open'
    );


    trigger.setAttribute(
      'aria-expanded',
      'true'
    );


    dropdown.setAttribute(
      'aria-hidden',
      'false'
    );

  }


  // ======================================
  // Close
  // ======================================

  function closeDropdown() {

    wrapper.classList.remove(
      'is-open'
    );


    trigger.setAttribute(
      'aria-expanded',
      'false'
    );


    dropdown.setAttribute(
      'aria-hidden',
      'true'
    );

  }


  // ======================================
  // Toggle
  // ======================================

  function toggleDropdown() {

    const isOpen =
      wrapper.classList.contains(
        'is-open'
      );


    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }

  }


  // ======================================
  // Trigger Click
  // ======================================

  trigger.addEventListener(
    'click',
    function (event) {

      event.stopPropagation();

      toggleDropdown();

    }
  );


  // ======================================
  // Dropdown Click
  // ======================================

  dropdown.addEventListener(
    'click',
    function (event) {

      event.stopPropagation();

    }
  );


  // ======================================
  // Outside Click
  // ======================================

  document.addEventListener(
    'click',
    function () {

      closeDropdown();

    }
  );


  // ======================================
  // Escape
  // ======================================

  document.addEventListener(
    'keydown',
    function (event) {

      if (event.key === 'Escape') {
        closeDropdown();
      }

    }
  );


  // ======================================
  // Public API
  // ======================================

  wrapper.setLocale =
    function (newLocale) {

      const exists =
        languages.some(
          language =>
            language.code === newLocale
        );


      if (!exists) {
        return;
      }


      currentLocale =
        newLocale;


      render();

    };


  wrapper.getLocale =
    function () {

      return currentLocale;

    };


  wrapper.open =
    openDropdown;


  wrapper.close =
    closeDropdown;


  // Initial render
  render();


  return wrapper;
}