import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { SpecialitiesComponent } from './specialities.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [AddComponent, ViewComponent, SpecialitiesComponent],
  imports: [CommonModule, SpecialitiesRoutingModule, SharedModule],
})
export class SpecialitiesModule {}
