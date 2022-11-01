import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact, deleteContact } from './operations';
import { logout } from 'redux/auth/operations';
import { IContactsState, IItem } from 'types/typers';

const handlePending = (state: IContactsState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: IContactsState,
  action: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  if (action.payload) {
    state.error = action.payload;
  }
};

const initialState: IContactsState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<IItem[] | []>) => {
          state.isLoading = false;
          state.items = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addNewContact.pending, handlePending)
      .addCase(
        addNewContact.fulfilled,
        (state, action: PayloadAction<IItem>) => {
          state.isLoading = false;
          state.error = null;
          state.items.unshift(action.payload);
        }
      )
      .addCase(addNewContact.rejected, handleRejected)
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.error = null;
          const contactIndex = state.items.findIndex(
            item => item.id === action.payload
          );
          state.items.splice(contactIndex, 1);
        }
      )
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logout.fulfilled, state => {
        state.items = [];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filter } = contactsSlice.actions;
