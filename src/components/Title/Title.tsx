import { Box } from 'components/Box/Box';
import { IPropsChildren } from 'types/typers';

export const Title: React.FC<IPropsChildren> = ({ children }) => {
  return (
    <Box as="h2" mb={5} textAlign="center">
      {children}
    </Box>
  );
};
