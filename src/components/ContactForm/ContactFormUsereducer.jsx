import {useReducer } from 'react';

import { nanoid } from 'nanoid';
import {
  Form,
  BoxName,
  BoxNumber,
  Input,
  Label,
  Button,
} from './ContactForm.styled';

const initialState ={
name: '',
number: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'name':{
      return {
        ...state, name: action.payload,
  
      };
    }
      
    case 'number':{
      return {
        ...state, number: action.payload,
  
      };
      
    }
    case "reset": {
      return initialState
    }
      
    default: return state
  }
};


export default function ContactForm({onSubmit}) {
 
  const[state, dispatch] = useReducer(reducer, initialState)
   
  const hendleChange = e => {
    const {name, value} = e.currentTarget;
    dispatch({
      type: name, 
      payload: value})
  };


  const hendleSubmit = e => {
    console.log(state);
    e.preventDefault();
  
    const contact = {id:nanoid(),...state }
   
    onSubmit(contact)
    dispatch({
    type: "reset"})
    
  };


  return (
    <Form onSubmit={hendleSubmit}>
      <BoxName>
        <Label>
          Name:
          <Input
            type="text"
            onChange={hendleChange}
            value={state.name}
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
            value={state.number}
            onChange={hendleChange}
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




