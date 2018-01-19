import { RouterModule } from '@angular/router';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
 } from '@angular/material';
 import { HttpModule } from '@angular/http';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';
import { AuthService } from './auth.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { Router } from '@angular/router/src/router';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';


const routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
}, {
  path: 'messages/:name',
  component: MessagesComponent
}, {
  path: 'register',
  component: RegisterComponent
}];



@NgModule({
  // register all components
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
