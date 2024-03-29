import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    add: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    delete: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});
export const { add: addContactAction, delete: deleteContactAction } =
  contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
