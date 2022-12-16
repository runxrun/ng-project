import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkSortingHotelComponent } from './ttk-sorting-hotel.component';

describe('TtkSortingHotelComponent', () => {
  let component: TtkSortingHotelComponent;
  let fixture: ComponentFixture<TtkSortingHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkSortingHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkSortingHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
