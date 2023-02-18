import { useTranslation } from 'react-i18next';
import ukrFlagIcon from 'assets/images/lang/ukrainian.png';
import frFlagIcon from 'assets/images/lang/france.png';
import ukFlagIcon from 'assets/images/lang/english.png';
import {
  ActiveBtn,
  BtnWrapper,
  WrapperSwitcher,
} from './LanguageSwitcher.styled';

const languages = {
  en: { icon: ukFlagIcon, nativeName: 'English' },
  uk: { icon: ukrFlagIcon, nativeName: 'Українська' },
  fr: { icon: frFlagIcon, nativeName: 'Français' },
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <WrapperSwitcher>
      {Object.keys(languages).map(lng => (
        <BtnWrapper key={lng}>
          <ActiveBtn
            className={i18n.resolvedLanguage === lng ? '' : 'noActive'}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            <img
              src={languages[lng].icon}
              alt={languages[lng].nativeName}
              width="50"
            />
          </ActiveBtn>
        </BtnWrapper>
      ))}
    </WrapperSwitcher>
  );
};

export default LanguageSwitcher;
