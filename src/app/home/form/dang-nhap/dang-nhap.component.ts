import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { SharingUserService } from "@core/shares/sharing-user.service";
import { DataPhimService } from "@core/services/data-phim.service";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { ActivatedRoute, Router } from "@angular/router";
import { SharingUrlPathnameService } from "@core/shares/sharing-url-pathname.service";

@Component({
  selector: "app-dang-nhap",
  templateUrl: "./dang-nhap.component.html",
  styleUrls: ["./dang-nhap.component.scss"]
})
export class DangNhapComponent implements OnInit {
  taiKhoan = new FormControl("", [Validators.required]);
  matKhau = new FormControl("", [Validators.required]);

  constructor(
    private dataPhimService: DataPhimService,
    private sharingUserService: SharingUserService,
    private sharingUrlPathnameService: SharingUrlPathnameService,
    private router: Router
  ) { }

  ngOnInit() { }
  getErrorMessage(input) {
    if (input.hasError("required")) {
      if (input === this.taiKhoan) return "Bạn chưa nhập tài khoản";
      else if (input === this.matKhau) return "Bạn chưa nhập mật khẩu";
    }
    return "";
  }
  signIn() {
    if (!this.taiKhoan.errors && !this.matKhau.errors) {
      const uri = "QuanLyNguoiDung/DangNhap";
      let data = { taiKhoan: this.taiKhoan.value, matKhau: this.matKhau.value };
      this.dataPhimService.post(uri, data).subscribe(
        (data: any) => {
          this.sharingUserService.SharingDataUser(data);
          localStorage.setItem("user", JSON.stringify(data));
          Swal.fire({
            text: "Đăng nhập thành công!",
            type: "success",
            confirmButtonColor: "#a5dc86",
            confirmButtonText: "OK"
          }).then(() => {
            this.sharingUrlPathnameService.SharingUrlPathname.subscribe(
              data => {
                this.router.navigate([data]);
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
