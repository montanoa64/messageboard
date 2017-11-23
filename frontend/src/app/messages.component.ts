// import component library
import { Component } from '@angular/core';

import { WebService } from './web.service';
// decorator will allow to mark the class as components and provide metadata on how components behave
@Component({
    // this will make the <messages></messages>
    selector: getSelector(),
    // getting messages.length from the array in MessagesComponent
    // *ng will for loop
    template: `
    <div *ngFor="let message of webService.messages">
        <mat-card class="card">
            <mat-card-title>{{ message.owner}}</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})
export class MessagesComponent {
    // constructor. inject webservice into it
    constructor(private webService: WebService) {
    }
}
// new way of doing things i guess
function getSelector(): string {
    return 'messages';
}

