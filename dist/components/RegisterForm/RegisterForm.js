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
exports.RegisterForm = void 0;
const formik_1 = require("formik");
const yup = __importStar(require("yup"));
const Phonebook_styled_1 = require("components/PhonebookForm/Phonebook.styled");
const react_redux_1 = require("react-redux");
const operations_1 = require("redux/auth/operations");
const Button_1 = require("components/Button/Button");
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
const RegisterForm = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleSubmit = (values, actions) => {
        dispatch((0, operations_1.register)(Object.assign({}, values)));
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
        <Phonebook_styled_1.Label htmlFor="email">
          <Phonebook_styled_1.LabelName>Email</Phonebook_styled_1.LabelName>
          <Phonebook_styled_1.Input type="email" name="email"/>
          <Phonebook_styled_1.ErrorWrap>
            <Phonebook_styled_1.ErrorText component="p" name="email"/>
          </Phonebook_styled_1.ErrorWrap>
        </Phonebook_styled_1.Label>
        <Phonebook_styled_1.Label htmlFor="password">
          <Phonebook_styled_1.LabelName>Password</Phonebook_styled_1.LabelName>
          <Phonebook_styled_1.Input type="password" name="password"/>
          <Phonebook_styled_1.ErrorWrap>
            <Phonebook_styled_1.ErrorText component="p" name="password"/>
          </Phonebook_styled_1.ErrorWrap>
        </Phonebook_styled_1.Label>
        <Button_1.Button margin="32px 0 0 ">Register</Button_1.Button>
      </formik_1.Form>
    </formik_1.Formik>);
};
exports.RegisterForm = RegisterForm;
//# sourceMappingURL=RegisterForm.js.map