import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLanguagesComponent } from './multi-languages.component';

describe('MultiLanguagesComponent', () => {
  let component: MultiLanguagesComponent;
  let fixture: ComponentFixture<MultiLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLanguagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
