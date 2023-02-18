import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Radio, InputLabel, FormControlLabel, Container } from '@mui/material';
export const ColorButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#FC842D',
  display: 'block',
  fontWeight: '700',
  borderRadius: '30px',
  width: '210px',
  padding: '13px 25px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FFFFFF',
    color: '#FC842D',
    '&:disabled': {
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
  },
}));
export const ColorRadioBtn = styled(Radio)(({ theme }) => ({
  color: '#E0E0E0',
  '&.Mui-checked': {
    color: '#FC842D',
  },
}));
export const StyledInputLable = styled(InputLabel)(({ theme }) => ({
  color: '#9B9FAA',
  fontFamily: 'Verdana',
  fontWeight: 700,
  fontSize: 14,
  lineHeight: 1.14,
}));
export const StyledFormControlLabel = styled(props => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: '#FC842D',
  },
}));
export const StyledContainer = styled(Container)`
  margin-left: 0;
  margin-right: 0;
`;
