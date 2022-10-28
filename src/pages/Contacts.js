import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import { filter } from 'redux/contacts/contactsSlice';
import { operations, selectors } from 'redux/contacts';
import { Message } from 'components/Message/Message';
import { Title } from '../components/Title/Title';
import { ButtonIcon } from 'components/ButtonIcon/ButtonIcon';
import { MdOutlineAdd } from 'react-icons/md/index.esm';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const name = useSelector(selectors.selectFilterName);
  const messageError = useSelector(selectors.selectErrorMessage);
  const visibleContacts = useSelector(selectors.selectVisibleContacts);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  const togleModal = () => {
    setShowModal(!showModal);
  };

  const reviewNameInContacts = name => {
    return contacts.find(contact => contact.name === name);
  };

  const addContact = contact => {
    dispatch(operations.addNewContact(contact));
    togleModal();
  };

  const removeContact = removeContactId => {
    dispatch(operations.deleteContact(removeContactId));
  };

  const changeFilter = e => {
    dispatch(filter(e.currentTarget.value.trimStart()));
  };

  return (
    <>
      <ButtonIcon size="50px" position={['5px', '49%']} onClick={togleModal}>
        <MdOutlineAdd />
      </ButtonIcon>
      <Section title="Contacts">
        <Filter value={name} onChange={changeFilter} />
        {messageError && <Message message={messageError} />}
        {visibleContacts.length > 0 && (
          <Contacts onRemoveContact={removeContact} />
        )}
        {showModal && (
          <Modal onClose={togleModal}>
            <div>
              <Title>Add Contact</Title>
              <PhonebookForm
                onAddContact={addContact}
                onReviewName={reviewNameInContacts}
              />
            </div>
          </Modal>
        )}
      </Section>
    </>
  );
};

export default ContactsPage;
