import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './user';
import { Store } from '@ngrx/store';
import { changeAdmin } from './user.actions';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private storeUser: User | undefined;
  private onDestroy$ = new Subject<void>();

  constructor(public user: User, private store: Store<{ user: User }>) {}

  ngOnInit() {
    this.store
      .select('user')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((user) => (this.storeUser = user));
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  changeAdmin() {
    this.store.dispatch(changeAdmin({ admin: !this.storeUser?.admin }));
  }
}
