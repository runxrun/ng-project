import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkSignupComponent } from './ttk-signup.component';

describe('TtkSignupComponent', () => {
  let component: TtkSignupComponent;
  let fixture: ComponentFixture<TtkSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
