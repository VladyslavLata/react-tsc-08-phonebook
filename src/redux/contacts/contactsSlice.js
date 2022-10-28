import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteContact } from './operations';
import { logout } from 'redux/auth/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: handleRejected,
    [addNewContact.pending]: handlePending,
    [addNewContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.unshift(action.payload);
    },
    [addNewContact.rejected]: handleRejected,
    [deleteContact.fulfilled]: (state, action) => {
      state.error = null;
      const contactIndex = state.items.findIndex(
        item => item.id === action.payload
      );
      state.items.splice(contactIndex, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [logout.fulfilled](state) {
      state.items = [];
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filter } = contactsSlice.actions;
