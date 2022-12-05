import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogGridRoutingModule } from './blog-grid-routing.module';
import { BlogGridComponent } from './blog-grid.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [BlogGridComponent],
  imports: [CommonModule, BlogGridRoutingModule, FormsModule, Ng2SearchPipeModule],
})
export class BlogGridModule {}
