

export type ILogin = {
  token: string,
  user: {
  name: string,
  email: string,
  }
}

export type ICredentials  ={
  name: string,
  email: string,
  password: string,
}

export interface IUser {
  name: string | null,
  email: string | null,
}

export interface IAuthState {
  user: IUser,
  token: string | null,
  isLoggedIn: boolean,
  isRefreshing: boolean,
}
 
// export interface AsyncThunkAuthConfig {
//   state?: IAuthState,
//   rejectValue?: string,
// }
