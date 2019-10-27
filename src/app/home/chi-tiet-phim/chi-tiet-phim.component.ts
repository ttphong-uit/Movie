import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataPhimService } from '@core/services/data-phim.service';
import { SharingDataTrailerService } from '@core/shares/sharing-data-trailer.service';

import * as $ from "jquery";
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: "app-chi-tiet-phim",
  templateUrl: "./chi-tiet-phim.component.html",
  styleUrls: ["./chi-tiet-phim.component.scss"]
})
export class ChiTietPhimComponent implements OnInit {
  maPhim: any;
  movie: any;
  lichChieu: any;
  movieTrailer: any = "";

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataPhimService: DataPhimService,
    private sharingDataTrailerService: SharingDataTrailerService,
    private sanitizer: DomSanitizer

  ) { }

  ngOnInit() {
    localStorage.setItem("wait", JSON.stringify(true));
    setTimeout(() => {
      localStorage.removeItem("wait");
    }, 3000);
    this.getParamsFromURL()
    this.getDetailMovie()
    this.trailer()
  }
  getParamsFromURL() {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get("id");
  }
  getDetailMovie() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.dataPhimService.get(uri).subscribe((data: any) => {
      this.movie = data;
      this.lichChieu = data.lichChieu;
    });
  }
  goToBuyTicket(maLichChieu) {
    this.router.navigate(["/dat-ghe/", maLichChieu]);
  }
  beginTrailer(dataPhim) {
    this.sharingDataTrailerService.SharingDataTrailer(dataPhim);
  }
  trailer() {
    const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.maPhim}`;
    this.dataPhimService.get(uri).subscribe((data: any) => {
      if (Object.entries(data).length) {
        this.movieTrailer = this.sanitizer.bypassSecurityTrustResourceUrl(data.trailer);
      }
    })
  }

}
