import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsChatComponent } from './patients-chat.component';

describe('PatientsChatComponent', () => {
  let component: PatientsChatComponent;
  let fixture: ComponentFixture<PatientsChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
