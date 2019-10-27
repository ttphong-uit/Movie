import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataPhimService } from "@core/services/data-phim.service";

@Component({
  selector: "app-he-thong-rap",
  templateUrl: "./he-thong-rap.component.html",
  styleUrls: ["./he-thong-rap.component.scss"]
})
export class HeThongRapComponent implements OnInit {
  constructor(
    private dataPhimService: DataPhimService,
    private activatedRoute: ActivatedRoute
  ) {}
  maPhim: any;
  mangHeThongRap = [];
  ngOnInit() {
    this._layThongTinHeThongRap();
    this.getParamFromURL();
  }
  getParamFromURL() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");
  }
  _layThongTinHeThongRap() {
    const uri = "QuanLyRap/LayThongTinHeThongRap";
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangHeThongRap = data;
    });
  }
}
