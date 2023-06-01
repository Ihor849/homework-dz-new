import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState =  [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },

      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },

    updateContact(state, action) {
      console.log(state);
      console.log(action);

      const newState = state.filter(
        contact => contact.id !== action.payload.id
      );

      if (
        state.filter(
          contact =>
            contact.id !== action.payload.id &&
            (contact.name === action.payload.name ||
              contact.number === action.payload.number)
        )
      ) {
        return [...newState, action.payload];
      }
      return [...state];
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;
  
export const contactsReducer = contactsSlice.reducer;
