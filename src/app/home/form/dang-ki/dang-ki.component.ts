import { DataPhimService } from "@core/services/data-phim.service";
import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import Swal from "sweetalert2";
import { SharingDataDatGheService } from "@core/shares/sharing-data-dat-ghe.service";
import { Router } from "@angular/router";
import { SharingUrlPathnameService } from "@core/shares/sharing-url-pathname.service";
@Component({
  selector: "app-dang-ki",
  templateUrl: "./dang-ki.component.html",
  styleUrls: ["./dang-ki.component.scss"]
})
export class DangKiComponent implements OnInit {
  hoTen = new FormControl("", [
    Validators.required,
    Validators.pattern(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    )
  ]);
  taiKhoan = new FormControl("", [
    Validators.required,
    Validators.pattern("^[A-Za-z0-9_-]+$"),
    Validators.min(5),
    Validators.max(16)
  ]);
  matKhau = new FormControl("", [
    Validators.required,
    Validators.min(5),
    Validators.max(16)
  ]);
  email = new FormControl("", [
    Validators.required,
    Validators.pattern(
      "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
        "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$"
    )
  ]);
  soDT = new FormControl("", [
    Validators.required,
    Validators.pattern("^[0-9]+$")
  ]);

  constructor(
    private dataPhimService: DataPhimService,
    private router: Router,
    private sharingUrlPathnameService: SharingUrlPathnameService
  ) {}

  ngOnInit() {}
  errorRequired(input, err): string {
    switch (input) {
      case this.hoTen:
        err = "Vui lòng nhập họ tên";
        break;
      case this.taiKhoan:
        err = "Vui lòng nhập tài khoản";
        break;
      case this.matKhau:
        err = "Vui lòng nhập mật khẩu";
        break;
      case this.email:
        err = "Vui lòng nhập email";
        break;
      case this.soDT:
        err = "Vui lòng nhập số điện thoại";
        break;
    }
    return err;
  }
  errorPattern(input, err): string {
    switch (input) {
      case this.hoTen:
        err = "Họ tên phải là chữ";
        break;
      case this.taiKhoan:
        err = "Tài khoản không được chứa kí tự đặc biệt";
        break;
      case this.email:
        err = "Email không hợp lệ";
        break;
      case this.soDT:
        err = "Số điện thoại không hợp lệ";
        break;
    }
    return err;
  }
  errorLenght(input, err) {
    switch (input) {
      case this.taiKhoan:
        err = "Tài khoản phải từ 5 đến 16 kí tự";
        break;
      case this.matKhau:
        err = "Mật khẩu phải từ 5 đến 16 kí tự";
        break;
    }
    return err;
  }
  getErrorMessage(input) {
    let err = "";
    if (input.errors) {
      if (input.hasError("required")) err = this.errorRequired(input, err);
      else if (input.hasError("pattern")) err = this.errorPattern(input, err);
      else if (input.hasError("min") || input.hasError("max"))
        err = this.errorLenght(input, err);
    } else err = "";
    return err;
  }
  signUp() {
    if (
      !this.hoTen.errors &&
      !this.taiKhoan.errors &&
      !this.matKhau.errors &&
      !this.email.errors &&
      !this.soDT.errors
    ) {
      const uri = "QuanLyNguoiDung/DangKy";
      let data = {
        taiKhoan: this.taiKhoan.value,
        matKhau: this.matKhau.value,
        email: this.email.value,
        soDt: this.soDT.value,
        maNhom: "GP04",
        maLoaiNguoiDung: "KhachHang",
        hoTen: this.hoTen.value
      };
      this.dataPhimService.post(uri, data).subscribe(
        (data: any) => {
          localStorage.setItem("DKuser", JSON.stringify(data));
          Swal.fire({
            text: "Tạo Tài Khoản Thành Công",
            type: "success",
            confirmButtonColor: "#a5dc86",
            confirmButtonText: "OK"
          }).then(() => {
            this.sharingUrlPathnameService.SharingUrlPathname.subscribe(
              data => {
                this.router.navigate([data]);
                setTimeout(() => {
                  this.router.navigate(["/form"]);
                  localStorage.removeItem("DKuser");
                }, 1);
              }
            );
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
}
