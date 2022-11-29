import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureModuleModule } from './feature-module/feature-module.module';
import { SharedModule } from './shared/module/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FeatureModuleModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}