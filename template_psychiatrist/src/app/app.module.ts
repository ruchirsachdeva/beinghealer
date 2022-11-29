import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { FooterComponent } from "./common/footer/footer.component";

import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataService } from "./data.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ToastrModule } from "ngx-toastr";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { LinkService } from "./link.service";
import { PaginationComponent } from './common/pagination/pagination.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, PaginationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent],
})
export class AppModule {}
