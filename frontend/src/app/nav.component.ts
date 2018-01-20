import { AuthService } from './auth.service';
// import component library
import { Component } from '@angular/core';


// decorator will allow to mark the class as components and provide metadata on how components behave
@Component({
    // this will make the <messages></messages>
    selector: getSelector(),
    template: `
    <mat-toolbar color="primary">
       <button mat-button routerLink="/">Message Board</button>
       <button mat-button routerLink="/messages">Messages</button>
       <span style="flex: 1 1 auto"></span>
       <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/login">Login</button>
       <button *ngIf="!auth.isAuthenticated" mat-button routerLink="/register">Register</button>
       <button *ngIf="auth.isAuthenticated"mat-button routerLink="/">Welcome {{auth.name}}</button>
       <button *ngIf="auth.isAuthenticated"mat-button (click) = "auth.logout()">Logout</button>
    </mat-toolbar>
    `
})
export class NavComponent {
    constructor(private auth: AuthService) {
    }
}
// new way of doing things i guess
function getSelector(): string {
    return 'nav';
}
