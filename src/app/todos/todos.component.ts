import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';
import { error } from 'protractor';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ns-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<Todo> = [];
  currentTodo: Todo;

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
    console.log('In ngOnInit');
    this.todosService.getTodos().subscribe(
      (data: Array<Todo>) => {
        this.todos = data;
        // console.log(this.contacts);
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText + ' - ' +error.message);
      },
      () => {
        console.log('Done.');
      }
    );
  }
/*
  getTodos(event: any) {
    this.todosService.getTodos()
        .subscribe(
          (data: Array<Todo>) => {
            this.todos = data;
            // console.log(this.contacts);
          },
          (error: Error) => {
            console.error(error.message);
          }
        )
  }*/
}
