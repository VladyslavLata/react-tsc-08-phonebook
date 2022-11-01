import { Formik, Form, FormikHelpers } from 'formik';
import * as yup from 'yup';
import {
  LabelName,
  Input,
  ErrorText,
  Label,
  ErrorWrap,
} from './Phonebook.styled';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/contacts/selectors';
import { Button } from 'components/Button/Button';
import { Spinner } from 'components/Spinner/Spinner';
import { IContactForm, IItem } from 'types/typers';

const schema = yup.object().shape({
  name: yup
    .string()
    .strict()
    .trim()
    .min(1)
    .max(30)
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required(),
  number: yup
    .string()
    .strict()
    .trim()
    .matches(
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)?$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

interface IProps {
  onAddContact: (contact: IContactForm) => void,
  onReviewName: (name: string)=>IItem|undefined,
}

export const PhonebookForm: React.FC<IProps> = ({ onAddContact, onReviewName }) => {
  const loading = useSelector(selectLoading);
  const handleSubmit = (values: IContactForm, actions: FormikHelpers<IContactForm>) => {
    if (onReviewName(values.name)) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    onAddContact({ ...values });
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
        <Label htmlFor="number">
          <LabelName>Phone</LabelName>
          <Input type="tel" name="number" />
          <ErrorWrap>
            <ErrorText component="p" name="number" />
          </ErrorWrap>
        </Label>
        <Button disabled={loading} margin="45px 0 0">
          Add contact
          <Spinner loading={loading} size="24" />
        </Button>
      </Form>
    </Formik>
  );
};


