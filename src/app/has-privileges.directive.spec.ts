import { HasPrivilegesDirective } from './has-privileges.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { User } from './user';
import { By } from '@angular/platform-browser';
import { Privilege } from './privilege';

@Component({
  selector: 'test',
  template: ` <div *appHasPrivileges="privileges; orIsAdmin: isAdmin">
    <h1>should be visible</h1>
  </div>`,
})
class TestComponent {
  public privileges: Privilege[] | undefined = [];
  public isAdmin = false;
}

describe('HasPrivilegesDirective', () => {
  let user: User;
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;

  beforeEach(async () => {
    user = new User([], true);
    await TestBed.configureTestingModule({
      declarations: [HasPrivilegesDirective, TestComponent],
      providers: [{ provide: User, useFactory: () => user }],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
  });

  it('should include the children if the user has the privileges', () => {
    testComponent.privileges = ['VIEW_OVERVIEW'];
    user.setAdmin(false);
    user.setPrivileges(['VIEW_OVERVIEW']);

    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toEqual('should be visible');
  });

  it('should not include the children if the user has not right the privileges', () => {
    testComponent.privileges = [];
    user.setAdmin(false);
    user.setPrivileges([]);

    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeNull();
  });

  it('should include the children if the user is admin regardless his privileges', () => {
    testComponent.privileges = ['VIEW_OVERVIEW'];
    testComponent.isAdmin = true;
    user.setPrivileges([]);
    user.setAdmin(true);

    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.textContent).toEqual('should be visible');
  });

  it('should not throw runtime exceptions if privileges is not set.', () => {
    testComponent.privileges = undefined;
    user.setAdmin(false);
    user.setPrivileges([]);

    fixture.detectChanges();

    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1).toBeNull();
  });
});
