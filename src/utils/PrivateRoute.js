import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogined, isRefreshing } = useAuth();
  return !isLogined && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
