import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICard } from '../types/types';

interface IInitialState {
  loading: boolean;
  loaded: boolean;
  cards: ICard[];
  error?: string | undefined;
}

const initialState = {
  loading: false,
  loaded: false,
  cards: [],
  error: '',
};

export const fetchCards = createAsyncThunk('fetchCards', () => {
  return axios
    .get('https://api.nomoreparties.co/beatfilm-movies')
    .then((response) => response.data);
});

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    likeCard: (state:IInitialState, action) => {
      const newCards = state.cards.map((c:ICard) => {
        if (c.id === action.payload.id) {
          c.like = !c.like;
        }

        return c;
      });
      state.cards = newCards;
    },
    delCard: (state:IInitialState, action) => {
      const newCards = state.cards.filter((c) => c.id !== action.payload.id);
      state.cards = newCards;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCards.pending, (state) => {
      state.loading = true;
      state.loaded= false;
    });
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.loading = false;
      state.loaded= true;
      state.cards = action.payload;
      state.error = '';
    });
    builder.addCase(fetchCards.rejected, (state, action) => {
      state.loading = false;
      state.loaded= false;
      state.cards = [];
      state.error = action.error.message||'';
    });
  },
});

export const { likeCard, delCard } = cardSlice.actions;

export default cardSlice.reducer;