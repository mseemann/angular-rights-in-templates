import { Privilege } from './privilege';

export class User {
  constructor(private privileges: Privilege[], private admin = false) {}

  hasOneOfPrivilege(privilegesToCheck: Privilege[]) {
    return (
      this.privileges.filter((value) => privilegesToCheck.includes(value))
        .length > 0
    );
  }

  isAdmin() {
    return this.admin;
  }
}
