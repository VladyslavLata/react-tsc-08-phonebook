import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILogin, ICredentials  } from "types/typers";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk <ILogin , ICredentials, { rejectValue: string} >(
  'auth/register',
  async (credentials , thunkAPI) => {
    try {
      const {data} = await axios.post<ILogin>('/users/signup', credentials);
      addAuthHeader(data.token);
      return data;
    } catch (error) {

      // if (error instanceof Error) {
      //   return thunkAPI.rejectWithValue(error.message);
      // }
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      addAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      addAuthHeader(persistToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
