import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { SharingDataTrailerService } from "@core/shares/sharing-data-trailer.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-quan-ly-phim",
  templateUrl: "./quan-ly-phim.component.html",
  styleUrls: ["./quan-ly-phim.component.scss"]
})
export class QuanLyPhimComponent implements OnInit {
  @Output() eventEditMovie = new EventEmitter();
  @Output() eventSuaPhim = new EventEmitter();
  @Input() indexXoa;
  keyword: any;
  mangDanhSachPhim = [];
  flagEditAdd: boolean;
  constructor(
    private dataPhimService: DataPhimService,
    private sharingDataTrailerService: SharingDataTrailerService
  ) {}

  ngOnInit() {
    this.getListMovie();
  }

  getListMovie() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangDanhSachPhim = data;
    });
  }
  beginTrailerMovie(dataPhim) {
    this.sharingDataTrailerService.SharingDataTrailer(dataPhim);
  }
  suaPhim(item) {
    this.flagEditAdd = false;
    this.eventEditMovie.emit(this.flagEditAdd);
    this.eventSuaPhim.emit(item);
  }
  themPhim() {
    this.flagEditAdd = true;
    this.eventEditMovie.emit(this.flagEditAdd);
  }
  xoaPhim(item) {
    console.log(item.maPhim);
    const uri = `QuanLyPhim/XoaPhim?MaPhim=${item.maPhim} `;
    this.dataPhimService.delete(uri).subscribe(
      data => {
        Swal.fire({
          text: "Thành công!",
          type: "success",
          confirmButtonColor: "#a5dc86",
          confirmButtonText: "OK"
        }).then(() => {
          this.getListMovie();
        });
      },
      err => {
        Swal.fire({
          text: err.error,
          type: "warning",
          confirmButtonColor: "#facea8",
          confirmButtonText: "OK"
        }).then(() => {});
      }
    );
  }
  handleSearch() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangDanhSachPhim = data.filter(item => {
        return (
          item.tenPhim.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
        );
      });
    });
  }
}
