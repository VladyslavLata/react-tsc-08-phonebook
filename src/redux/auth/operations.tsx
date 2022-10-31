import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILogin, ICredentials, IState, IUser } from 'types/typers';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const addAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk<
  ILogin,
  ICredentials,
  { rejectValue: string }
>('auth/register', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<ILogin>('/users/signup', credentials);

    addAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});

export const login = createAsyncThunk<
  ILogin,
  Pick<ICredentials, 'email' | 'password'>,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post<ILogin>('/users/login', credentials);
    addAuthHeader(data.token);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});

export const logout = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
    return;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});

export const refreshUser = createAsyncThunk<
  IUser,
  void,
  { state: IState; rejectValue: string }
>('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;

  if (persistToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }
  try {
    addAuthHeader(persistToken);
    const { data } = await axios.get<IUser>('/users/current');
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Unknown error!');
  }
});
