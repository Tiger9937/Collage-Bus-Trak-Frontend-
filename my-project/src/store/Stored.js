// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlise'; // Update the path if needed

export const store = configureStore({
  reducer: {
    auth: authReducer, // Use 'auth' as the key, matching your component's expectation
  },
});
