import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { GetSetStorageService } from 'src/app/core/services/get-set-storage.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnChanges {
  @Input() dataForm:string;
  public listData = [];
  public title:string;
  public isEdit:boolean = false;
  public selectedIndex:number;
  @Output() sendUpdatedData = new EventEmitter<any>();
  constructor(
    private _storage:GetSetStorageService
  ) { 
  }

  ngOnInit(): void {
    /***
     * get saved data
     */
    let getList = this._storage.getListLocal();
    if(getList){
      this.listData = JSON.parse(getList);
      this.sendUpdatedData.emit(this.listData);
    }
    
  }

  ngOnChanges(){
   if(this.dataForm){
     let data = {
       title:this.dataForm,
       completed:false
     }
    this.listData.push(data)
    if(this.listData.length > 0){
      this._storage.storeListLocal(this.listData);
      this.sendUpdatedData.emit(this.listData);
    }
   }
  }

  /***
   * edit method
   */
  edit(index:number,val:string){
    this.isEdit = true;
    this.selectedIndex = index;
   }
 /**
  * 
  * @param index 
  * @param val 
  * update method
  */
  update(index:number,val:string){
    this.listData[index].title = val;
    this._storage.storeListLocal(this.listData);
    this.sendUpdatedData.emit(this.listData);
    this.isEdit = false;
    this.selectedIndex = null;
  }

  /***
   * delete method
   */
  delete(index:number){
    this.listData.splice(index, 1);
    this._storage.storeListLocal(this.listData);
    this.sendUpdatedData.emit(this.listData);
  }
  /***
   * masrk as done
   */
  compFunct(e,data,i){
    if(e.checked === true){
      this.listData[i].completed = true;
    }
    else{
      this.listData[i].completed = false;
    }
    this._storage.storeListLocal(this.listData);
    this.sendUpdatedData.emit(this.listData);

  }

}
