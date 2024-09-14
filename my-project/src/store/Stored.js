// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../store/Slices/AuthSlise'; // Import the reducer from countSlice

export const store = configureStore({
  reducer: {
    count: countReducer, // Use the slice name as the key
  },
});
