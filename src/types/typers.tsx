export interface ILogin {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export interface ICredentials {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  name: string | null;
  email: string | null;
}

export interface IItem {
  id: string;
  name: string;
  number: string;
}

export interface IAuthState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface IContactsState {
  items: IItem[];
  isLoading: boolean;
  error: string | null;
  filter: string;
}

export interface IState {
  auth: IAuthState;
  contacts: IContactsState;
}

