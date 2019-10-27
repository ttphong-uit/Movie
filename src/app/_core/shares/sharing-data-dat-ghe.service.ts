import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingDataDatGheService {

  private ItemGhe = new BehaviorSubject({} as Object);
  SharingItemGhe = this.ItemGhe.asObservable();

  constructor() { }

  SharingDataItemGhe(ghe) {
    this.ItemGhe.next(ghe);
  }
}
