import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

export const RequireNotAuthRoute = ({
  component: Component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

RequireNotAuthRoute.propTypes = {
  redirectTo: PropTypes.string,
  component: PropTypes.node.isRequired,
};
