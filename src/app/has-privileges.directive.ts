import {
  AfterViewChecked,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Privilege } from './privilege';
import { User } from './user';

@Directive({
  selector: '[appHasPrivileges]',
})
export class HasPrivilegesDirective implements AfterViewChecked {
  constructor(
    private vcRef: ViewContainerRef,
    private tmpRef: TemplateRef<unknown>,
    private user: User
  ) {}

  @Input()
  appHasPrivileges: Privilege[] | undefined = [];

  @Input()
  appHasPrivilegesOrIsAdmin = false;

  ngAfterViewChecked() {
    this.vcRef.clear();
    if (
      this.user.hasOneOfPrivilege(this.appHasPrivileges ?? []) ||
      (this.appHasPrivilegesOrIsAdmin && this.user.isAdmin())
    ) {
      this.vcRef.createEmbeddedView(this.tmpRef);
    }
  }
}
