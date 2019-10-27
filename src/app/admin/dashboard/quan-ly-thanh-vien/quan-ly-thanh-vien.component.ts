import { DataPhimService } from "@core/services/data-phim.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import Swal from "sweetalert2";
@Component({
  selector: "app-quan-ly-thanh-vien",
  templateUrl: "./quan-ly-thanh-vien.component.html",
  styleUrls: ["./quan-ly-thanh-vien.component.scss"]
})
export class QuanLyThanhVienComponent implements OnInit {
  mangNguoiDung = [];
  keyword: string = "";
  @Output() eventEditUser = new EventEmitter();
  @Output() eventInfoUser = new EventEmitter();
  constructor(private dataPhimService: DataPhimService) {}

  ngOnInit() {
    this.getListUser();
  }

  getListUser() {
    const uri = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10";
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangNguoiDung = data;
    });
  }
  suaNguoiDung(user) {
    this.eventEditUser.emit(user);
  }
  themNguoiDung() {
    this.eventEditUser.emit(null);
  }
  xoaNguoiDung(taiKhoan) {
    const uri = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    this.dataPhimService.delete(uri).subscribe(
      data => {
        Swal.fire({
          text: "Xóa tài khoản thành công",
          type: "success",
          confirmButtonColor: "#a5dc86",
          confirmButtonText: "OK"
        }).then(() => {
          this.handleSearch();
        });
      },
      err => {
        Swal.fire({
          text: err.error,
          type: "warning",
          confirmButtonColor: "#facea8",
          confirmButtonText: "OK"
        });
      }
    );
  }
  handleSearch() {
    const uri = "QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP10";
    this.dataPhimService.get(uri).subscribe(data => {
      this.mangNguoiDung = data;
      if (this.keyword) {
        this.mangNguoiDung = this.mangNguoiDung.filter(item => {
          if (item.hoTen !== null) {
            return (
              item.hoTen.toLowerCase().indexOf(this.keyword.toLowerCase()) !==
              -1
            );
          }
        });
      }
    });
  }
  getInfoUser(taiKhoan) {
    this.eventInfoUser.emit(taiKhoan);
  }
}
