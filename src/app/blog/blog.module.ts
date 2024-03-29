import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FormsModule} from "@angular/forms";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRoutingModule, FormsModule, Ng2SearchPipeModule, InfiniteScrollModule],
})
export class BlogModule {}
