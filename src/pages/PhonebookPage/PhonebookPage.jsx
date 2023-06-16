import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactList/ContactList';
import Container from 'components/Container/Container';

import { Section } from 'components/Section/Section';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getContactsList } from 'redux/selectors';

const PhonebookPage = () => {
  const contacts = useSelector(getContactsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
    
  }, [ dispatch])

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts ">
        {/* <>
            {contacts.length > 4 && <ContactFilter />}
            {contacts.length !== 0 && <ContactsList />} 
          </> */}
          <ContactFilter />
          <ContactsList />
      </Section>
    </Container>
  );
};
export default PhonebookPage;
