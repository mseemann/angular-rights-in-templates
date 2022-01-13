import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HasPrivilegesDirective } from './has-privileges.directive';

@NgModule({
  declarations: [AppComponent, HasPrivilegesDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
