import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "@core/material/material.module";
import { ModalComponent } from "./../../components/modal/modal.component";
import { DatVeNhanhComponent } from "./../../components/dat-ve-nhanh/dat-ve-nhanh.component";
import { HeThongRapComponent } from "./../../components/he-thong-rap/he-thong-rap.component";
import { HethongrapItemsComponent } from "./../../components/he-thong-rap/hethongrap-items/hethongrap-items.component";
import { ThongTinLichChieuComponent } from "./../../components/he-thong-rap/hethongrap-items/thong-tin-lich-chieu/thong-tin-lich-chieu.component";
import { LichChieuTheoPhimComponent } from "./../../components/he-thong-rap/hethongrap-items/lich-chieu-theo-phim/lich-chieu-theo-phim.component";

@NgModule({
  declarations: [
    DatVeNhanhComponent,
    HeThongRapComponent,
    HethongrapItemsComponent,
    ThongTinLichChieuComponent,
    LichChieuTheoPhimComponent,
    ModalComponent
  ],
  exports: [DatVeNhanhComponent, HeThongRapComponent, ModalComponent],
  imports: [CommonModule, MaterialModule]
})
export class ShareComponentModule {}
