import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Todo } from '../model/todo';
//import { TODOS } from '../mock-todos';
import { TodosService } from '../services/todos.service';



@Component({
    selector: 'detail-todos',
    templateUrl: './detail-todo.component.html'
})
export class DetailTodoComponent implements OnInit {
  
    todo: Todo = null;
  
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private todoService: TodosService) {}
   
    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.todoService.getTodoById(id)
            .subscribe((todo: any) => this.todo = todo);
        
    }

    retour(): void {
        this.router.navigate(['/todos']);
    }
    
    deleteTodo(id: number): void {
        this.todoService.supprimerTodo(id)
            .subscribe(todo => this.todo/* = todo*/);
        this.router.navigate(['/todos']);
    }

    accueil():void {
        this.router.navigate(['']);
    }
  
    modifierTodo(todo: Todo){
        let link = ['/modifTodo', todo.id];
            this.router.navigate(link);
    }
}