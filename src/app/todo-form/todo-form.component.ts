import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'ns-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo: Todo = new Todo();

  submitted = false;

  constructor(private todosService:TodosService) {
  }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.submitted = true; 
    // this.todo.dateExecution = new Date();
    this.todo.groupeName = environment.groupeName;
    this.todosService.creerTodo(this.todo).subscribe(
      (data: Todo) => {
        this.todo = data;
        console.log(JSON.stringify(this.todo));
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText + ' - ' + error.message);
      },
      () => {
        console.log('Done: Create Todo.');
      });
    // alert("Appel de création du Todo effectué");
  }

  newTodo() {
    this.todo = new Todo();
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.todo); }

  isTitreValide() {
    return this.isValid(this.todo.titre);
  }

  isDescriptionValide() {
    return this.isValid(this.todo.description);
  }

  isDateValide() {
    return this.isValid(this.todo.dateExecution);
  }

  isCreationPossible() {
    this.isTitreValide() &&
    this.isDescriptionValide() &&
    this.isDateValide();
  }

  isValid(valeur:any){
    return valeur;
  }
}
