import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNoAuthComponent } from './sidebar-no-auth.component';

describe('SidebarNoAuthComponent', () => {
  let component: SidebarNoAuthComponent;
  let fixture: ComponentFixture<SidebarNoAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarNoAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarNoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
