import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nameFilter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state, action) {
      state.nameFilter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
