import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authToken = "";
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      authToken = user.accessToken;
    }

    const authReq = req.clone({
      headers: req.headers.set("Authorization", `Bearer ${authToken}`)
    });
    return next.handle(authReq);
  }
}
