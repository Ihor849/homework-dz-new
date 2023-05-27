// import {useReducer } from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';
import {
  Form,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';


// const DEFAULT_CONTACTS = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = e => {
    const { name, number } = e.target;

    e.preventDefault();
    const data = {
      name: name.value,
      number: number.value,
      
    };
    
   
    if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase()
          )
        ) {
          console.log('Уже есть');
          Notiflix.Report.info(
            'INFO',
            `${data.name} already in the phonebook`
          );
          return;
        } else if (contacts.find(contact => contact.number === data.number)) {
          console.log('НОМЕР есть');
          Notiflix.Report.info(
            'INFO',
            `${data.number} already in the phonebook`
          );
          return;
        }
        Notiflix.Notify.success(
          `${data.name} This subscriber is added to the phone book`
        );
        dispatch(addContact(data))
    
  };



  return (
    <Form onSubmit={handleSubmit}>
      <BoxName>
        <Label>
          Name:
          <Input
            type="text"
            // onChange={handleChange}
            // value={name}
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
    
  
    
