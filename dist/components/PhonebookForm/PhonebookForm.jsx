"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhonebookForm = void 0;
const formik_1 = require("formik");
const yup = __importStar(require("yup"));
const Phonebook_styled_1 = require("./Phonebook.styled");
const react_redux_1 = require("react-redux");
const selectors_1 = require("redux/contacts/selectors");
const Button_1 = require("components/Button/Button");
const Spinner_1 = require("components/Spinner/Spinner");
const schema = yup.object().shape({
    name: yup
        .string()
        .strict()
        .trim()
        .min(1)
        .max(30)
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces')
        .required(),
    number: yup
        .string()
        .strict()
        .trim()
        .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{2}\)?)\s?-?\s?(\(?\d{2}\)?)?$/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +')
        .required(),
});
const initialValues = {
    name: '',
    number: '',
};
const PhonebookForm = ({ onAddContact, onReviewName }) => {
    const loading = (0, react_redux_1.useSelector)(selectors_1.selectLoading);
    const handleSubmit = (values, actions) => {
        if (onReviewName(values.name)) {
            alert(`${values.name} is already in contacts.`);
            return;
        }
        onAddContact(Object.assign({}, values));
        actions.resetForm();
    };
    return (<formik_1.Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
      <formik_1.Form>
        <Phonebook_styled_1.Label htmlFor="name">
          <Phonebook_styled_1.LabelName>Name</Phonebook_styled_1.LabelName>
          <Phonebook_styled_1.Input autoComplete="off" type="text" name="name"/>
          <Phonebook_styled_1.ErrorWrap>
            <Phonebook_styled_1.ErrorText component="p" name="name"/>
          </Phonebook_styled_1.ErrorWrap>
        </Phonebook_styled_1.Label>
        <Phonebook_styled_1.Label htmlFor="number">
          <Phonebook_styled_1.LabelName>Phone</Phonebook_styled_1.LabelName>
          <Phonebook_styled_1.Input type="tel" name="number"/>
          <Phonebook_styled_1.ErrorWrap>
            <Phonebook_styled_1.ErrorText component="p" name="number"/>
          </Phonebook_styled_1.ErrorWrap>
        </Phonebook_styled_1.Label>
        <Button_1.Button disabled={loading} margin="45px 0 0">
          Add contact
          <Spinner_1.Spinner loading={loading} size="24"/>
        </Button_1.Button>
      </formik_1.Form>
    </formik_1.Formik>);
};
exports.PhonebookForm = PhonebookForm;
//# sourceMappingURL=PhonebookForm.jsx.map