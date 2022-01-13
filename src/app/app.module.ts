import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HasPrivilegesDirective } from './has-privileges.directive';
import { User } from './user';

@NgModule({
  declarations: [AppComponent, HasPrivilegesDirective],
  imports: [BrowserModule],
  providers: [{ provide: User, useValue: new User(['VIEW_OVERVIEW'], false) }],
  bootstrap: [AppComponent],
})
export class AppModule {}
