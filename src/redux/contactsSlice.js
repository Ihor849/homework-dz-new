import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import Notiflix from "notiflix";

const initialState =  {allContacts:[
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
toggleBtn:false
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.allContacts.push(action.payload);
      },
    },

    deleteContact(state, action) {
      
      state.allContacts = state.allContacts.filter(contact => contact.id !== action.payload);
      
    },

    

    editContact:{

      reducer(state, action) {
        console.log(action.payload);

        const { id} = action.payload;  
 
        const contactToUpdate  = state.allContacts.find(contact => contact.id === action.payload.id)
        const allExeptUpdated = state.allContacts.filter(contact => contact.id !== id);
        state.contactsList = [...allExeptUpdated, action.payload]

        Notiflix.Notify.success(`Contact ${contactToUpdate.name} was updated.`);

      }
      },
  }
});


const persistConfig = {
  key: 'localContacts',
  version: 1,
  storage,
  // whitelist:["contacts"],
}

export const { addContact, deleteContact,updateContact } = contactsSlice.actions;
  
export const contactsReducer = contactsSlice.reducer;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);