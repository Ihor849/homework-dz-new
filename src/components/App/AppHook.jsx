import useLocalStorage from '../hooks/useLocalStorage'
import Notiflix from 'notiflix';
import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactFormUsereducer';
import { ContactsList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from 'redux/filtersSlice';
import { filtersReducer } from 'redux/filtersSlice';


// const LS_CONTACTS_KEY="Contacts"
// const DEFAULT_CONTACTS =[
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]

export default function AppHook() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);

  // console.log(filter);


  // const onFilter = e => {
  //   const contact=e.target.value;
  //     dispatch(setContactsFilter(contact))
    
  // };

  // const onFilterContacts = () => {
  //   // let contactsFilter = [];

  //   if (filter) {
  //     filters.filter(
  //       contact =>
  //         contact.name.includes(filter) ||
  //         contact.name.toLowerCase().includes(filter)
  //     );
  //   } else {
  //     return filters;
  //   }
  //   dispatch(setContactsFilter(filters))
  //   // return contactsFilter;
  // };

  

  
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts ">
          
            <ContactFilter
              // filter={filter}
              // onFilter={setContactsFilter}
              // dis={filters.length <= 4}
            />
          

          <ContactsList 
          // contacts={onFilterContacts()}  
          
           />
        </Section>
      </Container>
      
    </>
  );
}