import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/todo';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  httpOptions = {
    headers: new HttpHeaders({
      'ionis-group': 'A'
    })
  };

  todoPath: string = 'todos';
  
  constructor(private http: HttpClient) {
    console.log("Construction");
   }

  getTodos() {        
    return this.http
                .get<Array<Todo>>(environment.apiUrl + this.todoPath,
                  this.httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getTodoById(id: number) {        
    return this.http
                .get<Todo>(environment.apiUrl + this.todoPath + '/' + id,
                  this.httpOptions)
                .pipe(
                  catchError(this.handleError)
                )
  }

  creerTodo(newTodo: Todo) {        
    return this.http
                .post(environment.apiUrl + this.todoPath,newTodo,
                  this.httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  modifierTodo(todoModifie: Todo) {        
    return this.http
                .put(environment.apiUrl + this.todoPath, todoModifie,
                  this.httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  supprimerTodo(id: number) {
    return this.http
                .delete(environment.apiUrl + this.todoPath + '/' + id,
                  this.httpOptions)
                .pipe(
                  catchError(this.handleError)
                );
  }

  private handleError(error: HttpErrorResponse) {
    // message:String;
    // alert("Erreur");
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly. 
      alert("Erreur : "+ /*console.error(*/"An error occurred:" + /*,*/ error.error.message); //);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert("Erreur : " +
        "Backend returned code " + error.status +
        "body was: " + error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
