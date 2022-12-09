import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaxDetailComponent } from './pax-detail.component';

describe('PaxDetailComponent', () => {
  let component: PaxDetailComponent;
  let fixture: ComponentFixture<PaxDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaxDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaxDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
