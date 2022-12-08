import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNoAuthComponent } from './login-no-auth.component';

describe('LoginNoAuthComponent', () => {
  let component: LoginNoAuthComponent;
  let fixture: ComponentFixture<LoginNoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
