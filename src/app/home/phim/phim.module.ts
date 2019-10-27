import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShareComponentModule } from "@core/shares/share-component.module";
import { PhimRoutingModule } from "./phim-routing.module";
import { PhimComponent } from "./phim.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";

@NgModule({
  declarations: [PhimComponent, ItemPhimComponent],
  imports: [CommonModule, PhimRoutingModule, ShareComponentModule]
})
export class PhimModule {}
