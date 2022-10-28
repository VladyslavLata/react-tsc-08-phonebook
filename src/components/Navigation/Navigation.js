import { useAuth } from 'hooks/useAuth';
import { Box } from 'components/Box/Box';
import * as SC from './Navigation.styled';

export const Navigation = () => {
  const { isLogined } = useAuth();
  return (
    <Box as="nav">
      <Box as="ul" display="inline-flex" gridGap={5}>
        <SC.Item>
          <SC.Link to="/" end>
            Home
          </SC.Link>
        </SC.Item>
        {isLogined && (
          <SC.Item>
            <SC.Link to="/contacts">Contacts</SC.Link>
          </SC.Item>
        )}
      </Box>
    </Box>
  );
};
