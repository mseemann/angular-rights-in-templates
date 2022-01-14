import {
  AfterViewChecked,
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Privilege } from './privilege';
import { User } from './user';

@Directive({
  selector: '[appHasPrivileges]',
})
export class HasPrivilegesDirective implements OnInit, AfterViewChecked {
  constructor(
    private vcRef: ViewContainerRef,
    private tmpRef: TemplateRef<unknown>,
    private user: User
  ) {}

  @Input()
  appHasPrivileges: Privilege[] = [];

  @Input()
  appHasPrivilegesOrIsAdmin = false;

  ngOnInit() {}

  ngAfterViewChecked() {
    this.vcRef.clear();
    if (
      this.user.hasOneOfPrivilege(this.appHasPrivileges) ||
      (this.appHasPrivilegesOrIsAdmin && this.user.isAdmin())
    ) {
      this.vcRef.createEmbeddedView(this.tmpRef);
    }
  }
}
