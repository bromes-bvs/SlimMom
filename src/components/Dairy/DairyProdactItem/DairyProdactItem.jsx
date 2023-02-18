import { ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';
// import PropTypes from 'prop-types';

export default function DairyProdactItem({ name, grams, kcal, deleteProduct }) {
  const { t } = useTranslation();
  return (
    <>
      <ListItem
        sx={{
          alignItems: 'flex-end',
          padding: 0,
          margin: 0,
        }}
      >
        <ListItemText
          sx={{
            paddingBottom: {
              xs: '8px',
              md: '20px',
            },
            paddingTop: {
              xs: '20px',
              md: '16px',
            },
            width: {
              xs: 130,
              md: 270,
            },
            m: 0,
            mr: {
              xs: '8px',
              md: '48px',
            },
            borderBottom: '1px solid #80808038',
            flexGrow: 0,
            '.MuiListItemText-primary': {
              fontFamily: 'Verdana',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.1',
              letterSpacing: '0.04em',
            },
          }}
          primary={name}
        />
        <ListItemText
          sx={{
            paddingBottom: {
              xs: '8px',
              md: '20px',
            },
            paddingTop: {
              xs: '20px',
              md: '16px',
            },
            width: {
              xs: 49,
              md: 107,
            },
            m: 0,
            mr: {
              xs: '8px',
              md: '32px',
            },
            textAlign: 'right',
            borderBottom: '1px solid #80808038',
            flexGrow: 0,
            '.MuiListItemText-primary': {
              fontFamily: 'Verdana',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.1',
              letterSpacing: '0.04em',
            },
          }}
          primary={`${grams} ${t('diary.g')}`}
        />
        <ListItemText
          sx={{
            paddingBottom: {
              xs: '8px',
              md: '20px',
            },
            paddingTop: {
              xs: '20px',
              md: '16px',
            },
            width: {
              xs: 58,
              md: 106,
            },
            m: 0,
            mr: {
              xs: '1px',
              // !!!!!!!!!!!!!!!!!!!!!!!!!!!!
              md: '18px',
            },
            textAlign: 'right',
            borderBottom: '1px solid #80808038',
            flexGrow: 0,
            lineHeight: '0.9',
            '.MuiListItemText-primary': {
              display: 'inline-block',
              marginRight: '3px',
              fontFamily: 'Verdana',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.1',
              letterSpacing: {
                xs: '0.1px;',
                md: '0.04em',
              },
            },
            '.MuiListItemText-secondary': {
              display: 'inline-block',
              color: '#212121',
              fontFamily: 'Verdana',
              fontWeight: 400,
              fontSize: {
                xs: '9px',
                md: '14px',
              },
              lineHeight: '1.1',
              letterSpacing: {
                xs: '0.1px;',
                md: '0.04em',
              },
            },
          }}
          primary={`${kcal}`}
          secondary={t('diary.kcal')}
        />
        <IconButton
          sx={{
            marginBottom: {
              xs: '4px',
              md: '8px',
            },
            padding: {
              xs: '4px',
              md: '9px',
            },
          }}
          edge="end"
          aria-label="delete"
          onClick={deleteProduct}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
}

// DairyProdactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   grams: PropTypes.string.isRequired,
//   kcal: PropTypes.string.isRequired,
//   deleteProduct: PropTypes.func.isRequired,
// };
