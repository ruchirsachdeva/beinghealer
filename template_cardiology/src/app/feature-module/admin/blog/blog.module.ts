import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { blogRoutingModule } from './blog-routing.module';
import { SharedModule } from 'src/app/shared/shared.index';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, SharedModule, blogRoutingModule],
})
export class BlogModule {}
