import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingUrlPathnameService {

  private UrlPathname = new BehaviorSubject({} as Object)
  SharingUrlPathname = this.UrlPathname.asObservable();
  constructor() { }

  SharingDataUrlPathname(UrlPathname) {
    this.UrlPathname.next(UrlPathname);
  }
}
