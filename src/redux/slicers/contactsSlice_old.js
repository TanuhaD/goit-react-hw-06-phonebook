import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContactAction(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
