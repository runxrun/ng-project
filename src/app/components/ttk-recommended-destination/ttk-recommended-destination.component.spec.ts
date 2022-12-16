import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkRecommendedDestinationComponent } from './ttk-recommended-destination.component';

describe('TtkRecommendedDestinationComponent', () => {
  let component: TtkRecommendedDestinationComponent;
  let fixture: ComponentFixture<TtkRecommendedDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkRecommendedDestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkRecommendedDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
