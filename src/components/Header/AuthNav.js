import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLinkAuth } from './AuthNav.styled';

const AuthNav = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
        <NavLinkAuth to="/login">{t('auth.title.login')}</NavLinkAuth>
      </Typography>
      <Typography variant="h6" component="div">
        <NavLinkAuth to="/registration">{t('auth.title.register')}</NavLinkAuth>
      </Typography>
    </>
  );
};

export default AuthNav;
