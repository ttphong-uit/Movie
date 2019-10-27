import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
declare var $: any;

@Component({
  selector: "app-trang-chu",
  templateUrl: "./trang-chu.component.html",
  styleUrls: ["./trang-chu.component.scss"]
})
export class TrangChuComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    this.getOffSetTop();
    this.getOffsetTopLichChieu();
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
  }
  getOffSetTop() {
    let cumRap = <HTMLInputElement>document.getElementById("cum-rap");
    localStorage.setItem("locationCumRap", JSON.stringify(cumRap.offsetTop));
  }
  getOffsetTopLichChieu() {
    let lichChieu = <HTMLInputElement>document.getElementById("lich-chieu");
    localStorage.setItem(
      "locationLichChieu",
      JSON.stringify(lichChieu.offsetTop)
    );
  }
}
