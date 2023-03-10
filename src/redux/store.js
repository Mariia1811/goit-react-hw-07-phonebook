import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    [contactSlice.name]: contactSlice.reducer,
    // contacts: contactsReducer,
  },
});
