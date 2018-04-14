import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCheckComponent } from './registered-check.component';

describe('LoginComponent', () => {
  let component: RegisteredCheckComponent;
  let fixture: ComponentFixture<RegisteredCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
