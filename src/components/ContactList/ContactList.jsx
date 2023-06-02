// import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';


export const ContactsList = ({ onDelete,updateContact  }) => {
  const contacts=useSelector(getContactsList)
  return (
    contacts.length !== 0 && (
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
            updateContact ={updateContact}
            
          />
        ))}
      </List>
    )
  );
};

// ContactsList.propTypes = {
//   contacts: propTypes.arrayOf(propTypes.object).isRequired,
//   onDelete: propTypes.func.isRequired,
// };
