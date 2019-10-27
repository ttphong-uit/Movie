import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DatGheRoutingModule } from "./dat-ghe-routing.module";
import { DatGheComponent } from "./dat-ghe.component";
import { ListGheComponent } from "./list-ghe/list-ghe.component";
import { ItemGheComponent } from "./list-ghe/item-ghe/item-ghe.component";
import { BillComponent } from "./bill/bill.component";
import { CountdownModule } from "ngx-countdown";

@NgModule({
  declarations: [
    DatGheComponent,
    ListGheComponent,
    ItemGheComponent,
    BillComponent
  ],
  imports: [CommonModule, DatGheRoutingModule, CountdownModule]
})
export class DatGheModule {}
