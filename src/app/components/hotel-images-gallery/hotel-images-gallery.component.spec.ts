import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelImagesGalleryComponent } from './hotel-images-gallery.component';

describe('HotelImagesGalleryComponent', () => {
  let component: HotelImagesGalleryComponent;
  let fixture: ComponentFixture<HotelImagesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelImagesGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelImagesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
