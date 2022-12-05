import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataService } from "./../data.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminDataTableComponent } from "./ui-interface/tables/admin-data-table/admin-data-table.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [AdminComponent, SidemenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(DataService),
    ModalModule.forRoot(),
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AdminModule {}
