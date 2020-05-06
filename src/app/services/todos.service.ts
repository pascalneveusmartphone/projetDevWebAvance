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

  todoPath: string = 'todos';
  headers: HttpHeaders;
  //httpHeaders:HttpHeaders;
  options: {
    headers?: HttpHeaders, /*| {[header: string]: string | string[]},*/
    observe?: 'body', // | 'events' | 'response',
    // params?: HttpParams|{[param: string]: string | string[]},
    // reportProgress?: boolean,
    responseType?: /*'arraybuffer'|'blob'|*/'json', //|'text',
    // withCredentials?: boolean,
  }

  constructor(private http: HttpClient) {
    console.log("Construction");
   // httpHeaders:HttpHeaders;
    this.headers = new HttpHeaders();
    this.headers.append('ionis-group','A');  
    this.options = {"headers":this.headers}; // ,"observe":'body',responseType:'json'};
    /*[
      this.headers,
      observe?: 'body',
      responseType?: 'json',
    ];*/
   }

  getTodos() {        
    return this.http
                .get<Array<Todo>>(environment.apiUrl + this.todoPath,
                  this.options)
                .pipe(
                  catchError(this.handleError)
                );
  }

  getTodoById(id: number) {        
    return this.http
                .get<Todo>(environment.apiUrl + this.todoPath + '/' + id,
                  this.options)
                .pipe(
                  catchError(this.handleError)
                )
  }

  creerTodo(newTodo: Todo) {        
    return this.http
                .post(environment.apiUrl + this.todoPath,newTodo,
                  this.options)
                .pipe(
                  catchError(this.handleError)
                );
  }

  modifierTodo(todoModifie: Todo) {        
    return this.http
                .put(environment.apiUrl + this.todoPath, todoModifie,
                  this.options)
                .pipe(
                  catchError(this.handleError)
                );
  }

  supprimerTodo(id: number) {
    return this.http
                .delete(environment.apiUrl + this.todoPath + '/' + id,
                  this.options)
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
