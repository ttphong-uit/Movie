import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { NgForm } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-modal-phim",
  templateUrl: "./modal-phim.component.html",
  styleUrls: ["./modal-phim.component.scss"]
})
export class ModalPhimComponent implements OnInit {
  @Input() flagModal;
  @Input() itemSuaPhim;
  @ViewChild("formQuanLiPhim", { static: false }) formQuanLiPhim: NgForm;
  name: string;
  EmptyModal = {
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: "",
    moTa: "",
    maNhom: "GP10",
    ngayKhoiChieu: "",
    danhGia: ""
  };
  constructor(private dataPhimService: DataPhimService) {}

  ngOnChanges() {
    this.CheckModal();
    if (this.formQuanLiPhim) {
      if (this.flagModal === false) {
        this.formQuanLiPhim.setValue({ ...this.itemSuaPhim });
      } else {
        this.formQuanLiPhim.setValue({ ...this.EmptyModal });
      }
    }
  }
  ngOnInit() {}

  CheckModal() {
    if (this.flagModal === true) {
      this.name = "Thêm Phim";
    } else {
      this.name = "Sửa Phim";
    }
  }

  _SubmitForm() {
    console.log(this.formQuanLiPhim.value);
    if (this.flagModal === false) {
      console.log("suaphim");
      const uri = "QuanLyPhim/CapNhatPhim";
      this.dataPhimService.post(uri, this.formQuanLiPhim.value).subscribe(
        (data: any) => {
          Swal.fire({
            text: "Thành công!",
            type: "success",
            confirmButtonColor: "#a5dc86",
            confirmButtonText: "OK"
          }).then(() => {
            location.reload();
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
    } else {
      console.log("themphim");

      const uri = "QuanLyPhim/ThemPhim";
      this.dataPhimService.post(uri, this.formQuanLiPhim.value).subscribe(
        (data: any) => {
          Swal.fire({
            text: "Thành công!",
            type: "success",
            confirmButtonColor: "#a5dc86",
            confirmButtonText: "OK"
          }).then(() => {
            location.reload();
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
