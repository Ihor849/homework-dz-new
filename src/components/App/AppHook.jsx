// import React, { Component } from 'react';
// import { useState } from 'react';
// import useLocalStorage from '../hooks/useLocalStorage'
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsList } from 'redux/selectors';
// import { addContact } from 'redux/contactsSlice';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactFormUsereducer';
import { GlobalStyle } from '../../style/GlobalStyle';

// const LS_CONTACTS_KEY="Contacts"
// const DEFAULT_CONTACTS =[
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

export default function AppHook() {
  const contacts = useSelector(getContactsList)
  const  dispatch = useDispatch();
  // console.log();
  // const [contacts, setContacts] = useLocalStorage(LS_CONTACTS_KEY, DEFAULT_CONTACTS)
  // const [filter, setFilter] = useLocalStorage( "filter", []);
 
 

  const addContact = ({ id, name, number }) => {
    const newContact = { id, name, number };
    console.log(newContact);

    // if (
    //   contacts.find(
    //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    //   )
    // ) {
    //   console.log('Уже есть');
    //   Notiflix.Report.info(
    //     'INFO',
    //     `${newContact.name} already in the phonebook`
    //   );
    //   return;
    // } else if (contacts.find(contact => contact.number === newContact.number)) {
    //   console.log('НОМЕР есть');
    //   Notiflix.Report.info(
    //     'INFO',
    //     `${newContact.number} already in the phonebook`
    //   );
    //   return;
    // }
    // Notiflix.Notify.success(
    //   `${newContact.name} This subscriber is added to the phone book`
    // );
    dispatch({
      type:"contacts/addContacts",
      payload: newContact

    })
    
    
  };
  

  const onFilter = e => {
    console.log(e.target.value);

    dispatch({
      type:"filter/filterContacts",
      payload:e.target.value
    })
  };

  // const onFilterContacts = () => {
  //   let contactsFilter = [];

  //   if (filter) {
  //     contactsFilter = contacts.filter(
  //       contact =>
  //         contact.name.includes(filter) ||
  //         contact.name.toLowerCase().includes(filter)
  //     );
  //   } else {
  //     return contacts;
  //   }

  //   return contactsFilter;
  // };

  // const handleEditContact= (editContact)=>{
  //   setContacts(prevContacts=> prevContacts.map(contact =>{
  //     if(contact.id===editContact.id){
  //       return editContact;
  //     }
  //     return contact;
  //   }))
    
  // }

  // const onDelete = (id, name) => {
   
  //   Notiflix.Confirm.show(
  //     'Confirm',
  //     ` Do You want to delete a ${name}?`,
  //     'Yes',
  //     'No',
  //     () => {
  //       contacts.filter(contact => contact.id !== id);

  //     },
  //     () => {},
  //     {
  //       titleColor: '#ce6214',
  //       titleFontSize: '20px',
  //       messageColor: '#1e1e1e',
  //       messageFontSize: '20px',
  //     }
  //   );
  // };
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section title="Contacts ">
          {contacts.length !== 0 && 
          (
            <ContactFilter
              // filter={filter}
              onFilter={onFilter}
              // dis={contacts.length <= 4}
            />
          )}

          <ContactsList/>
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
}