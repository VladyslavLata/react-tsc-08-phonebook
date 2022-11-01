import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box/Box';

const RegisterPage: React.FC = () => {
  return (
    <Box pt="80px" pb={5} display="flex" justifyContent="center">
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
