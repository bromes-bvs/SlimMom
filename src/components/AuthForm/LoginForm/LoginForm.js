import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/auth/authOperation';
import { Form, WrapperButton } from '../AuthForm.styled';
import { selectAuthLoading } from 'redux/auth/authSelectors';
import LoadingSpiner from '../LoadingSpiner';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputAuthFrom from '../InputAuthFrom';
import { useTranslation } from 'react-i18next';
import useTranslateFormErrors from 'hooks/useTranslateFormErrors';

const LoginForm = () => {
  const loading = useSelector(selectAuthLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let schema = yup.object().shape({
    email: yup
      .string()
      .typeError(t('auth.input.email.err'))
      .min(3, t('auth.input.email.min'))
      .max(254, t('auth.input.email.max'))
      .email(t('auth.input.email.mail'))
      .required(t('auth.input.required')),
    password: yup
      .string()
      .min(8, t('auth.input.pass.min'))
      .max(100, t('auth.input.pass.max'))
      .typeError(t('auth.input.pass.err'))
      .required(t('auth.input.required')),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: schema,
    onSubmit: values => {
      dispatch(loginUser(values));
    },
  });

  useTranslateFormErrors(formik.errors, formik.touched, formik.setFieldTouched);

  const isValid = schema.isValidSync(formik.values);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputAuthFrom
        id="standard-required-login-email"
        label={t('auth.input.email.label')}
        type="email"
        name="email"
        sx={{
          mb: '40px',
        }}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik?.errors?.email ?? ''}
      />

      <InputAuthFrom
        id="standard-required-login-pass"
        label={t('auth.input.pass.label')}
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik?.errors?.password ?? ''}
      />

      <WrapperButton>
        <ButtonStyled
          type="submit"
          variant="contained"
          disabled={loading || !isValid}
          sx={{ backgroundColor: '#FC842D' }}
        >
          {loading ? <LoadingSpiner /> : t('auth.title.login')}
        </ButtonStyled>
        <LinkyStyled
          variant="outlined"
          sx={{
            color: '#FC842D',
            pointerEvents: `${loading ? 'none' : 'all'}`,
          }}
          to="/registration"
        >
          {t('auth.title.register')}
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default LoginForm;
