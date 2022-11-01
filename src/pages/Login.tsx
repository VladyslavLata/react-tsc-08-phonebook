import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box/Box';

const LoginPage: React.FC = () => {
  return (
    <Box pt="80px" pb={5} display="flex" justifyContent="center">
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
