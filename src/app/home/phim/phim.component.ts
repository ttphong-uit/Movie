import { DataPhimService } from "@core/services/data-phim.service";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Phim } from "@core/models/phim";
declare var $: any;
@Component({
  selector: "app-phim",
  templateUrl: "./phim.component.html",
  styleUrls: ["./phim.component.scss"]
})
export class PhimComponent implements OnInit, AfterViewInit {
  danhSachPhim: any = [];
  constructor(private dataPhimService: DataPhimService) { }

  ngOnInit() {
    this.getListMovie();
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
  }
  ngAfterViewInit() {
    this.beginCarousel();
  }
  beginCarousel() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }

  getListMovie() {
    this.dataPhimService
      .get("QuanLyPhim/LayDanhSachPhim?maNhom=GP10")
      .subscribe((data: Phim) => {
        this.danhSachPhim = data;
        let index = this.danhSachPhim.findIndex(
          item => item.tenPhim == "Avenger : Infinity War"
        );
        this.danhSachPhim.splice(index - 1, 2);
      });
  }
}
