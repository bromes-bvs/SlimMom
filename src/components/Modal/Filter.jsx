import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#264061',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#264061',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#264061',
    },
  },
});

const Filter = ({ setSearchQuery }) => {
  const { t } = useTranslation();
  return (
    <form
      style={{
        m: '0 auto',
        textAlign: 'center',
      }}
    >
      <CssTextField
        variant="standard"
        id="search-bar"
        className="text"
        onInput={e => {
          setSearchQuery(e.target.value);
        }}
        label={t('filter.label')}
        // variant="outlined"
        placeholder={t('filter.placeholder')}
        sx={{
          width: {
            xs: '80vw',
            md: '380px',
          },
          maxWidth: '100%',
        }}
        // disabled={loading || !isValid}
      />
    </form>
  );
};
export default Filter;
