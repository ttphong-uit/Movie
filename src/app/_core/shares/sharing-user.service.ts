import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingUserService {

  User = new BehaviorSubject({} as Object);
  SharingUser = this.User.asObservable();
  constructor(
  ) { }

  SharingDataUser(user){
    this.User.next(user);
  }
}
