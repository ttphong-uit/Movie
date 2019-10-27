import { SharingDanhSachPhimService } from "./../../../../_core/shares/sharing-danh-sach-phim.service";
import { Component, OnInit, Input } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-thong-tin-lich-chieu",
  templateUrl: "./thong-tin-lich-chieu.component.html",
  styleUrls: ["./thong-tin-lich-chieu.component.scss"]
})
export class ThongTinLichChieuComponent implements OnInit {
  @Input() cumRap;
  @Input() chiso;
  @Input() chiso1;
  mangDanhSachPhimTheoCumRap: any;
  constructor(
    private dataPhimService: DataPhimService,
    private router: Router,
    private sharingDanhSachPhimService: SharingDanhSachPhimService
  ) {}
  thongTinLichChieu = [];
  mangNgay = [];
  mangDanhSachPhim = [];
  ngOnChanges() {
    this.sharingDanhSachPhimService.sharingDanhSachPhim.subscribe(
      (data: Array<any>) => {
        this.mangDanhSachPhim = data;
      }
    );
    this.mangDanhSachPhimTheoCumRap = this.cumRap.danhSachPhim;
    this.gomMaPhim();
  }
  ngOnInit() {}
  goToDetailMovie(maPhim) {
    this.router.navigate(["/chi-tiet-phim/", maPhim]);
  }
  gomMaPhim() {
    this.mangDanhSachPhimTheoCumRap.map(item => {
      let index = this.thongTinLichChieu.findIndex(phim => {
        return phim.maPhim === item.maPhim;
      });
      if (index === -1) {
        let index = this.mangDanhSachPhim.findIndex(
          i => item.maPhim == i.maPhim
        );
        let obj = {
          hinhAnh: this.mangDanhSachPhim[index].hinhAnh,
          danhGia: this.mangDanhSachPhim[index].danhGia,
          ngayKhoiChieu: this.mangDanhSachPhim[index].ngayKhoiChieu,
          maPhim: item.maPhim,
          tenPhim: item.tenPhim,
          maRap: item.maRap,
          mangNgayChieuGioChieu: this.gomNgayChieu(item.maPhim)
        };
        this.thongTinLichChieu.push(obj);
      }
    });
  }
  gomNgayChieu(maPhim) {
    let mangNgayChieuGioChieu = [];
    this.mangDanhSachPhimTheoCumRap.map(item => {
      if (item.maPhim === maPhim) {
        let index = mangNgayChieuGioChieu.findIndex(ncgc => {
          return ncgc === item.ngayChieuGioChieu;
        });
        if (index === -1) {
          mangNgayChieuGioChieu.push(item.ngayChieuGioChieu);
          let date = item.ngayChieuGioChieu.slice(0, 10);
          let index = this.mangNgay.findIndex(ngay => {
            return ngay === date;
          });
          if (index === -1) this.mangNgay.push(date);
        }
      }
    });
    return mangNgayChieuGioChieu;
  }
  goToBuyTicket(ncgc, maRap) {
    if (!localStorage.getItem("user")) {
      Swal.fire({
        text: "Bạn chưa đăng nhập",
        type: "warning",
        confirmButtonColor: "#facea8",
        confirmButtonText: "OK"
      });
    } else {
      this.thongTinLichChieu.map(item => {
        item.mangNgayChieuGioChieu.map(nc => {
          if (nc === ncgc && maRap === item.maRap) {
            const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${item.maPhim}`;
            this.dataPhimService.get(uri).subscribe((data: any) => {
              data.heThongRapChieu.map(heThongRapChieu => {
                heThongRapChieu.cumRapChieu.map(cumRap => {
                  if (cumRap.maCumRap === this.cumRap.maCumRap) {
                    cumRap.lichChieuPhim.map(lichChieu => {
                      if (lichChieu.ngayChieuGioChieu === ncgc) {
                        this.router.navigate([
                          "/dat-ghe/",
                          lichChieu.maLichChieu
                        ]);
                      }
                    });
                  }
                });
              });
            });
          }
        });
      });
    }
  }
}
