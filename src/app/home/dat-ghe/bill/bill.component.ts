import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataPhimService } from "@core/services/data-phim.service";
import { SharingUserService } from "@core/shares/sharing-user.service";
import { SharingDataDatGheService } from "@core/shares/sharing-data-dat-ghe.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-bill",
  templateUrl: "./bill.component.html",
  styleUrls: ["./bill.component.scss"]
})
export class BillComponent implements OnInit {
  @Input() dataLichChieu;
  @Input() maLichChieu;
  @Output() eventHuyGhe = new EventEmitter();
  danhSachGheDangChon = [];
  tongTien: number = 0;
  constructor(
    private sharingDataDatGheService: SharingDataDatGheService,
    private sharingUserService: SharingUserService,
    private dataPhimService: DataPhimService
  ) {}
  ngOnInit() {
    this.handleGhe();
  }
  ngOnDestroy() {
    this.sharingDataDatGheService.SharingDataItemGhe("");
  }
  totalMoney() {
    this.tongTien = 0;
    this.danhSachGheDangChon.map((item, index) => {
      this.tongTien += item.giaVe;
    });
  }
  findIndex(maGhe) {
    let index = this.danhSachGheDangChon.findIndex(item => {
      return item.maGhe === maGhe;
    });
    return index;
  }
  handleGhe() {
    this.sharingDataDatGheService.SharingItemGhe.subscribe((ghe: any) => {
      let index = this.findIndex(ghe.maGhe);
      if (index === -1) {
        if (Object.entries(ghe).length) this.danhSachGheDangChon.push(ghe);
      } else {
        this.danhSachGheDangChon.splice(index, 1);
      }
      this.totalMoney();
    });
  }
  huyGhe(maGhe) {
    this.danhSachGheDangChon.splice(this.findIndex(maGhe), 1);
    this.totalMoney();
    this.eventHuyGhe.emit(maGhe);
  }
  buyTicket() {
    this.sharingUserService.SharingUser.subscribe((data: any) => {
      if (Object.entries(data).length) {
        if (!this.danhSachGheDangChon.length) {
          Swal.fire({
            text: "Vui Lòng Chọn Ghế",
            type: "warning",
            confirmButtonColor: "#facea8",
            confirmButtonText: "OK"
          });
        } else {
          const uri = "QuanLyDatVe/DatVe";
          let dataDatVe = {
            maLichChieu: this.maLichChieu,
            danhSachVe: [],
            taiKhoanNguoiDung: data.taiKhoan
          };
          this.danhSachGheDangChon.map(item => {
            let veVM = {
              maGhe: item.maGhe,
              giaVe: item.giaVe
            };
            dataDatVe.danhSachVe.push(veVM);
          });
          this.dataPhimService.postDatVe(uri, dataDatVe).subscribe(
            (data: any) => {
              Swal.fire({
                text: "Đặt ghế thành công!",
                type: "success",
                confirmButtonColor: "#a5dc86",
                confirmButtonText: "OK"
              }).then(() => {
                location.reload();
              });
            },
            err => {}
          );
        }
      } else {
        Swal.fire({
          text: "Bạn chưa đăng nhập",
          type: "warning",
          confirmButtonColor: "#facea8",
          confirmButtonText: "OK"
        });
      }
    });
  }
}
