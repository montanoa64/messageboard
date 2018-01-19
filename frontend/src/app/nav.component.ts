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
       <button mat-button routerLink="/register">Registers</button>
    </mat-toolbar>
    `
})
export class NavComponent {
}
// new way of doing things i guess
function getSelector(): string {
    return 'nav';
}
