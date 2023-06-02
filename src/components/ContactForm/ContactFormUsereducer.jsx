import { nanoid } from 'nanoid';
import {
  // FormBlock,
  Form,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';

export default function ContactForm({onSubmit}) {
  const hendleSubmit = e => {
    e.preventDefault();
   
    const newContact = {
      id:nanoid(),
      name:e.target.elements.name.value,
      number: e.target.elements.number.value
    }
    onSubmit(newContact)
    
  };


  return (
    <Form onSubmit={hendleSubmit}>
      <BoxName>
        <Label>
          Name:
          <Input
            type="text"
            // onChange={hendleChange}
            // value={state.name}
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
            // onChange={hendleChange}
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            // required
          />
        </Label>
      </BoxNumber>
      <Button type="submit">
        Add contact
      </Button>
    </Form>
  );
}



// ContactForm.protoTypes = {
//   onSubmit: propTypes.func.isRequired,
//   contacts: propTypes.arrayOf(propTypes.object).isRequired,
// };
