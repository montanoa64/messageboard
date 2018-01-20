import { AuthService } from './auth.service';
// import component library
import { Component } from '@angular/core';


// decorator will allow to mark the class as components and provide metadata on how components behave
@Component({
    // this will make the <messages></messages>
    selector: 'app-login',
    template: `
        <mat-card>
            <mat-input-container>
                <input matInput [(ngModel)] = "loginData.email" placeholder = "Email" type = "email">
            </mat-input-container>
            <mat-input-container>
                <input matInput [(ngModel)] = "loginData.password" placeholder = "Password" type = "password">
            </mat-input-container>
            <button mat-raised-button color="primary" (click) = "login()">Login</button>
        </mat-card>
    `
})
export class LoginComponent {
    constructor(private auth: AuthService) {
    }
    loginData = {
        email: '',
        password: ''
    };
    login() {
        this.auth.login(this.loginData);
    }
}
// new way of doing things i guess

