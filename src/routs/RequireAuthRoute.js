import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

export const RequireAuthRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} replace />;
};

RequireAuthRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.node.isRequired,
};
