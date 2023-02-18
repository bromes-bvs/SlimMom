import SharedLayout from 'components/SharedLayout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RequireAuthRoute } from './RequireAuthRoute';
import { RequireNotAuthRoute } from './RequireNotAuthRoute';
import {
  selectAuthUserData,
  selectAuthIsLoggedIn,
} from 'redux/auth/authSelectors';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegistrationPage = lazy(() => import('pages/RegistrationPage'));
const DiaryPage = lazy(() => import('pages/DiaryPage'));
const CalculatorPage = lazy(() => import('pages/CalculatorPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const AllRouts = () => {
  const userData = useSelector(selectAuthUserData);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RequireNotAuthRoute
                component={<HomePage />}
                redirectTo="/diary"
              />
            }
          />
          <Route
            path="login"
            element={
              <RequireNotAuthRoute
                component={<LoginPage />}
                redirectTo={
                  isLoggedIn && userData?.dailyRate !== 0
                    ? '/diary'
                    : '/calculator'
                }
              />
            }
          />
          <Route
            path="registration"
            element={
              <RequireNotAuthRoute
                component={<RegistrationPage />}
                redirectTo="/calculator"
              />
            }
          />
          <Route
            path="diary"
            element={
              <RequireAuthRoute component={<DiaryPage />} redirectTo="/login" />
            }
          />
          <Route
            path="calculator"
            element={
              <RequireAuthRoute
                component={<CalculatorPage />}
                redirectTo="/login"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRouts;
