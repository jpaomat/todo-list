import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { ListComponent } from './list/list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, CreateListComponent, UpdateListComponent, DeleteListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TodoListRoutingModule,
  ]
})
export class TodoListModule { }
