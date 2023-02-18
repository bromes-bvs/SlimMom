import { useFormik } from 'formik';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import {
  ColorButton,
  ColorRadioBtn,
  StyledInputLable,
  StyledFormControlLabel,
} from './Main.styled.js';

import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { FormHelperText, Input, Typography, Box } from '@mui/material';
import ModalWindow from 'components/Modal/ModalWindow.jsx';
import {
  selectAuthIsLoggedIn,
  selectAuthUserData,
  selectAuthUserId,
} from 'redux/auth/authSelectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { dailyRateOperation } from 'redux/daily/dailyOperation.js';
import useTranslateFormErrors from 'hooks/useTranslateFormErrors.js';
import { useTranslation } from 'react-i18next';

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  value: PropTypes.string,
};

const Home = ({ onSubmit }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const id = useSelector(selectAuthUserId);

  const userInitValues = useSelector(selectAuthUserData);
  // const localInitValues = JSON.parse(localStorage?.getItem('item'));
  const initialValues = {
    height: userInitValues?.height || '',
    age: userInitValues?.age || '',
    weight: userInitValues?.weight || '',
    desiredWeight: userInitValues?.desiredWeight || '',
    bloodType: userInitValues?.bloodType || '',
  };

  const schema = yup.object().shape({
    height: yup
      .number(t('calc.form.numberOnly'))
      .required(t('calc.form.height.req'))
      .typeError(t('calc.form.height.err'))
      .positive(t('calc.form.height.positive'))
      .min(110, t('calc.form.height.min'))
      .integer(t('calc.form.height.integer'))
      .max(230, t('calc.form.height.max')),

    age: yup
      .number(t('calc.form.numberOnly'))
      .required(t('calc.form.age.req'))
      .typeError(t('calc.form.age.err'))
      .positive(t('calc.form.age.positive'))
      .min(15, t('calc.form.age.min'))
      .integer(t('calc.form.age.integer'))
      .max(80, t('calc.form.age.max')),

    weight: yup
      .number(t('calc.form.numberOnly'))
      .required(t('calc.form.curW.req'))
      .typeError(t('calc.form.curW.err'))
      .positive(t('calc.form.curW.positive'))
      .min(50, t('calc.form.curW.min'))
      .integer(t('calc.form.curW.integer'))
      .max(350, t('calc.form.curW.max')),

    desiredWeight: yup
      .number(t('calc.form.numberOnly'))
      .required(t('calc.form.desW.req'))
      .typeError(t('calc.form.desW.err'))
      .positive(t('calc.form.desW.positive'))
      .min(45, t('calc.form.desW.min'))
      .integer(t('calc.form.desW.integer'))
      .max(120, t('calc.form.desW.max'))
      .notOneOf([yup.ref('weight'), null], t('calc.form.desW.notOneOf')),

    bloodType: yup
      .number(t('calc.form.numberOnly'))
      .required(t('calc.form.type.req')),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(true);
      // localStorage.setItem('item', JSON.stringify(values));
      setSubmitting(false);
    },
    validateOnBlur: true,
  });

  let obj = {};

  for (let value in formik.values) {
    obj[value] = Number(formik.values[value]);
  }


  useTranslateFormErrors(formik.errors, formik.touched, formik.setFieldTouched);

  const isValid = schema.isValidSync(formik.values);
  const handleCloseModal = () => {
    setOpen(!open);
  };

  return (
    <Box
      component="div"
      sx={{
        p: {
          xs: '32px 0 41px 0',
          md: '65px 0 48px 0',
          lg: '293px 0 52px 0 ',
        },
        mr: {
          lg: '235px',
        },
      }}
    >
      <Box
        component="div"
        sx={{
          maxWidth: { lg: '608px', md: '518px', xs: '280px' },

          m: {
            xs: '0 auto',
            lg: '0',
          },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: { xs: '34px', md: '25px' },
            textAlign: { xs: 'center', md: 'start' },
            fontSize: { xs: '18px', md: '34px' },
          }}
        >
          {t('calc.title')}
        </Typography>
        <Box
          component="form"
          sx={{
            m: { xs: '0 auto', md: '0 auto 0 0' },
            maxWidth: { md: '512px', xs: '240px' },
          }}
          autoComplete="off"
          onSubmit={formik.handleSubmit}
        >
          <Box
            component="div"
            sx={{
              display: { md: 'flex' },
              gap: '32px',
            }}
          >
            <Box component="div">
              <StyledInputLable
                htmlFor="height"
                disableAnimation
                shrink
                error={formik.touched.height && Boolean(formik.errors.height)}
              >
                {t('calc.form.height.title')}*
              </StyledInputLable>
              <Input
                notched="true"
                id="height"
                placeholder={t('calc.form.height.placeholder')}
                value={formik.values.height}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.height && Boolean(formik.errors.height)}
                sx={{ width: '242px' }}
              />
              {formik.touched.height && formik.errors.height ? (
                <FormHelperText
                  error={formik.touched.height && Boolean(formik.errors.height)}
                  id="height-helper-text"
                >
                  {formik.errors.height}
                </FormHelperText>
              ) : (
                <FormHelperText id="height-helper-text"> </FormHelperText>
              )}

              <StyledInputLable
                htmlFor="age"
                disableAnimation
                shrink
                error={formik.touched.age && Boolean(formik.errors.age)}
                sx={{ mt: { xs: '12px', md: '20px' } }}
              >
                {t('calc.form.age.title')}*
              </StyledInputLable>
              <Input
                notched="true"
                id="age"
                value={formik.values.age}
                placeholder={t('calc.form.age.placeholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.age && Boolean(formik.errors.age)}
                variant="standard"
                sx={{ width: '240px' }}
              />
              {formik.touched.age && formik.errors.age ? (
                <FormHelperText
                  error={formik.touched.age && Boolean(formik.errors.age)}
                  id="age-helper-text"
                >
                  {formik.errors.age}
                </FormHelperText>
              ) : (
                <FormHelperText id="age-helper-text"> </FormHelperText>
              )}

              <StyledInputLable
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                disableAnimation
                shrink
                htmlFor="weight"
                sx={{ mt: { xs: '12px', md: '20px' } }}
              >
                {t('calc.form.curW.title')}*
              </StyledInputLable>
              <Input
                notched="true"
                id="weight"
                placeholder={t('calc.form.curW.placeholder')}
                aria-describedby="weight-helper-text"
                value={formik.values.weight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.weight && Boolean(formik.errors.weight)}
                sx={{ width: '240px' }}
              />
              {formik.touched.weight && formik.errors.weight ? (
                <FormHelperText
                  error={formik.touched.weight && Boolean(formik.errors.weight)}
                  id="weight-helper-text"
                >
                  {formik.errors.weight}
                </FormHelperText>
              ) : (
                <FormHelperText id="weight-helper-text"> </FormHelperText>
              )}
            </Box>
            <Box component="div">
              <StyledInputLable
                error={
                  formik.touched.desiredWeight &&
                  Boolean(formik.errors.desiredWeight)
                }
                sx={{ mt: { xs: '12px', md: '0' } }}
                disableAnimation
                shrink
                htmlFor="desiredWeight"
              >
                {t('calc.form.desW.title')}*
              </StyledInputLable>
              <Input
                notched="true"
                id="desiredWeight"
                placeholder={t('calc.form.desW.placeholder')}
                value={formik.values.desiredWeight}
                aria-describedby="desiredWeight-helper-text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.desiredWeight &&
                  Boolean(formik.errors.desiredWeight)
                }
                sx={{ width: '240px' }}
              />
              {formik.touched.desiredWeight && formik.errors.desiredWeight ? (
                <FormHelperText
                  error={
                    formik.touched.desiredWeight &&
                    Boolean(formik.errors.desiredWeight)
                  }
                  id="desiredWeight-helper-text"
                >
                  {formik.errors.desiredWeight}
                </FormHelperText>
              ) : (
                <FormHelperText id="desiredWeight-helper-text">
                  {' '}
                </FormHelperText>
              )}

              <StyledInputLable
                error={
                  formik.touched.bloodType && Boolean(formik.errors.bloodType)
                }
                sx={{ mt: { xs: '12px', md: '20px' } }}
                disableAnimation
                shrink
                htmlFor="bloodType"
              >
                {t('calc.form.type.title')}*
              </StyledInputLable>
              <Input
                readOnly
                notched="true"
                id="bloodType"
                name="bloodType"
                value={formik.values.bloodType}
                placeholder={t('calc.form.type.placeholder')}
                aria-describedby="bloodType-helper-text"
                error={
                  formik.touched.bloodType && Boolean(formik.errors.bloodType)
                }
                sx={{ width: '240px' }}
              />
              <RadioGroup
                notched="true"
                row
                aria-labelledby="bloodType"
                name="bloodType"
                value={formik.values.bloodType}
                onChange={formik.handleChange}
                sx={{
                  color: '#9B9FAA',
                  '&.Mui-checked': {
                    color: '#FC842D',
                  },
                }}
              >
                <MyFormControlLabel
                  value="1"
                  control={<ColorRadioBtn />}
                  label="1"
                />
                <MyFormControlLabel
                  value="2"
                  control={<ColorRadioBtn />}
                  label="2"
                />
                <MyFormControlLabel
                  value="3"
                  control={<ColorRadioBtn disableRipple={Boolean(true)} />}
                  label="3"
                />
                <MyFormControlLabel
                  value="4"
                  control={<ColorRadioBtn disableRipple={true} />}
                  label="4"
                />
              </RadioGroup>
              {formik.touched.bloodType && formik.errors.bloodType ? (
                <FormHelperText
                  error={
                    formik.touched.bloodType && Boolean(formik.errors.bloodType)
                  }
                  id="bloodType-helper-text"
                >
                  {formik.errors.bloodType}
                </FormHelperText>
              ) : (
                <FormHelperText id="bloodType-helper-text"> </FormHelperText>
              )}
            </Box>
          </Box>
          <ColorButton
            sx={{
              m: {
                xs: '20px auto 0 auto',
                md: '20px auto 0 0px',
                lg: '40px auto 0 323px',
              },
            }}
            disabled={isValid ? false : true}
            type="submit"
            variant="contained"
            onClick={() =>
              isLoggedIn
                ? dispatch(
                    dailyRateOperation({
                      id,
                      data: obj,
                    })
                  )
                : handleCloseModal()
            }
          >
            {isValid ? t('calc.btnText.valid') : t('calc.btnText.notValid')}
          </ColorButton>
        </Box>
      </Box>
      {open && (
        <ModalWindow
          values={formik.values}
          open={open}
          onClose={handleCloseModal}
          setOpen={setOpen}
        />
      )}
    </Box>
  );
};

export default Home;
