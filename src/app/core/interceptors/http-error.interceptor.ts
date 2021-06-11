import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ShareService } from '../services/share.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private _share: ShareService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // skipErorr
    if (request.headers.has(SkipError)) {
      const headers = request.headers.delete(SkipError);
      return next.handle(request.clone({ headers }));
    }
    return next.handle(request).pipe(
      // retry(1),
      catchError((error: HttpErrorResponse) => {
        this.ShowAlertMessage(error);
        return throwError(error);

      })
    );
  }

  ShowAlertMessage(error: any) {
    if (error.status == 500) {
      this._share.showAlertErrorMessage.next('Something went wrong');
    }
    else if (error.status == 0) {
      this._share.showAlertErrorMessage.next('Something went wrong');
    }
    else if (error.status == 401) {

    }
    else {
      this._share.showAlertErrorMessage.next(error.error.message);

    }
  }
}

export const SkipError = "skiperror";