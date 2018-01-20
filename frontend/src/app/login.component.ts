import { AuthService } from './auth.service';
// import component library
import { Component } from '@angular/core';


// decorator will allow to mark the class as components and provide metadata on how components behave
@Component({
    // this will make the <messages></messages>
    selector: 'app-login',
    template: `
    `
})
export class LoginComponent {
    constructor(private auth: AuthService) {
    }
}
// new way of doing things i guess

