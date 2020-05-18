import { Routes } from '@angular/router';
import { HomeComponent } from './router-form/views/home/home.component';
import { AdminComponent } from './router-form/views/admin/admin.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { DetailTodoComponent } from './detail-todo/detail-todo.component';
import { ModifTodoFormComponent } from './modifTodo-form/modifTodo-form.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todos', component:TodosComponent},
  { path: 'createTodo', component:TodoFormComponent},
  { path: 'todo/:id', component: DetailTodoComponent },
  { path: 'modifTodo/:id', component: ModifTodoFormComponent },
];
