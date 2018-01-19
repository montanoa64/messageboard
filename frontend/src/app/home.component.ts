import { Component } from '@angular/core';
// import messages component
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';






@Component({
  selector: 'app-home',
  template: `
  <messages></messages>
  <new-message></new-message>
  `,
  styleUrls: ['./app.component.css']
})
export class HomeComponent {
}
