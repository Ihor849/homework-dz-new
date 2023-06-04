// import propTypes from 'prop-types';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { Item, Button, Wrapper, Wrapname } from './ContactsItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsFilter, getContactsList } from 'redux/selectors';
import { deleteContact, editContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [nick, setNick] = useState(name);
  const [phone, setPhone] = useState(number);

  const handleEdit = () => {
    setIsEdit(prev => !prev);

    if (isEdit) {
      const updatedContact = {
        id,
        name: nick,
        number: phone,
      };
      console.log('updatedContact', updatedContact);
      const contactToUpdate = contacts.find(
        contact => contact.id === updatedContact.id
      );
      console.log('contactToUpdate', contactToUpdate);

      const allExeptUpdated = contacts.filter(
        contact => contact.id !== contactToUpdate.id
      );
      console.log('allExeptUpdated', allExeptUpdated);
      if (
        allExeptUpdated.find(
          contact =>
            contact.name.toLowerCase() === updatedContact.name.toLowerCase()
        )
      ) {
        Notiflix.Notify.failure(
          `${updatedContact.name} is already in contacts.`
        );
        return;
      } else if (
        allExeptUpdated.find(
          contact => contact.number.toString() === updatedContact.number
        )
      ) {
        Notiflix.Notify.failure(
          `${updatedContact.number} is already in contacts.`
        );
        return;
      }

      // confirmUpdate(`Are you sure you want to update ${name}?`, name)
      //   .then(() => {
      //     dispatch(editContact(updatedContact));
      //   })
      //   .catch(() => {
      //     // Handle cancellation or rejection
      //   });
    }
  };

  const handleChange = e => {
    console.log(e.currentTarget);
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'nick':
        setNick(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const onDelete = (id, name) => {
    Notiflix.Confirm.show(
      'Confirm',
      ` Do You want to delete a ${name}?`,
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id));
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
    <Item key={id}>
      {isEdit ? (
        <Wrapper>
          <Wrapname>
            <label htmlFor="editName">
              Name
              <input
                type="text"
                name="nick"
                value={nick}
                onChange={handleChange}
              />
            </label>
          </Wrapname>
          <Wrapname>
            <label htmlFor="editNumber">
              Number
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </label>
          </Wrapname>
        </Wrapper>
      ) : (
        <>
          <span>{name}</span>
          <span>{number}</span>
        </>
      )}

      <Button type="button" onClick={handleEdit}>
        {isEdit ? 'Save contact' : 'Edit contact'}
      </Button>
      <Button type="button" onClick={() => onDelete(id, name)}>
        Delete
      </Button>
    </Item>
  );
};
