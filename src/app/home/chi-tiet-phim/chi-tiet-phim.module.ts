import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareComponentModule } from "@core/shares/share-component.module";
import { ChiTietPhimRoutingModule } from "./chi-tiet-phim-routing.module";
import { ChiTietPhimComponent } from "./chi-tiet-phim.component";

@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [CommonModule, ChiTietPhimRoutingModule, ShareComponentModule]
})
export class ChiTietPhimModule {}
