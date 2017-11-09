import { Component, ViewChild } from '@angular/core';
// import messages component
import { MessagesComponent } from './messages.component';
import { NewMessageComponent } from './new-message.component';




@Component({
  selector: 'app-root',
  template: `
  <h1>Message Board</h1>
  <new-message (onPosted)="onPosted($event)"></new-message>
  <messages></messages>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // listens to the child component for posted messages
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  onPosted(message) {
    // save message in messages array
    this.messages.messages.push(message);
  }
}
