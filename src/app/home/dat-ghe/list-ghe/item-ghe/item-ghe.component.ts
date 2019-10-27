import { Component, OnInit, Input } from "@angular/core";
import { SharingDataDatGheService } from "@core/shares/sharing-data-dat-ghe.service";

@Component({
  selector: "app-item-ghe",
  templateUrl: "./item-ghe.component.html",
  styleUrls: ["./item-ghe.component.scss"]
})
export class ItemGheComponent implements OnInit {
  @Input() ghe;
  trangThaiGhe: boolean = false;
  constructor(private sharingDataDatGheService: SharingDataDatGheService) { }

  ngOnInit() {
  }
  selectSeat() {
    if (!this.ghe.daDat) {
      this.trangThaiGhe = !this.trangThaiGhe;
      this.sharingDataDatGheService.SharingDataItemGhe(this.ghe);
    }
  }
}
