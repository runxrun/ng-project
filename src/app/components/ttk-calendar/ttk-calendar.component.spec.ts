import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkCalendarComponent } from './ttk-calendar.component';

describe('TtkCalendarComponent', () => {
  let component: TtkCalendarComponent;
  let fixture: ComponentFixture<TtkCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
