import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: { filters: '' },
  reducers: {
    findContact(state, action) {
      state.filters = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { findContact } = filterSlice.actions;
