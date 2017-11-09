import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
 } from '@angular/material';
 import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { WebService } from './web.service';




@NgModule({
  // register all components
  declarations: [
    AppComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    HttpModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
