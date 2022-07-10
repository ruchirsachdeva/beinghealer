import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorchangepasswordComponent } from './doctorchangepassword.component';

const routes: Routes = [
  {
    path : '',
    component : DoctorchangepasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorchangepasswordRoutingModule { }
