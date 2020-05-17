import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { RouterFormComponent } from './router-form/router-form.component';
import { ROUTES } from './app.routes';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { ModifTodoFormComponent } from './modifTodo-form/modifTodo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    RouterFormComponent,
    DetailTodoComponent,
    ModifTodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
