import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorregisterComponent } from './doctorregister.component';
const routes: Routes = [
  {
    path : '',
    component : DoctorregisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorregisterRoutingModule { }
