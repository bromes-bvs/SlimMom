import { useEffect } from 'react';
import AllRouts from 'routs/AllRouts';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
import { selectAuthIsLoadCurrentUser } from 'redux/auth/authSelectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSuspense from './LoaderSuspense/LoaderSuspense';

export const App = () => {
  const dispatch = useDispatch();
  const isLoadCurrentUser = useSelector(selectAuthIsLoadCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="light" />
      {isLoadCurrentUser ? <LoaderSuspense /> : <AllRouts />}
    </>
  );
};
