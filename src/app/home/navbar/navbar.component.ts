import { SharingUserService } from "@core/shares/sharing-user.service";
import { Component, OnInit } from "@angular/core";
import { SharingUrlPathnameService } from "@core/shares/sharing-url-pathname.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user = "";

  constructor(
    private sharingUserService: SharingUserService,
    private sharingUrlPathnameService: SharingUrlPathnameService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sharingUserService.SharingUser.subscribe((data: any) => {
      if (Object.entries(data).length) this.user = data.hoTen;
    });
  }
  goToHome() {
    this.router.navigate(["/trang-chu"]);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  signIn() {
    if (window.location.pathname !== "/form") {
      this.sharingUrlPathnameService.SharingDataUrlPathname(
        window.location.pathname
      );
      this.router.navigate(["/form"]);
    }
  }
  logOut() {
    localStorage.removeItem("user");
    this.user = "";
    window.location.replace("/trang-chu");
  }
  goToHomeLichChieu() {
    this.router.navigate(["/trang-chu"]);
    let locationLichChieu = JSON.parse(
      localStorage.getItem("locationLichChieu")
    );
    window.scrollTo({
      top: locationLichChieu + 760,
      left: 0,
      behavior: "smooth"
    });
  }
  goToPhim() {
    this.router.navigate(["/phim"]);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  goToHomeCumRap() {
    this.router.navigate(["/trang-chu"]);
    let locationCumRap = JSON.parse(localStorage.getItem("locationCumRap"));
    window.scrollTo({
      top: locationCumRap - 200,
      left: 0,
      behavior: "smooth"
    });
  }
}
