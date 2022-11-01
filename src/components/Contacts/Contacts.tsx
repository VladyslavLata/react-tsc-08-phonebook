import * as SC from './Contacts.styled';
import { ButtonDelete } from 'components/ButtonDelete/ButtonDelete';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { VscClose } from 'react-icons/vsc';

interface IProps {
  onRemoveContact: (name: string) => void;
}

export const Contacts: React.FC<IProps> = ({ onRemoveContact }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <SC.ContactsList>
      {visibleContacts.map(({ name, number, id }, i) => (
        <SC.ContactCard key={id} index={i}>
          <div>
            <h3>{name}</h3>
            <SC.Number>{number}</SC.Number>
          </div>
          <ButtonDelete onRemoveContact={onRemoveContact} id={id} index={i}>
            <VscClose />
          </ButtonDelete>
        </SC.ContactCard>
      ))}
    </SC.ContactsList>
  );
};
