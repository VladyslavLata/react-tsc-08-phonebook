import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import * as SC from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const userLogout = () => dispatch(logout());
  return (
    <Box display="flex">
      <p>
        Welcom,
        <SC.UserIcon /> {user?.name}
      </p>
      <Button margin="0 0 0 16px" type="button" onClick={userLogout}>
        Logout
      </Button>
    </Box>
  );
};
