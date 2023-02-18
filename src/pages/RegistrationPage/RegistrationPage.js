import ContainerLayout from 'components/Container/Container';
import RegisterForm from 'components/AuthForm/RegisterForm';
import {
  AuthWrapper,
  BgWrapper,
  TitleStyled,
} from 'assets/styles/AuthPages.styled';
import { useTranslation } from 'react-i18next';

const RegistrationPage = () => {
  const { t } = useTranslation();
  return (
    <AuthWrapper>
      <ContainerLayout>
        <TitleStyled>{t('auth.title.register')}</TitleStyled>
        <RegisterForm />
        <BgWrapper />
      </ContainerLayout>
    </AuthWrapper>
  );
};

export default RegistrationPage;
