import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router"
import Swal from 'sweetalert2';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  userEdit;
  taiKhoan;
  flag: boolean;
  itemSuaPhim: any;
  constructor(
    private router: Router
  ) { }




  ngOnInit() {

  }

  EditMovie(event) {
    this.flag = event;
    console.log(this.flag);
  }
  suaPhim(event) {
    this.itemSuaPhim = event;
  }
  openModalUser(user) {
    this.userEdit = user;
  }
  getInfoUser(taiKhoan) {
    this.taiKhoan = taiKhoan;
  }
}
