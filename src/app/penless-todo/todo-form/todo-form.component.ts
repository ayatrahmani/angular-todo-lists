import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
   public todoForm:FormGroup;
   public todoData:string;
   @Output() sendFormData = new EventEmitter<string>();
  constructor(
    private _fb:FormBuilder
  ) { }

  /***
   * create Form
   */
  formInit(){
    this.todoForm = this._fb.group({
      title: [null,Validators.required]
    })
  }

  ngOnInit(): void {
    this.formInit();
  }

  /***
   * submit
   */
   submitTodo(data:any){
      if(this.todoForm.valid){
         this.sendFormData.emit(data.value.title);
         this.todoForm.reset();
      }
   }

}
