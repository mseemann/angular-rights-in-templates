import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HasPrivilegesDirective } from './has-privileges.directive';
import { User } from './user';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HasPrivilegesDirective],
  imports: [BrowserModule, FormsModule],
  providers: [{ provide: User, useValue: new User(['VIEW_OVERVIEW'], false) }],
  bootstrap: [AppComponent],
})
export class AppModule {}
