import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

let urlApi = "";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
let headers = new HttpHeaders({
  "Content-Type": "application/json"
});
@Injectable({
  providedIn: "root"
})
export class DataPhimService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }
  get(uri): Observable<any> {
    const url = urlApi + "/" + uri;
    return this.http.get(url).pipe(
      tap((data: any) => { }),
      catchError(err => {
        return this.HandleErr(err);
      })
    );
  }
  post(uri, data): Observable<any> {
    const url = urlApi + "/" + uri;
    return this.http.post(url, data, httpOptions).pipe(
      tap((data: any) => { }),
      catchError(err => {
        return this.HandleErr(err);
      })
    );
  }
  delete(uri): Observable<any> {
    const url = urlApi + "/" + uri;
    return this.http
      .delete(url, { headers: headers, responseType: "text" })
      .pipe(
        tap((data: any) => { }),
        catchError(err => {
          return this.HandleErr(err);
        })
      );
  }
  put(uri, data): Observable<any> {
    const url = urlApi + "/" + uri;
    return this.http
      .put(url, data, { headers: headers, responseType: "text" })
      .pipe(
        tap((data: any) => { }),
        catchError(err => {
          return this.HandleErr(err);
        })
      );
  }
  postDatVe(uri, data?): Observable<any> {
    const url = urlApi + "/" + uri;

    return this.http
      .post(url, data, { headers: headers, responseType: "text" })
      .pipe(
        tap((data: any) => { }),
        catchError(err => {
          return this.HandleErr(err);
        })
      );
  }
  HandleErr(err) {
    console.log(err);
    switch (err.status) {
      case 500:
        console.log(err.Error);
        break;

      default:
        break;
    }
    return throwError(err);
  }
}
