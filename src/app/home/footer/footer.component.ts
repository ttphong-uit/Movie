import { DataPhimService } from "./../../_core/services/data-phim.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(private dataPhimService: DataPhimService) {}
  mangHeThongRap = [];
  ngOnInit() {
    this.getHeThongRap();
  }
  getHeThongRap() {
    const uri = "QuanLyRap/LayThongTinHeThongRap";
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangHeThongRap = data;
    });
  }
}
