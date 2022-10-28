import { Box } from 'components/Box/Box';
import * as SC from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <Box as="ul" display="flex" gridGap={4}>
      <SC.Item>
        <SC.Link to="/login">Log In</SC.Link>
      </SC.Item>
      <SC.Item>
        <SC.Link to="/register">Register</SC.Link>
      </SC.Item>
    </Box>
  );
};
