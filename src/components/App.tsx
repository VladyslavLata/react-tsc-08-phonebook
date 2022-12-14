import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import { PrivateRoute, RestrictedRoute } from 'utils';
import { useAuth } from 'hooks/useAuth';
import { useAppDispatch } from 'hooks/TSReduxHooks';
import { Home } from 'pages/Home';

const ContactsPage = lazy(() => import('pages/Contacts'));
const LoginPage = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

export const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
