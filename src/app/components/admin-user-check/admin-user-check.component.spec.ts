import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserCheckComponent } from './admin-user-check.component';

describe('AdminUserCheckComponent', () => {
  let component: AdminUserCheckComponent;
  let fixture: ComponentFixture<AdminUserCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
