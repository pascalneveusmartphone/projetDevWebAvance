import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// import { ContactFormComponent } from './contact-form/contact-form.component';
import { TodosComponent } from './todos/todos.component';
// import { RouterFormComponent } from './router-form/router-form.component';
// import { HomeComponent } from './router-form/views/home/home.component';
// import { AdminComponent } from './router-form/views/admin/admin.component';
import { RouterModule } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
// import { ROUTES } from './app.routes';
//import { Contacts2Component } from './contacts2/contacts2.component';

@NgModule({
  declarations: [
    AppComponent,
    // ContactFormComponent,
    TodosComponent,
    TodoFormComponent,
    /*RouterFormComponent,
    HomeComponent,
    AdminComponent,
    Contacts2Component*/
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
