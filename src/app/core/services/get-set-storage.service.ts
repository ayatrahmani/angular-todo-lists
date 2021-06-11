import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetSetStorageService {

  constructor() { }
 
  /*******  Get Token *****/
  getToken(): string {
    return window.localStorage['jwtWebToken'];
  }
  /*******  Save Token *****/
  saveToken(token: string) {
    window.localStorage.setItem("jwtWebToken", token);
  }
  /*******  Delete Token *****/
  destroyToken() {
    window.localStorage.removeItem('jwtWebToken');
  }
  
  storeListLocal(listData:any){
    window.localStorage.setItem('todolist',JSON.stringify(listData));
  }

  removeListLocal(listData:any){
    window.localStorage.removeItem('todolist');
  }

  getListLocal(){
  return  window.localStorage.getItem('todolist');
  }

  /***
   * remove all storage except language
   */
  deleteAll(){
    this.destroyToken();
  }
}
