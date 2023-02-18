import ContainerLayout from 'components/Container/Container';
import LoginForm from 'components/AuthForm/LoginForm';
import {
  AuthWrapper,
  BgWrapper,
  TitleStyled,
} from 'assets/styles/AuthPages.styled';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <AuthWrapper>
      <ContainerLayout>
        <TitleStyled>{t('auth.title.login')}</TitleStyled>
        <LoginForm />
        <BgWrapper />
      </ContainerLayout>
    </AuthWrapper>
  );
};

export default LoginPage;
