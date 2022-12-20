import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestInRoomComponent } from './guest-in-room.component';

describe('GuestInRoomComponent', () => {
  let component: GuestInRoomComponent;
  let fixture: ComponentFixture<GuestInRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestInRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestInRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
