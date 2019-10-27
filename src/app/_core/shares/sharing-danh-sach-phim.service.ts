import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SharingDanhSachPhimService {
  private danhSachPhim = new BehaviorSubject({} as Object);
  sharingDanhSachPhim = this.danhSachPhim.asObservable();
  constructor() {}

  sharingDataDanhSachPhim(data) {
    this.danhSachPhim.next(data);
  }
}
