import Swal from "sweetalert2";
import { DataPhimService } from "@core/services/data-phim.service";
import { NgForm } from "@angular/forms";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
@Component({
  selector: "app-modal-quan-ly-thanh-vien",
  templateUrl: "./modal-quan-ly-thanh-vien.component.html",
  styleUrls: ["./modal-quan-ly-thanh-vien.component.scss"]
})
export class ModalQuanLyThanhVienComponent implements OnInit {
  @Input() userEdit;
  @Input() taiKhoan;
  @ViewChild("formQuanLyThanhVien", { static: false })
  formQuanLyThanhVien: NgForm;
  user = {
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    matKhau: "",
    maLoaiNguoiDung: "KhachHang"
  };
  infoUser;
  constructor(private dataPhimService: DataPhimService) {}

  ngOnInit() {}
  ngOnChanges() {
    if (this.taiKhoan) this.getInfoUser();
    if (this.formQuanLyThanhVien) {
      if (this.userEdit) {
        this.formQuanLyThanhVien.setValue({ ...this.userEdit });
      } else {
        this.formQuanLyThanhVien.setValue({ ...this.user });
      }
    }
  }

  handleOnSubmit() {
    this.user.taiKhoan = this.formQuanLyThanhVien.value.taiKhoan;
    this.user.hoTen = this.formQuanLyThanhVien.value.hoTen;
    this.user.email = this.formQuanLyThanhVien.value.email;
    this.user.soDt = this.formQuanLyThanhVien.value.soDt;
    this.user.matKhau = this.formQuanLyThanhVien.value.matKhau;
    this.user.maLoaiNguoiDung = this.formQuanLyThanhVien.value.maLoaiNguoiDung;
    if (this.userEdit) {
      this.user.taiKhoan = this.userEdit.taiKhoan;
      this.user.maLoaiNguoiDung = this.userEdit.maLoaiNguoiDung;
      const uri = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
      this.dataPhimService.put(uri, { ...this.user, maNhom: "GP10" }).subscribe(
        () => {
          Swal.fire({
            text: "Cập nhập người dùng thành công",
            type: "success",
            confirmButtonColor: "#a5dc86",
            confirmButtonText: "OK"
          }).then(() => {
            window.location.reload();
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
    } else {
      const uri = "QuanLyNguoiDung/ThemNguoiDung";
      this.dataPhimService
        .post(uri, { ...this.user, maNhom: "GP10" })
        .subscribe(
          () => {
            Swal.fire({
              text: "Thêm người dùng thành công",
              type: "success",
              confirmButtonColor: "#a5dc86",
              confirmButtonText: "OK"
            }).then(() => {
              window.location.reload();
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
  }
  getInfoUser() {
    const uri = "QuanLyNguoiDung/ThongTinTaiKhoan";
    console.log(this.taiKhoan);
    this.dataPhimService
      .post(uri, { taiKhoan: this.taiKhoan })
      .subscribe(data => {
        this.infoUser = data;
        console.log(data);
      });
  }
}
