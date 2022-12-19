import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPaxdetailComponent } from './hotel-paxdetail.component';

describe('HotelPaxdetailComponent', () => {
  let component: HotelPaxdetailComponent;
  let fixture: ComponentFixture<HotelPaxdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPaxdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPaxdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
