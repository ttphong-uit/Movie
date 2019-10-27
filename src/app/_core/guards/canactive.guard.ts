import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharingUrlPathnameService } from '@core/shares/sharing-url-pathname.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FormCanActiveGuard implements CanActivate {
  constructor(private router: Router, private sharingUrlPathnameService: SharingUrlPathnameService) { }

  canActivate() {
    this.sharingUrlPathnameService.SharingUrlPathname.subscribe(data => {
      if (!Object.entries(data).length) {
        this.router.navigate(["trang-chu"]);
        return false
      }
    })
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class DatgheCanActiveGuard implements CanActivate {
  constructor(
    private router: Router
  ) {

  }
  canActivate() {
    if (!localStorage.getItem("user")) {
      this.router.navigate(["trang-chu"]);
      return false
    }
    return true
  }
}


@Injectable({
  providedIn: 'root'
})
export class DashboardCanactiveGuard implements CanActivate {
  constructor(
    private router: Router
  ) {

  }
  canActivate() {
    if (!localStorage.getItem("user")) {
      this.router.navigate(["admin"])
      return false;
    }
    else if (JSON.parse(localStorage.getItem("user")).maLoaiNguoiDung !== "QuanTri") {
      Swal.fire({
        text: "Không có quyền truy cập",
        type: "warning", confirmButtonColor: "#facea8",
        confirmButtonText: "OK"
      })
        .then(() => { this.router.navigate(["trang-chu"]) })
      return false;
    }
    return true
  }
}

