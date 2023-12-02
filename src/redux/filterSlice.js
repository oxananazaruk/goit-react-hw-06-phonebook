import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    findContact(state, action) {
      state.filter = action.payload;
    }, 
  },
});

export const filterReducer = filterSlice.reducer;
export const { findContact } = filterSlice.actions;