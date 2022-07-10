import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientchatComponent } from './patientchat.component';
const routes: Routes = [
  {
    path : '',
    component : PatientchatComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientchatRoutingModule { }
