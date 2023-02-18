import { MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NavLinkMenu } from './AuthNav.styled';

const UserNav = ({ handleClose }) => {
  const { t } = useTranslation();

  return (
    <>
      <MenuItem
        sx={{
          mr: { xs: 0, lg: '24px' },
          p: 0,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkMenu
          style={{
            textDecoration: 'none',
          }}
          to={'/diary'}
          onClick={handleClose}
        >
          {t('navigate.diary')}
        </NavLinkMenu>
      </MenuItem>
      <MenuItem
        sx={{
          mr: 0,
          p: 0,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
        }}
      >
        <NavLinkMenu
          style={{
            textDecoration: 'none',
          }}
          to="/calculator"
          onClick={handleClose}
        >
          {t('navigate.calc')}
        </NavLinkMenu>
      </MenuItem>
    </>
  );
};

export default UserNav;
