import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ShareComponentModule } from "@core/shares/share-component.module";
import { TrangChuRoutingModule } from "./trang-chu-routing.module";
import { TrangChuComponent } from "./trang-chu.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DanhSachPhimComponent } from "./danh-sach-phim/danh-sach-phim.component";
import { ItemPhimComponent } from "./danh-sach-phim/item-phim/item-phim.component";
@NgModule({
  declarations: [
    TrangChuComponent,
    ItemPhimComponent,
    CarouselComponent,
    DanhSachPhimComponent
  ],
  imports: [
    CommonModule,
    TrangChuRoutingModule,
    FormsModule,
    ShareComponentModule
  ]
})
export class TrangChuModule {}
