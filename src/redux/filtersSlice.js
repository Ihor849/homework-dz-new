import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: 'dffg' },
  reducers: {
    filterContacts(state, action ) {
      state.filter = action.payload;
      console.log(state);
      console.log(action.payload);
      console.log(state.filter);
      // return state=action.payload

      // console.log(state.filter);
      // if (payload) {
      // // console.log(state.contacts);
      //   return state.contacts.filter(
      //     contact =>contact.name.toLowerCase().includes(payload));
        
      // } 
      console.log(state.filter);
      // return (state.filter = action.payload);
    },
    
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const getFilterValue = state => state.filter.value;