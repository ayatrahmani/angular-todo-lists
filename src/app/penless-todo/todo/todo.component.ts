import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  dataForm: string;
  public listDataTodos: any = [];
  public todosCompleted: any = [];
  public progress: any;
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * 
   * @param e 
   * get new Daat from form
   */
  getData(e) {
    this.dataForm = e;
  }

  /***
   * get Updated data when edit
   */
  getUpdatedData(data: any) {
    this.listDataTodos = data;
    this.todosCompleted = data.filter(data => data.completed === true);
    const c = Math.ceil(this.todosCompleted.length / data.length * 100);
    this.progress = c;
  }

}
