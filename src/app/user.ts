import { Privilege } from './privilege';

export class User {
  constructor(private privileges: Privilege[], private admin: boolean) {}

  setAdmin(admin: boolean) {
    this.admin = admin;
  }

  setPrivileges(privileges: Privilege[]) {
    this.privileges = privileges;
  }

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
