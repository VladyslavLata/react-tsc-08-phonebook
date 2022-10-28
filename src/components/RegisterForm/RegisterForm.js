import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  LabelName,
  ErrorWrap,
  Input,
  ErrorText,
  Label,
} from 'components/PhonebookForm/Phonebook.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from 'components/Button/Button';

const schema = yup.object().shape({
  name: yup.string().strict().trim().min(1).max(30).required(),
  email: yup.string().strict().trim().email().required(),
  password: yup.string().strict().trim().min(6).max(30).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label htmlFor="name">
          <LabelName>Name</LabelName>
          <Input autoComplete="off" type="text" name="name" />
          <ErrorWrap>
            <ErrorText component="p" name="name" />
          </ErrorWrap>
        </Label>
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
        <Button margin="32px 0 0 ">Register</Button>
      </Form>
    </Formik>
  );
};
