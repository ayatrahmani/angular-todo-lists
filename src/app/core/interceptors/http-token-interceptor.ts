import { Injectable} from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetSetStorageService } from 'src/app/core/services/get-set-storage.service';
@Injectable()

 export class HttpTokenInterceptor{
     constructor(private _storageServe:GetSetStorageService){}
     intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
       
      if (req.headers.has(SkipInterceptor)) {
        const headers = req.headers.delete(SkipInterceptor);
        return next.handle(req.clone({ headers }));
      }
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          };
          const token = this._storageServe.getToken();
          if (token) {
           headersConfig['Authorization'] = `${token}`;
          }
        const request = req.clone({setHeaders:headersConfig})
        return next.handle(request);
     }
    
}

export const SkipInterceptor = "Skip Interceptor";