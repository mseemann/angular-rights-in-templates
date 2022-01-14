import { createReducer, on } from '@ngrx/store';
import { User } from './user';
import { changeAdmin, changePrivileges } from './user.actions';

export const initialState: User = new User([], false);

const _userReducer = createReducer<User>(
  initialState,
  on(changeAdmin, (state, { admin }) => new User(state.getPrivileges(), admin)),
  on(
    changePrivileges,
    (state, { privileges }) => new User(privileges, state.isAdmin())
  )
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}
