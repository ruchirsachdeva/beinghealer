import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorchangepasswordComponent } from './doctorchangepassword.component';

describe('DoctorchangepasswordComponent', () => {
  let component: DoctorchangepasswordComponent;
  let fixture: ComponentFixture<DoctorchangepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorchangepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorchangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
