import { Box } from 'components/Box/Box';

export const Title = ({ children }) => {
  return (
    <Box as="h2" mb={5} textAlign="center">
      {children}
    </Box>
  );
};
