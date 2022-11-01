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
exports.Contacts = void 0;
const SC = __importStar(require("./Contacts.styled"));
const ButtonDelete_1 = require("components/ButtonDelete/ButtonDelete");
const react_redux_1 = require("react-redux");
const selectors_1 = require("redux/contacts/selectors");
const vsc_1 = require("react-icons/vsc");
const Contacts = ({ onRemoveContact }) => {
    const visibleContacts = (0, react_redux_1.useSelector)(selectors_1.selectVisibleContacts);
    return (<SC.ContactsList>
      {visibleContacts.map(({ name, number, id }, i) => (<SC.ContactCard key={id} index={i}>
          <div>
            <h3>{name}</h3>
            <SC.Number>{number}</SC.Number>
          </div>
          <ButtonDelete_1.ButtonDelete onRemoveContact={onRemoveContact} id={id} index={i}>
            <vsc_1.VscClose />
          </ButtonDelete_1.ButtonDelete>
        </SC.ContactCard>))}
    </SC.ContactsList>);
};
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.jsx.map