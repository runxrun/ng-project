import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkMapHotelComponent } from './ttk-map-hotel.component';

describe('TtkMapHotelComponent', () => {
  let component: TtkMapHotelComponent;
  let fixture: ComponentFixture<TtkMapHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkMapHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkMapHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
