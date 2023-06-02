import { createStore } from "redux";
import { devToolsEnhancer } from '@redux-devtools/extension';

const  enchancer = devToolsEnhancer();

const initialState= {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: {
    filter: '',
  },
  
};
const rootReducer=(state=initialState, action)=>{
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case "contacts/addContacts": {
      console.log("ADD");
      // Потрібно повернути новий об'єкт стану
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        contacts: [
          // в якому є всі існуючі завдання
          ...state.contacts,
          // та об'єкт нового завдання
          action.payload,
        ],
      };
    }
    case "contacts/deleteContacts": {
      console.log("delete");
      // Потрібно повернути новий об'єкт стану
      
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        contacts: [
          // в якому є всі існуючі завдання
          ...state.contacts.filter(contact => contact.id !== action.payload)
          // ...state.contacts,
          // та об'єкт нового завдання
          // action.payload,
        ],
      };
    }
    case "filter/filterContacts": {
      console.log("filter");
      // Потрібно повернути новий об'єкт стану
      
      return {
        // в якому є всі дані існуючого стану
        ...state,
        // та новий масив задач
        contacts: [
          // в якому є всі існуючі завдання
          
          ...state.contacts.filter(contact=>contact.name.toLowerCase().includes(action.payload))
      ]}
    }
    default:
      // Кожен редюсер отримує всі екшени, відправлені в стор.
      // Якщо редюсер не повинен обробляти якийсь тип екшену,
      // необхідно повернути наявний стан без змін.
      return state;
  }
};


export const store = createStore(rootReducer,enchancer);
