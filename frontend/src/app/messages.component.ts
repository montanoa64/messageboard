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
    <div *ngFor="let message of messages">
        <mat-card class="card">
            <mat-card-title>{{ message.owner}}</mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})
export class MessagesComponent {
    // create an empty list of messages
    messages = [];
    // constructor. inject webservice into it
    constructor(private webService: WebService) {
    }
    // gets call once the component gets done initializing and constructor gets call
    // tslint:disable-next-line:use-life-cycle-interface
    async ngOnInit() {
        // tslint:disable-next-line:no-var-keyword
        // tslint:disable-next-line:prefer-const no-var-keyword
        var response = await this.webService.getMessages(); // gets messages from back end
        // tslint:disable-next-line:prefer-const no-var-keyword
        let parse = response.json();
        this.messages = parse;


    }
    // messages = this.ngOnInit();
}
// new way of doing things i guess
function getSelector(): string {
    return 'messages';
}

