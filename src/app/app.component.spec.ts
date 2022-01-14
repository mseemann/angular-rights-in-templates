import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AfterViewChecked, Directive } from '@angular/core';
import { User } from './user';

@Directive({
  selector: '[appHasPrivileges]',
})
export class HasPrivilegesMockDirective {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HasPrivilegesMockDirective],
      providers: [{ provide: User, useValue: new User([], true) }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
