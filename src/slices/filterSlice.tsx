import { createSlice } from '@reduxjs/toolkit';

const initialState = { likeFilter: false };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleLikeFilter: (state, action) => {
      state.likeFilter = action.payload;
    },
  },
});

export const { toggleLikeFilter } = filterSlice.actions;

export default filterSlice.reducer;
