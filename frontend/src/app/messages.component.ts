// import component library
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WebService } from './web.service';
// decorator will allow to mark the class as components and provide metadata on how components behave
@Component({
    // this will make the <messages></messages>
    selector: getSelector(),
    // getting messages.length from the array in MessagesComponent
    // *ng will for loop
    template: `
    <div *ngFor="let message of webService.messages | async">
        <mat-card class="card">
            <mat-card-title><a [routerLink]="['/messages', message.owner]">{{ message.owner}}</a></mat-card-title>
            <mat-card-content>{{message.text}}</mat-card-content>
        </mat-card>
    </div>
    `
})
export class MessagesComponent {
    // constructor. inject webservice into it
    constructor(private webService: WebService, private route: ActivatedRoute) {
    }
    ngOnInit() {
        const name = (this.route.snapshot.params.name);
        this.webService.getMessages(name);
        this.webService.getUser().subscribe();
    }
}
// new way of doing things i guess
function getSelector(): string {
    return 'messages';
}

