import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNoAuthComponent } from './footer-no-auth.component';

describe('FooterNoAuthComponent', () => {
  let component: FooterNoAuthComponent;
  let fixture: ComponentFixture<FooterNoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterNoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
