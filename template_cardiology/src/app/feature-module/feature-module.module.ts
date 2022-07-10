import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleRoutingModule } from './feature-module-routing.module';
import { FeatureModuleComponent } from './feature-module.component';
import { SharedModule } from '../shared/shared.index';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { ErrorNotFoundComponent } from './common/error-not-found/error-not-found.component';

@NgModule({
  declarations: [FeatureModuleComponent, HeaderComponent, FooterComponent, ErrorNotFoundComponent],
  imports: [CommonModule, FeatureModuleRoutingModule, SharedModule],
})
export class FeatureModuleModule {}
