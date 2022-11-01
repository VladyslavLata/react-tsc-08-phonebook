import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

interface IProps {
  component: JSX.Element;
  redirectTo: string;
}

export const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLogined } = useAuth();
  return isLogined ? <Navigate to={redirectTo} /> : Component;
};
