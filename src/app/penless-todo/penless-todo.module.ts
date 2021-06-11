import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenlessTodoRoutingModule } from './penless-todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoFormComponent],
  imports: [
    CommonModule,
    PenlessTodoRoutingModule,
    SharedModule
  ]
})
export class PenlessTodoModule { }
