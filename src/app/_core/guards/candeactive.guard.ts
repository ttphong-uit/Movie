import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { FormComponent } from "src/app/home/form/form.component";

@Injectable({
  providedIn: "root"
})
export class CandeactivateGuard implements CanDeactivate<FormComponent> {
  canDeactivate(component) {
    if (
      !component.canDeactivate &&
      !localStorage.getItem("user") &&
      !localStorage.getItem("DKuser")
    ) {
      if (confirm("Bạn có muốn rời khỏi trang nay không")) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
