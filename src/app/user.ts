import { Privilege } from './privilege';

export class User {
  constructor(public privileges: Privilege[], public admin = false) {}

  hasOneOfPrivilege(privilegesToCheck: Privilege[]) {
    return (
      privilegesToCheck.filter((value) => this.privileges.includes(value))
        .length > 0
    );
  }

  isAdmin() {
    return this.admin;
  }
}
