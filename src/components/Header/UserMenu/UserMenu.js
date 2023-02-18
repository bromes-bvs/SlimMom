import { Button, Divider, Stack } from '@mui/material';
import LoadingSpiner from 'components/AuthForm/LoadingSpiner';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import {
  selectAuthLoading,
  selectAuthUserName,
} from 'redux/auth/authSelectors';
import { dailyRateOperation } from 'redux/daily/dailyOperation';
import { normalizeName } from 'services/normalized';

const UserMenu = ({ styles }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const name = useSelector(selectAuthUserName);
  const { t } = useTranslation();

  return (
    <Stack
      sx={{
        display: styles,
        backgroundColor: { xs: '#E0E0E0', md: 'inherit' },
        justifyContent: 'flex-end',
        height: '40px',
        alignItems: 'center',
      }}
      direction="row"
      spacing={2}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          textAlign: 'right',
          letterSpacing: '0.04em',
          color: '#212121',
          fontFamily: 'Verdana',
          fontStyle: 'normal',
          margin: 0,
        }}
      >
        {name && normalizeName(name)}
      </p>
      <Divider
        orientation="vertical"
        variant="middle"
        textAlign="center"
        sx={{
          alignSelf: 'center',
          height: '32px',
          m: '0 auto',
          borderWidth: '1.5px',
        }}
      />
      <Button
        sx={{
          fontFamily: 'Verdana',
          fontStyle: 'normal',
          border: 'none',
          textTransform: 'capitalize',
          marginLeft: 0,
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: 1.2,
          textAlign: 'right',
          letterSpacing: '0.04em',
          color: '#9B9FAA',
          justifyContent: 'flex-start',
          p: 0,
        }}
        onClick={() => {
          dispatch(dailyRateOperation());
          dispatch(logoutUser());
        }}
      >
        {loading ? (
          <LoadingSpiner color="#000" size={9} />
        ) : (
          t('auth.title.exit')
        )}
      </Button>
    </Stack>
  );
};

export default UserMenu;
