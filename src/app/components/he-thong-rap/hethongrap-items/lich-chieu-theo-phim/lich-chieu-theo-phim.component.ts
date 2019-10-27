import { Component, OnInit, Input } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
@Component({
  selector: "app-lich-chieu-theo-phim",
  templateUrl: "./lich-chieu-theo-phim.component.html",
  styleUrls: ["./lich-chieu-theo-phim.component.scss"]
})
export class LichChieuTheoPhimComponent implements OnInit {
  @Input() cumRap;
  @Input() maPhim;
  @Input() chiso;
  @Input() chiso1;
  mangPhim = [];
  mangNgay = [];
  constructor(
    private dataPhimService: DataPhimService,
    private router: Router
  ) { }

  ngOnChanges() {
    this.layThongTinLichChieuTheoPhim();
  }

  layThongTinLichChieuTheoPhim() {
    const uri = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${this.maPhim}`;
    this.dataPhimService.get(uri).subscribe(data => {
      data.heThongRapChieu.map(heThongRapChieu => {
        heThongRapChieu.cumRapChieu.map(cumRapChieu => {
          if (cumRapChieu.maCumRap === this.cumRap.maCumRap) {
            this.mangPhim.push(cumRapChieu.lichChieuPhim);
            cumRapChieu.lichChieuPhim.map(lichChieu => {
              let date = lichChieu.ngayChieuGioChieu.slice(0, 10);
              let index = this.mangNgay.findIndex(ngay => {
                return ngay === date;
              });
              if (index === -1) this.mangNgay.push(date);
            });
          }
        });
      });
    });
  }
  goToBuyTicket(maLichChieu) {
    if (!localStorage.getItem("user")) {
      Swal.fire({
        text: "Bạn chưa đăng nhập",
        type: "warning",
        confirmButtonColor: "#facea8",
        confirmButtonText: "OK"
      })
    }
    else
      this.router.navigate(["/dat-ghe/", maLichChieu]);
  }
  ngOnInit() { }
}
