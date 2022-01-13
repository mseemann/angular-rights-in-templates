import { Privilege } from './privilege';

export class User {
  hasOneOfPrivilege(appHasPrivileges: Privilege[]) {
    return true;
  }

  isAdmin() {
    return false;
  }
}
