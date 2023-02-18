import DairyProdactItem from 'components/Dairy/DairyProdactItem/DairyProdactItem';
import { ListStyled } from './DairyProductList.styled';
// import PropTypes from 'prop-types';

export default function DairyProductList({ poducts, onDeleteProduct, dayId }) {
  return (
    <ListStyled
      sx={{
        marginLeft: {
          xs: '0px',
          md: '20px',
        },
        width: { md: '650px', xs: '292px' },
        minHeight: { md: '271px', xs: '280px' },
        maxHeight: { md: '271px', xs: '280px' },
      }}
    >
      {poducts.map(({ id, weight, title, kcal }) => {
        return (
          <DairyProdactItem
            key={id}
            name={title}
            grams={weight}
            kcal={kcal.toFixed(0)}
            deleteProduct={event =>
              onDeleteProduct({ dayId: dayId, eatenProductId: id })
            }
          />
        );
      })}
    </ListStyled>
  );
}

// DairyProductList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };
