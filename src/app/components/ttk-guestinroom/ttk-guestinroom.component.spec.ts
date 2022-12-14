import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkGuestinroomComponent } from './ttk-guestinroom.component';

describe('TtkGuestinroomComponent', () => {
  let component: TtkGuestinroomComponent;
  let fixture: ComponentFixture<TtkGuestinroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkGuestinroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkGuestinroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
