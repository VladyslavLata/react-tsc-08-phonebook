import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IItem } from 'types/typers';

export const fetchContacts = createAsyncThunk<IItem[] | [], undefined,  { rejectValue: string }>(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get<IItem[]| [] >('/contacts');
      return data;
    } catch (error) {
     if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const newContact = await axios.post('/contacts', contact);
      return newContact.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
