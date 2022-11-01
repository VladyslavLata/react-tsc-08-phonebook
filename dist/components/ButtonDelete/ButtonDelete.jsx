"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonDelete = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const ButtonDelete_styled_1 = require("./ButtonDelete.styled");
const Spinner_1 = require("components/Spinner/Spinner");
const selectors_1 = require("redux/contacts/selectors");
const ButtonDelete = ({ onRemoveContact, id, index, children, }) => {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const error = (0, react_redux_1.useSelector)(selectors_1.selectErrorMessage);
    if (error) {
        setLoading(false);
    }
    return (<ButtonDelete_styled_1.Button index={index} type="button" disabled={loading} onClick={() => {
            setLoading(true);
            onRemoveContact(id);
        }}>
      <Spinner_1.Spinner loading={loading} size={'24'}/>
      {children}
    </ButtonDelete_styled_1.Button>);
};
exports.ButtonDelete = ButtonDelete;
//# sourceMappingURL=ButtonDelete.jsx.map