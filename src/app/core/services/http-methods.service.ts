import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {
  constructor(private _http: HttpClient) {

  }
  /*******  error handle *****/
  private httpErrorHandle(error: any) {
    return throwError(error);
  }
  /*******  Get Method *****/
  get(path: string, headers: HttpHeaders = new HttpHeaders(), params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.get(`${environment.apiBaseUrl + environment.apiVersion}${path}`, { params, headers },)
      .pipe(catchError(this.httpErrorHandle));
  }
  /*******  Post Method *****/
  post(path: string, body: Object = {},headers: HttpHeaders = new HttpHeaders(),params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.post(
      `${environment.apiBaseUrl + environment.apiVersion}${path}`,
      JSON.stringify(body),
      { params, headers }
    ).pipe(catchError(this.httpErrorHandle));
  }
  /*******  Put Method *****/
  put(path: string, body: Object = {},headers: HttpHeaders = new HttpHeaders(),params: HttpParams = new HttpParams()): Observable<any> {
    return this._http.put(
      `${environment.apiBaseUrl + environment.apiVersion}${path}`,
      JSON.stringify(body),
      { params, headers }
    ).pipe(catchError(this.httpErrorHandle));
  }
  /*******  Delete Method *****/
  delete(path: string): Observable<any> {
    return this._http.delete(
      `${environment.apiBaseUrl + environment.apiVersion}${path}`,
    ).pipe(catchError(this.httpErrorHandle));
  }

  deleteMethod(path:string,body:Object = {}):Observable<any>{
    const options = {
      headers: new HttpHeaders(),
      body: JSON.stringify(body)
    }
    return this._http.delete(
      `${environment.apiBaseUrl + environment.apiVersion}${path}`,
      options
    ).pipe(catchError(this.httpErrorHandle));
  }

  patch(path:string,body:Object = {},headers: HttpHeaders = new HttpHeaders(),params: HttpParams = new HttpParams()):Observable<any>{
    return this._http.patch(
      `${environment.apiBaseUrl + environment.apiVersion}${path}`,
      JSON.stringify(body),
      { params, headers }
    ).pipe(catchError(this.httpErrorHandle));
  }
}
