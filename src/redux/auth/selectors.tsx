import { IState } from 'types/typers';

export const selectUser = (state: IState) => state.auth.user;
export const selectToken = (state: IState) => state.auth.token;
export const selectIsLoggedIn = (state: IState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: IState) => state.auth.isRefreshing;
