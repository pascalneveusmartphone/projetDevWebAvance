import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'ns-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = new Todo(100, null,null,null);

  submitted = false;

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    this.todosService.creerTodo(this.todo);
    alert("Appel de création du Todo effectué");
  }

  newTodo() {
    this.todo = new Todo(100,null,null,null);
  }

  // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.todo); }
}
