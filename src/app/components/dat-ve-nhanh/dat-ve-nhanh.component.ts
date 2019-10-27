import { Component, OnInit } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
@Component({
  selector: "app-dat-ve-nhanh",
  templateUrl: "./dat-ve-nhanh.component.html",
  styleUrls: ["./dat-ve-nhanh.component.scss"]
})
export class DatVeNhanhComponent implements OnInit {
  constructor(
    private dataPhimService: DataPhimService,
    private router: Router
  ) {}
  danhSachPhim = [];
  layThongTinPhim = [];
  statusLichChieu: boolean = false;
  maPhim: any;
  select = [
    { label: "Phim", value: "", option: [] },
    { label: "Rạp", value: "", option: [], err: "vui lòng chọn phim" },
    { label: "Ngày chiếu", value: "", option: [], err: "vui lòng chọn rạp" },
    {
      label: "Suất chiếu",
      value: "",
      option: [],
      err: "vui lòng chọn suất chiếu"
    }
  ];

  ngOnInit() {
    this._LayDanhSachPhim();
  }
  _LayDanhSachPhim() {
    const uri = "QuanLyPhim/LayDanhSachPhim?maNhom=GP10";
    this.dataPhimService.get(uri).subscribe((data: any) => {
      this.danhSachPhim = data;
      this.select[0].option = this.danhSachPhim;
    });
  }
  _LayThongTinPhim(maPhim) {
    if (maPhim) {
      const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
      this.dataPhimService.get(uri).subscribe((data: any) => {
        this._LayTenRap(data.lichChieu);
        this._LayNgayChieu(data.lichChieu, this.select[1].value);
        this._LaySuatChieu(
          data.lichChieu,
          this.select[1].value,
          this.select[2].value
        );
      });
    }
  }

  _LayTenRap(lichChieu) {
    let mangRap = [];
    lichChieu.map(lichChieu => {
      let index = mangRap.findIndex(rap => {
        return rap === lichChieu.thongTinRap.tenCumRap;
      });
      if (index === -1) mangRap.push(lichChieu.thongTinRap.tenCumRap);
    });
    this.select[1].option = mangRap;
  }
  _LayNgayChieu(lichChieu, rap) {
    let mangNgayChieu = [];
    lichChieu.map(lichChieu => {
      if (lichChieu.thongTinRap.tenCumRap === rap) {
        let date = lichChieu.ngayChieuGioChieu.slice(0, 10);
        let index = mangNgayChieu.findIndex(ngayChieu => {
          return ngayChieu === date;
        });
        if (index === -1) mangNgayChieu.push(date);
      }
    });
    this.select[2].option = mangNgayChieu;
  }
  _LaySuatChieu(lichChieu, rap, ngayChieu) {
    let mangSuatChieu = [];
    lichChieu.map(lichChieu => {
      let date = lichChieu.ngayChieuGioChieu.slice(0, 10);
      if (lichChieu.thongTinRap.tenCumRap === rap && date === ngayChieu) {
        let time = lichChieu.ngayChieuGioChieu.slice(11, 16);
        mangSuatChieu.push(time);
      }
    });
    this.select[3].option = mangSuatChieu;
  }

  getInfo() {
    if (this.maPhim != this.select[0].value) {
      this.maPhim = this.select[0].value;
      this.select[3].value = "";
    }

    this._LayThongTinPhim(this.select[0].value);
    if (this.select[3].value) this.statusLichChieu = true;
    else this.statusLichChieu = false;
  }
  datVe() {
    if (!this.statusLichChieu) {
      Swal.fire({
        text: "Vui lòng chọn đầy đủ thông tin",
        type: "warning",
        confirmButtonColor: "#facea8",
        confirmButtonText: "OK"
      });
    } else {
      if (!localStorage.getItem("user")) {
        Swal.fire({
          text: "Bạn chưa đăng nhập",
          type: "warning",
          confirmButtonColor: "#facea8",
          confirmButtonText: "OK"
        });
      } else {
        let ngayChieuGioChieu =
          this.select[2].value + "T" + this.select[3].value + ":00";
        const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.select[0].value}`;
        this.dataPhimService.get(uri).subscribe((data: any) => {
          data.lichChieu.map(lichChieu => {
            if (
              lichChieu.thongTinRap.tenCumRap === this.select[1].value &&
              lichChieu.ngayChieuGioChieu === ngayChieuGioChieu
            )
              this.router.navigate(["/dat-ghe/", lichChieu.maLichChieu]);
          });
        });
      }
    }
  }
}
