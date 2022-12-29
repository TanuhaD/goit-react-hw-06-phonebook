import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  phonebook: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContactAction: {
      reducer(state, action) {
        state.phonebook.push(action.payload);
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
      return {
        phonebook: state.phonebook.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

export const { addContactAction, deleteContactAction } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
