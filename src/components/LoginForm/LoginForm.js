import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  LabelName,
  Input,
  ErrorText,
  Label,
  ErrorWrap,
} from 'components/PhonebookForm/Phonebook.styled';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';

const schema = yup.object().shape({
  email: yup.string().strict().trim().email().required(),
  password: yup.string().strict().trim().min(6).max(30).required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login({ ...values }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label htmlFor="email">
          <LabelName>Email</LabelName>
          <Input type="email" name="email" />
          <ErrorWrap>
            <ErrorText component="p" name="email" />
          </ErrorWrap>
        </Label>
        <Label htmlFor="password">
          <LabelName>Password</LabelName>
          <Input type="password" name="password" />
          <ErrorWrap>
            <ErrorText component="p" name="password" />
          </ErrorWrap>
        </Label>
        <Button margin="32px 0 0">Log In</Button>
      </Form>
    </Formik>
  );
};
