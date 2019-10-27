import { Router } from "@angular/router";
import { SharingDanhSachPhimService } from "./../_core/shares/sharing-danh-sach-phim.service";
import { DataPhimService } from "@core/services/data-phim.service";
import { SharingUserService } from "./../_core/shares/sharing-user.service";
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
declare var $: any;

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(
    private sharingUserService: SharingUserService,
    private dataPhimService: DataPhimService,
    private sharingDanhSachPhimService: SharingDanhSachPhimService,
    private router: Router
  ) { }

  status = false;
  mangDanhSachPhim = [];
  ngOnInit() {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      this.sharingUserService.SharingDataUser(data);
    }
    this.getListMovie();


    // Auto Chuyển sang trang-chu khi gõ localhost:4200
    // this.router.navigate(["trang-chu"])
  }
  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
    this.dataPhimService.get(uri).subscribe((data: any) => {
      if (data) {
        this.mangDanhSachPhim = data;
        this.sharingDanhSachPhimService.sharingDataDanhSachPhim(data);
        this.mangDanhSachPhim[2].danhGia = 2;
        let index = this.mangDanhSachPhim.findIndex(
          item => item.tenPhim == "Avenger : Infinity War"
        );
        this.mangDanhSachPhim.splice(index - 1, 2);
      }
    });
  }
  ngDoCheck() {
    if (localStorage.getItem("wait")) {
      this.status = true;
    }
    if (!localStorage.getItem("wait")) {
      this.status = false;
    }
  }
}
