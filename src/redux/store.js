import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    contacts: [],
    filter: ""
  }
})