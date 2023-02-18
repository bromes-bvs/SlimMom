import DairyAddProductForm from 'components/Dairy/DairyAddProductForm/DairyAddProductForm';
import DairyProductList from 'components/Dairy/DairyProductList/DairyProductList';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import DiaryDateСalendar from 'components/Dairy/DiaryDateСalendar/DiaryDateСalendar';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { MessageStyled } from './DairyProductList/DairyProductList.styled';
import {
  deleteProduct,
  getDayProducts,
  postProduct,
} from 'services/api/base_api';
import { Stack } from '@mui/material';
import { CustomLoaderStyled } from './DairyLoader/DairyLoader.styled';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/authSelectors';

const Dairy = () => {
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState('');
  const [currentDayId, setCurrentDayId] = useState('');
  const [summaryDay, setSummaryDay] = useState({});
  const [isHidden, setIsHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const userData = useSelector(selectAuthUserData);
  // console.log(userData);

  useEffect(() => {
    if (date === '') {
      return;
    }
    setIsLoading(true);
    getDayProducts({ date: date }).then(res => {
      setTimeout(() => {
        const newDayId = res.id;
        const newEatenProducts = res.eatenProducts;

        setSummaryDay(res.daySummary ?? { ...res, date: date });

        setCurrentDayId(newDayId ?? '');
        setProducts(newEatenProducts ?? []);
        setIsLoading(false);
      }, 1000);
    });
  }, [date]);

  const handelHideComponents = value => {
    setIsHidden(value);
  };
  const handleDateChange = date => {
    const backendDate = new Date(date).toISOString().split('T')[0];
    setDate(backendDate);
  };

  const handelSubmitPost = object => {
    const newProduct = {
      date: date,
      productId: object.id,
      weight: +object.weight,
    };

    postProduct(newProduct).then(res => {
      if (res.newDay) {
        setCurrentDayId(res.newDay.id);
        setProducts(prev => [...prev, ...[res.eatenProduct]]);
        setSummaryDay(res.newSummary);
      } else {
        setProducts(res.day.eatenProducts);
        setSummaryDay(res.daySummary);
      }
    });
  };

  const handleDelete = object => {
    deleteProduct(object).then(res => {});
    getDayProducts({ date: date }).then(res => {
      const newEatenProducts = res.eatenProducts;
      setProducts(newEatenProducts ?? []);

      setSummaryDay(res.daySummary);
    });
    toast('Product removed successfully', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      theme: 'light',
      icon: '🚽',
      toastId: 'yes',
      pauseOnHover: false,
    });
  };

  return (
    <Stack
      direction={{ xs: 'column', md: 'column', lg: 'row' }}
      sx={{
        gap: {
          xs: '60px',
          md: '30px',
          lg: '93px',
        },
        m: '0 auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: { xs: '0px', lg: '253px' },
          width: { lg: '60vw' },
          height: { lg: '100%' },
        }}
      >
        <Box
          sx={{
            margin: { xs: '0 auto', md: '0' },
            // marginRight: { xs: '0px', lg: '113px' },
          }}
        >
          {!isHidden && <DiaryDateСalendar onDateChange={handleDateChange} />}

          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'block',
              },
              flexDirection: 'column-reverse',
            }}
            component="div"
          >
            <DairyAddProductForm
              userData={userData}
              onSubmitting={handelSubmitPost}
              onHiddenClick={handelHideComponents}
            />
            {/* <CustomLoaderStyled /> */}
            {isLoading && products.length === 0 ? (
              <CustomLoaderStyled />
            ) : (
              !isHidden &&
              (products.length === 0 ? (
                <MessageStyled>
                  {userData?.dailyRate === 0
                    ? 'Fill data in calculator'
                    : t('diary.noselectedDate')}
                </MessageStyled>
              ) : (
                <DairyProductList
                  poducts={products}
                  onDeleteProduct={handleDelete}
                  dayId={currentDayId}
                />
              ))
            )}
          </Box>
        </Box>
      </Box>
      <RightSideBar
        summaryDayInfo={summaryDay}
        styled={{ width: { lg: '40vw' }, height: { lg: '100%' } }}
      />
    </Stack>
  );
};

export default Dairy;
