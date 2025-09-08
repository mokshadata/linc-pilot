document.addEventListener("astro:page-load", () => {
  const localeToLang = {
      en: {
          label: 'English',
          path: '',
      },
      es: {
          label: 'Spanish',
          path: '/es',
      },
  }

  const languagePicker = document.getElementById('language-picker');
  const currentLocale = document.querySelector('html').lang;

  if (languagePicker) {
    languagePicker.addEventListener('change', (event) => {
      const selectedLocale = event.target.value;
      const localePath = localeToLang[selectedLocale].path;

      // Strip the current locale from the path
      const currentPath = window.location.pathname;
      const pathWithoutLocale = currentPath.replace(localeToLang[currentLocale].path, '');

      // Build the new URL with the selected locale
      const newPath = `${localePath}${pathWithoutLocale}`;

      // Redirect the browser
      window.location.href = newPath;
    });
  }
});