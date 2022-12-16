import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkFilterHotelComponent } from './ttk-filter-hotel.component';

describe('TtkFilterHotelComponent', () => {
  let component: TtkFilterHotelComponent;
  let fixture: ComponentFixture<TtkFilterHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkFilterHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkFilterHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
