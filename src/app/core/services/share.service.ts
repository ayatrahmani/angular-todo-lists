import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
@Injectable({
    providedIn:'root'
})

 export  class ShareService{
  
    constructor() { }
    /*** display message */
    public showAlertErrorMessage = new Subject<string>();
    /*** display  success message */
    public showAlertSuccessMessage = new Subject<string>();
    /*** loading */
    public isLoading = new Subject<boolean>();
    public sessionExp = new Subject<boolean>();
    
  }