

import { Container } from 'components/Container/Container';
import { Section } from 'components/Section/Section';
import ContactForm from 'components/ContactForm/ContactFormUsereducer';
import { ContactsList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';


export default function AppHook() {

  return (
    <>
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts ">
            <ContactFilter/>
          <ContactsList/>
        </Section>
      </Container>
      
    </>
  );
}