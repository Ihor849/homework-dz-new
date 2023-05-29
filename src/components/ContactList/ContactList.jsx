// import propTypes from 'prop-types';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { List } from './ContactList.styled';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contactsSlice';


export const ContactsList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter);

  const filterContacts = 
    [...contacts.filter(contact => contact.name.toLowerCase().includes(filter.filter))]
    
  ;
  console.log(contacts);
  console.log(filter.filter);
console.log(filterContacts);

  const onDelete = (id, name) => {
    Notiflix.Confirm.show(
      'Confirm',
      ` Do You want to delete a ${name}?`,
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id))
      },
      () => {},
      {
        titleColor: '#ce6214',
        titleFontSize: '20px',
        messageColor: '#1e1e1e',
        messageFontSize: '20px',
      }
    );
  };




  return (
    contacts.length !== 0 && (
      <List>
        {filterContacts.map(({ id, name, number }) => (
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
//   onDelete: propTypes.func,
// };
