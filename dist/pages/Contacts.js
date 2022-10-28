"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const react_1 = require("react");
const Section_1 = require("components/Section/Section");
const PhonebookForm_1 = require("components/PhonebookForm/PhonebookForm");
const Contacts_1 = require("components/Contacts/Contacts");
const Filter_1 = require("components/Filter/Filter");
const Modal_1 = require("components/Modal/Modal");
const contactsSlice_1 = require("redux/contacts/contactsSlice");
const contacts_1 = require("redux/contacts");
const Message_1 = require("components/Message/Message");
const Title_1 = require("../components/Title/Title");
const ButtonIcon_1 = require("components/ButtonIcon/ButtonIcon");
const index_esm_1 = require("react-icons/md/index.esm");
const ContactsPage = () => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    const dispatch = (0, react_redux_1.useDispatch)();
    const contacts = (0, react_redux_1.useSelector)(contacts_1.selectors.selectContacts);
    const name = (0, react_redux_1.useSelector)(contacts_1.selectors.selectFilterName);
    const messageError = (0, react_redux_1.useSelector)(contacts_1.selectors.selectErrorMessage);
    const visibleContacts = (0, react_redux_1.useSelector)(contacts_1.selectors.selectVisibleContacts);
    (0, react_1.useEffect)(() => {
        dispatch(contacts_1.operations.fetchContacts());
    }, [dispatch]);
    const togleModal = () => {
        setShowModal(!showModal);
    };
    const reviewNameInContacts = name => {
        return contacts.find(contact => contact.name === name);
    };
    const addContact = contact => {
        dispatch(contacts_1.operations.addNewContact(contact));
        togleModal();
    };
    const removeContact = removeContactId => {
        dispatch(contacts_1.operations.deleteContact(removeContactId));
    };
    const changeFilter = e => {
        dispatch((0, contactsSlice_1.filter)(e.currentTarget.value.trimStart()));
    };
    return (<>
      <ButtonIcon_1.ButtonIcon size="50px" position={['5px', '49%']} onClick={togleModal}>
        <index_esm_1.MdOutlineAdd />
      </ButtonIcon_1.ButtonIcon>
      <Section_1.Section title="Contacts">
        <Filter_1.Filter value={name} onChange={changeFilter}/>
        {messageError && <Message_1.Message message={messageError}/>}
        {visibleContacts.length > 0 && (<Contacts_1.Contacts onRemoveContact={removeContact}/>)}
        {showModal && (<Modal_1.Modal onClose={togleModal}>
            <div>
              <Title_1.Title>Add Contact</Title_1.Title>
              <PhonebookForm_1.PhonebookForm onAddContact={addContact} onReviewName={reviewNameInContacts}/>
            </div>
          </Modal_1.Modal>)}
      </Section_1.Section>
    </>);
};
exports.default = ContactsPage;
//# sourceMappingURL=Contacts.js.map