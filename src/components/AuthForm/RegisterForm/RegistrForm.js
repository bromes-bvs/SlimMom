import { ButtonStyled, LinkyStyled } from 'assets/styles/AuthPages.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from 'redux/auth/authOperation';
import { selectAuthLoading } from 'redux/auth/authSelectors';
import { Form, WrapperButton } from '../AuthForm.styled';
import InputAuthFrom from '../InputAuthFrom';
import LoadingSpiner from '../LoadingSpiner';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import useTranslateFormErrors from 'hooks/useTranslateFormErrors';

const RegistrForm = () => {
  const loading = useSelector(selectAuthLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let schema = yup.object().shape({
    username: yup
      .string()
      .min(3, t('auth.input.name.min'))
      .max(254, t('auth.input.name.max'))
      .typeError(t('auth.input.name.err'))
      .required(t('auth.input.required')),
    email: yup
      .string()
      .min(3, t('auth.input.email.min'))
      .max(254, t('auth.input.email.max'))
      .typeError(t('auth.input.email.err'))
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
      username: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      dispatch(registerUser(values));
    },
  });

  useTranslateFormErrors(formik.errors, formik.touched, formik.setFieldTouched);

  const isValid = schema.isValidSync(formik.values);

  return (
    <Form onSubmit={formik.handleSubmit}>
      <InputAuthFrom
        id="standard-required-register-name"
        label={t('auth.input.name.label')}
        type="text"
        name="username"
        sx={{
          mb: '40px',
        }}
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik?.errors?.username ?? ''}
      />

      <InputAuthFrom
        id="standard-required-register-email"
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
        id="standard-required-register-pass"
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
          {loading ? <LoadingSpiner /> : t('auth.title.register')}
        </ButtonStyled>
        <LinkyStyled
          variant="outlined"
          sx={{
            color: '#FC842D',
            pointerEvents: `${loading ? 'none' : 'all'}`,
          }}
          to="/login"
        >
          {t('auth.title.login')}
        </LinkyStyled>
      </WrapperButton>
    </Form>
  );
};

export default RegistrForm;
