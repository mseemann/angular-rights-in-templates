import { createAction, props } from '@ngrx/store';
import { Privilege } from './privilege';

export const changeAdmin = createAction(
  '[User] changeAdmin',
  props<{ admin: boolean }>()
);
export const changePrivileges = createAction(
  '[User] changePrivileges',
  props<{ privileges: Privilege[] }>()
);
