import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberLinksComponent } from './member-links.component';

describe('MemberLinksComponent', () => {
  let component: MemberLinksComponent;
  let fixture: ComponentFixture<MemberLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
