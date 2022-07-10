import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsChatComponent } from './patients-chat.component';
const routes: Routes = [
  {
    path : '',
    component : PatientsChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsChatRoutingModule { }
