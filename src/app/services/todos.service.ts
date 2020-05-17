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

  contextPath = 'rest/todos';

  //todoPath: string = 'todos';
  
  constructor(private http: HttpClient) {
    console.log("Construction");
   }

  getTodos() {        
    return this.http
                .get<Array<Todo>>(environment.apiUrl + '/' + this.contextPath,
                  { headers: {'Content-Type': 'application/json',
                              'ionis-group': environment.groupeName}
                })
                .pipe(
                  catchError(this.handleError)
                );
  }

  getTodoById(id: number) {        
    return this.http
                .get<Todo>(environment.apiUrl + '/' + this.contextPath + '/' + id,
                  { headers: {'Content-Type': 'application/json',
                              'ionis-group': environment.groupeName}  
                })
                .pipe(
                  catchError(this.handleError)
                )
  }

  creerTodo(todo: Todo){
    console.log(JSON.stringify(todo));
    return this.http
                .post<Todo>(environment.apiUrl + '/' + this.contextPath,
                JSON.stringify(todo),
                  { headers: {'Content-Type': 'application/json',
                              'ionis-group': environment.groupeName}
                })
                .pipe(
                  catchError(this.handleError)
                );
  }

  modifierTodo(todo: Todo) {        
    return this.http
                .put<Todo>(environment.apiUrl + '/' + this.contextPath + '/' + todo.id,
                JSON.stringify(todo),
                  { headers: {'Content-Type': 'application/json',
                              'ionis-group': environment.groupeName}
                })
                .pipe(
                  catchError(this.handleError)
                );
  }

  supprimerTodo(id: number) {
    return this.http
                .delete(environment.apiUrl + '/' + this.contextPath + '/' + id,
                  { headers: {'Content-Type': 'application/json',
                              'ionis-group': environment.groupeName}
                })
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
