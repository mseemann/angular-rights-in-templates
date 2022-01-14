import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AfterViewChecked, Directive } from '@angular/core';
import { User } from './user';
import { provideMockStore } from '@ngrx/store/testing';

@Directive({
  selector: '[appHasPrivileges]',
})
export class HasPrivilegesMockDirective {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, HasPrivilegesMockDirective],
      providers: [
        { provide: User, useValue: new User([], true) },
        provideMockStore({ initialState: {} }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
