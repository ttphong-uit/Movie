import { Component, OnInit, Input } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-hethongrap-items",
  templateUrl: "./hethongrap-items.component.html",
  styleUrls: ["./hethongrap-items.component.scss"]
})
export class HethongrapItemsComponent implements OnInit {
  @Input() itemMaHeThongRap;
  @Input() chiso;
  mangCumRap = [];
  mangLichChieu = [];
  maPhim: any;
  constructor(
    private dataPhimService: DataPhimService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._layThongTinLichChieu();
    this.getParamFromURL();
  }
  getParamFromURL() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");
  }
  handleActive(listCumRap, cumRap) {
    let dem = 0;
    let indexActive = 0;

    for (let index in listCumRap) {
      if (listCumRap[index].danhSachPhim[0].maPhim == this.maPhim) {
        if (listCumRap[index].maCumRap == cumRap.maCumRap) {
          return index;
        }
      } else dem++;
    }
    if (dem == listCumRap.length) return 0;
  }
  _layThongTinLichChieu() {
    const uri = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.itemMaHeThongRap}&maNhom=GP10`;
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangLichChieu = data;
    });
  }
}
