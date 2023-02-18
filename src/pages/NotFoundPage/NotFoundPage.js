import { Typography } from '@mui/material';
import ContainerLayout from 'components/Container/Container';
import { useTranslation } from 'react-i18next';
import { LinkBack, NotFoundBg, NotFoundWrapper } from './NotFoundPage.styled';

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <ContainerLayout>
      <NotFoundWrapper>
        <Typography
          variant="h2"
          sx={{
            textTransform: 'uppercase',
            mb: '20px',
          }}
        >
          {t('notFoundPage.title')}
        </Typography>
        <LinkBack to="/">{t('notFoundPage.textLink')}</LinkBack>
      </NotFoundWrapper>
      <NotFoundBg />
    </ContainerLayout>
  );
};

export default NotFoundPage;
