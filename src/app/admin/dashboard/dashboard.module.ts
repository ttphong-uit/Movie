import { ModalQuanLyThanhVienComponent } from "./modal-quan-ly-thanh-vien/modal-quan-ly-thanh-vien.component";
import { ModalPhimComponent } from "./modal-phim/modal-phim.component";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { MaterialModule } from "@core/material/material.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { QuanLyThanhVienComponent } from "./quan-ly-thanh-vien/quan-ly-thanh-vien.component";
import { QuanLyPhimComponent } from "./quan-ly-phim/quan-ly-phim.component";
import { ShareComponentModule } from "@core/shares/share-component.module";
@NgModule({
  declarations: [
    DashboardComponent,
    QuanLyThanhVienComponent,
    QuanLyPhimComponent,
    ModalPhimComponent,
    ModalQuanLyThanhVienComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ShareComponentModule,
    FormsModule
  ]
})
export class DashboardModule {}
