import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

interface IProps {
  component: JSX.Element;
  redirectTo: string;
}

export const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLogined, isRefreshing } = useAuth();
  return !isLogined && !isRefreshing ? <Navigate to={redirectTo} /> : Component;
};
