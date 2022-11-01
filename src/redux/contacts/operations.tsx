import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IItem } from 'types/typers';

export const fetchContacts = createAsyncThunk<
  IItem[] | [],
  undefined,
  { rejectValue: string }
>('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<IItem[] | []>('/contacts');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});

export const addNewContact = createAsyncThunk<
  IItem,
  Pick<IItem, 'name' | 'number'>,
  { rejectValue: string }
>('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post<IItem>('/contacts', contact);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});

export const deleteContact = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});
