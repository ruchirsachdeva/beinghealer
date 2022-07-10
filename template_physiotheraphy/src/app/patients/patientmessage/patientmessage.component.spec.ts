import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientmessageComponent } from './patientmessage.component';

describe('PatientmessageComponent', () => {
  let component: PatientmessageComponent;
  let fixture: ComponentFixture<PatientmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
