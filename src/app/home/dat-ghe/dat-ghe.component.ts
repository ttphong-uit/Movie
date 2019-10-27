import { Component, OnInit } from "@angular/core";
import { SharingDataDatGheService } from "@core/shares/sharing-data-dat-ghe.service";
import { DataPhimService } from "@core/services/data-phim.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CountdownModule } from "ngx-countdown";

@Component({
  selector: "app-dat-ghe",
  templateUrl: "./dat-ghe.component.html",
  styleUrls: ["./dat-ghe.component.scss"]
})
export class DatGheComponent implements OnInit {
  danhSachGhe = [];
  dataLichChieu: any;
  maLichChieu: any;
  maGheHuy: any;
  constructor(
    private dataPhimService: DataPhimService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
    this.getParamsFromURL();
    this.getDetailsShowTimes();
  }

  getParamsFromURL() {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("id");
  }
  getDetailsShowTimes() {
    const uri = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${this.maLichChieu}`;
    this.dataPhimService.get(uri).subscribe((data: any) => {
      this.danhSachGhe = data.danhSachGhe;
      this.dataLichChieu = data;
    });
  }
  viTriHuy(ghe) {
    this.maGheHuy = ghe;
  }
}
