import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'ns-modifTodo-form',
  templateUrl: './modifTodo-form.component.html',
  styleUrls: ['./modifTodo-form.component.css']
})
export class ModifTodoFormComponent implements OnInit {

  todo: Todo;

  submitted = false;

  constructor(
    private todosService:TodosService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
        this.todosService.getTodoById(id)
            .subscribe((todo: any) => this.todo = todo);
  }

  onSubmit() { 
    this.submitted = true; 
    // this.todo.dateExecution = new Date();
    /*this.todo.groupeName = environment.groupeName;*/
    this.todosService.modifierTodo(this.todo).subscribe(
      (data: Todo) => {
        this.todo = data;
        console.log(JSON.stringify(this.todo));
      },
      (error: HttpErrorResponse) => {
        console.error(error.statusText + ' - ' + error.message);
      },
      () => {
        console.log('Done: Update Todo.');
      });
    // alert("Appel de création du Todo effectué");
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

  isSaisieOK() {
    return this.isTitreValide() &&
    this.isDescriptionValide() &&
    this.isDateValide();
  }

  isValid(valeur:any){
    return valeur;
  }

  retour(): void {
    this.router.navigate(['/todos']);
    
  }

  accueil():void {
    this.router.navigate(['']);
  }

  ecranPrecedent():void {
    window.history.back();
  }
  
}
