import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxTagsInputModule } from 'ngx-tags-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
	  NgxDropzoneModule,
    NgxTagsInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingsModule { }
