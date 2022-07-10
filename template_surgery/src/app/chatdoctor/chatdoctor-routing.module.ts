import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatdoctorComponent } from './chatdoctor.component';
const routes: Routes = [
  {
    path: '',
    component: ChatdoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChatdoctorRoutingModule { }
