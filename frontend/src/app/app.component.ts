import { Component } from '@angular/core';
// import messages component
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';




@Component({
  selector: 'app-root',
  template: `
  <h1>Message Board</h1>
  <new-message></new-message>
  <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
