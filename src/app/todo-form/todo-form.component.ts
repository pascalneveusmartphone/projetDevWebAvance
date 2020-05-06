import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'ns-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo;// = new Todo(/*21, 'John', 'Dooh', 'Super Flexible',41*/);

  submitted = false;

  constructor(private todosService:TodosService) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    alert("Création du Todo");
    /*this.http.get(environment.apiUrl + 'todos/' + this.todo.age).subscribe(
      (data: Todo) => {
        this.todo = data;
        console.log(JSON.stringify(this.todo));
      }
      )*/
  }

  newTodo() {
    this.todo = new Todo(null,null,null);
  }

  // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.todo); }
}
