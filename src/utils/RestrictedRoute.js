import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogined } = useAuth();
  return isLogined ? <Navigate to={redirectTo} /> : Component;
};
