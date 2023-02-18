import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useTranslateFormErrors = (errors, touched, setFieldTouched) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    i18n.changeLanguage(lang);
    i18n.on('languageChanged', lng => {
      Object.keys(errors).forEach(fieldName => {
        if (Object.keys(touched).includes(fieldName)) {
          setFieldTouched(fieldName);
        }
      });
    });

    return () => {
      i18n.off('languageChanged', lng => {});
    };
  }, [errors, i18n, lang, setFieldTouched, touched]);
};

export default useTranslateFormErrors;
