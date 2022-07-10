import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientchatComponent } from './patientchat.component';

describe('PatientchatComponent', () => {
  let component: PatientchatComponent;
  let fixture: ComponentFixture<PatientchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
