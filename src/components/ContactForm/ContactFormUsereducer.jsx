// import {useReducer } from 'react';

import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';
import { getContactsList } from 'redux/selectors';
import {
  Form,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';



export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsList);
  
  const handleSubmit = e => {
    console.log(e);
    const { name, number } = e.target;
    console.log(name.value);
    e.preventDefault();
    const data = {
      name: name.value,
      number: number.value,
      id: nanoid()
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      console.log('Уже есть');
      Notiflix.Report.info('INFO', `${data.name} already in the phonebook`);
      return;
    } else if (contacts.find(contact => contact.number === data.number)) {
      console.log('НОМЕР есть');
      Notiflix.Report.info('INFO', `${data.number} already in the phonebook`);
      return;
    }
    Notiflix.Notify.success(
      `${data.name} This subscriber is added to the phone book`
    );
    
    console.log(data);
    dispatch(addContact(data));
    // name.value="";
    // number.value="";
    e.target.reset();

  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <BoxName>
        <Label>
          Name:
          <Input
            type="text"
            // onChange={handleChange}
            // value={e=> e.target.name}
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            // required
          />
        </Label>
      </BoxName>
      <BoxNumber>
        <Label>
          Number:
          <Input
            type="tel"
            // value={state.number}
            // onChange={handleChange}
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </Label>
      </BoxNumber>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
