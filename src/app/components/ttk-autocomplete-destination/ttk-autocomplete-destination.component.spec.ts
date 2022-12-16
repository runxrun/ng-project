import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtkAutocompleteDestinationComponent } from './ttk-autocomplete-destination.component';

describe('TtkAutocompleteDestinationComponent', () => {
  let component: TtkAutocompleteDestinationComponent;
  let fixture: ComponentFixture<TtkAutocompleteDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtkAutocompleteDestinationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtkAutocompleteDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
