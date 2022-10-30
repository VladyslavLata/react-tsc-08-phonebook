import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, login, logout, refreshUser } from './operations';
import { IUser, IAuthState } from "types/typers";

// interface IUser {
//   name: string | null;
//   email: string | null;
// }

// interface IAuthState {
//   user: IUser;
//   token: string | null;
//   isLoggedIn: boolean;
//   isRefreshing: boolean;
// }

const initialState: IAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<{ user: IUser; token: string }>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ user: IUser; token: string }>) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      )
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
  reducers: {},
});

const authPersistConfig = {
  key: 'authToken',
  storage,
  whitelist: ['token'],
};

export const authPersistReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
