import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import * as SC from './AppBar.styled';

export const AppBar = () => {
  const { isLogined } = useAuth();
  return (
    <SC.Header>
      <Navigation />
      {isLogined ? <UserMenu /> : <AuthNav />}
    </SC.Header>
  );
};
