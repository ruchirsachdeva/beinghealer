import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientmessageComponent } from './patientmessage.component';

const routes: Routes = [
  {
    path : '',
    component : PatientmessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientmessageRoutingModule { }
