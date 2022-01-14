import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HasPrivilegesDirective } from './has-privileges.directive';
import { User } from './user';
import { FormsModule } from '@angular/forms';
import { HasPrivilegesWithStoreDirective } from './has-privileges-with-store.directive';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HasPrivilegesDirective,
    HasPrivilegesWithStoreDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [{ provide: User, useValue: new User(['VIEW_OVERVIEW'], false) }],
  bootstrap: [AppComponent],
})
export class AppModule {}
