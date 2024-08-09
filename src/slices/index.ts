import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import filterReducer from './filterSlice';

export default configureStore({
  reducer: {
    card: cardReducer,
    filter: filterReducer,
  },
});