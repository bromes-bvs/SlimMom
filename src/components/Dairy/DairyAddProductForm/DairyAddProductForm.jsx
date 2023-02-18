import {
  Autocomplete,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  FabStyled,
  FieldStyled,
  FormStyled,
  IconStyled,
} from './DairyAddProductForm.styled';
import { getProducts } from 'services/api/base_api';
import { useEffect, useState } from 'react';
import { useRef } from 'react';

import debounce from 'lodash.debounce';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { ButtonStyled } from 'assets/styles/AuthPages.styled';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export default function DairyAddProductForm({
  onSubmitting,
  onHiddenClick,
  userData,
}) {
  const [query, setQuery] = useState('');
  const [weigth, setWeigth] = useState('');
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:767px)');

  const formEl = useRef();
  const buttonEl = useRef();
  const arrowEl = useRef();

  useEffect(() => {
    if (query === '') {
      setProductList([]);
      return;
    }

    getProducts(query).then(res => {
      const products = res[0]?.title ? res : [];
      setProductList(products);
    });
  }, [query]);

  const productListValue = productList.map(({ title }) => title.ua);

  const hendleSubmit = e => {
    e.preventDefault();

    setWeigth(e.target.elements.grams.value.trim());

    if (!selectedProduct) {
      toast('Select allowed product', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        theme: 'light',
        icon: '🔥',
        toastId: 'yes',
        pauseOnHover: false,
      });
      return;
    }
    const { _id } = productList.find(elem => elem.title.ua === selectedProduct);

    onSubmitting({ weight: weigth, id: _id });
    setQuery('');
    setWeigth('');
    toast('Product add successfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      theme: 'light',
      icon: '🍭',
      toastId: 'yes',
      pauseOnHover: false,
    });
    e.currentTarget.reset();
  };

  const handleChangeView = value => {
    if (value) {
      onHiddenClick(value);
      formEl.current.style.display = 'block';
      buttonEl.current.style.display = 'none';
      arrowEl.current.style.display = 'inline-flex';
      formEl.current.parentElement.classList.add('afterInvisible');
    } else {
      onHiddenClick(value);
      formEl.current.style.display = 'none';
      buttonEl.current.style.display = 'flex';
      arrowEl.current.style.display = 'none';
      formEl.current.parentElement.classList.remove('afterInvisible');
    }
  };
  const debouncedQuery = debounce(e => {
    setQuery(e.target.value);
  }, 300);

  return (
    <>
      <IconStyled
        ref={arrowEl}
        onClick={() => handleChangeView(false)}
        sx={{ ml: '20px' }}
      >
        <KeyboardReturnIcon />
      </IconStyled>
      <FormStyled onSubmit={hendleSubmit}>
        <div className="wrapper" ref={formEl}>
          <Autocomplete
            sx={{ display: { xs: 'block', md: 'inline-block' } }}
            disablePortal
            id="combo-box-demo"
            freeSolo
            value={query}
            onChange={(_, value) => {
              setSelectedProduct(value);
            }}
            noOptionsText={t('diary.form.product.noOptionsText')}
            options={productListValue}
            renderInput={params => (
              <FieldStyled
                required
                {...params}
                onChange={debouncedQuery}
                value={query}
                id="filled-product"
                label={t('diary.form.product.label')}
                name="product"
                variant="filled"
              />
            )}
          />
          <TextField
            required
            label={t('diary.form.gr.label')}
            id="filled-number"
            name="grams"
            type="number"
            onChange={e => setWeigth(e.target.value)}
            sx={{
              width: {
                xs: 280,
                md: 150,
              },

              mx: 3,
              margin: {
                xs: 0,
              },
              marginBottom: {
                xs: '60px',
                md: 0,
              },
              '&.MuiTextField-root .MuiInputBase-root': {
                backgroundColor: 'white',
                '::before': {
                  borderColor: '#e0e0e0',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{t('diary.g')}</InputAdornment>
              ),
            }}
            inputProps={{
              inputMode: 'numeric',
              pattern: 'd{4}',
              max: 2000,
            }}
            variant="filled"
          />
          <ButtonStyled
            sx={{
              display: {
                xs: 'block',
                md: 'none',
              },
              margin: '0 auto',
              backgroundColor: '#FC842D',
              marginBottom: '20px',
              boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
            }}
            onClick={() => (isMobile ? handleChangeView(false) : null)}
            type="submit"
            variant="contained"
            disabled={query && weigth && selectedProduct ? false : true}
          >
            {t('diary.form.btn')}
          </ButtonStyled>
        </div>
        <FabStyled
          disabled={userData.dailyRate === 0 ? true : false}
          ref={buttonEl}
          onClick={() => (isMobile ? handleChangeView(true) : null)}
          aria-label="add"
          type={isMobile ? 'button' : 'submit'}
        >
          <AddIcon />
        </FabStyled>
      </FormStyled>
    </>
  );
}
