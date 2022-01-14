import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './user';
import { Subject, takeUntil } from 'rxjs';
import { Privilege } from './privilege';

@Directive({
  selector: '[appHasPrivilegesWithStore]',
})
export class HasPrivilegesWithStoreDirective implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>();

  constructor(
    private vcRef: ViewContainerRef,
    private tmpRef: TemplateRef<unknown>,
    private store: Store<{ user: User }>
  ) {}

  @Input()
  appHasPrivilegesWithStore: Privilege[] | undefined = [];

  @Input()
  appHasPrivilegesWithStoreOrIsAdmin = false;

  ngOnInit() {
    this.store
      .select('user')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((user) => {
        this.vcRef.clear();
        if (
          user.hasOneOfPrivilege(this.appHasPrivilegesWithStore ?? []) ||
          (this.appHasPrivilegesWithStoreOrIsAdmin && user.isAdmin())
        ) {
          this.vcRef.createEmbeddedView(this.tmpRef);
        }
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
