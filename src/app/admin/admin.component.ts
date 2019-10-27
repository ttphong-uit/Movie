import { DataPhimService } from "@core/services/data-phim.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import Swal from 'sweetalert2';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
  @ViewChild("formSignin", { static: false }) formSignin: NgForm;
  constructor(
    private dataPhimService: DataPhimService,
    private router: Router
  ) { }

  ngOnInit() { }

  _Signin() {
    const uri = "QuanLyNguoiDung/DangNhap";
    this.dataPhimService.post(uri, this.formSignin.value).subscribe(
      (data: any) => {
        console.log(data);
        if (data.maLoaiNguoiDung === "QuanTri") {
          Swal.fire({
            text: "Đăng nhập thành công",
            type: "success",
            confirmButtonColor: "#a5dc86",
            confirmButtonText: "OK"
          })
            .then(() => {
              this.router.navigate(["admin/dashboard"]);
              localStorage.setItem("user", JSON.stringify(data));
            })
        } else {
          Swal.fire({
            text: "Không có quyền truy cập",
            type: "warning",
            confirmButtonColor: "#facea8",
            confirmButtonText: "OK"
          })
            .then(() => { this.router.navigate(["admin"]) })

        }
      },
      err => {
        Swal.fire({
          text: err.error,
          type: "warning",
          confirmButtonColor: "#facea8",
          confirmButtonText: "OK"
        })
      }
    );
  }
}
