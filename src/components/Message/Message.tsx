import { Box } from 'components/Box/Box';

interface IProps {
  message: string,
}

export const Message: React.FC<IProps> = ({ message }) => {
  return (
    <Box as="p" p={4} color={'red'}>
      {message}
    </Box>
  );
};
