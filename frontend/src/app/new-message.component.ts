// import component library
import { Component, Output, EventEmitter } from '@angular/core';

import { WebService } from './web.service';
// decorator will allow to mark the class as components and provide metadata on how components behave
@Component({
    // this will make the <messages></messages>
    selector: getSelector(),
    template: `
    <mat-card class="card">
        <mat-card-content>
            <mat-input-container>
                <input [(ngModel)]="message.owner" matInput placeholder="Name">
            </mat-input-container>
            <mat-input-container>
                <textarea [(ngModel)]="message.text" matInput placeholder="Message"></textarea>
            </mat-input-container>
            <mat-card-actions>
                <button (click)="post()" mat-button color="primary">POST</button>
            </mat-card-actions>
        </mat-card-content>
    </mat-card>
    `
})
export class NewMessageComponent {
    // in app.compenents there is an event listening for this onPosted
    @Output() onPosted = new EventEmitter();
    // constructor. inject webservice into it
    constructor(private webService: WebService) {
    }
    message = {
        owner: 'test',
        text: '',
    };
    owner = 'test';
    // function to post the messages
    post() {
        this.webService.postMessage(this.message);
        this.onPosted.emit(this.message);
    }
}
// new way of doing things i guess
function getSelector(): string {
    return 'new-message';
}
