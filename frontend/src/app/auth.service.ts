import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
    BASE_URL = 'http://localhost:53205/auth';
    constructor(private http: Http) {
    }
    register(user) {
        this.http.post(this.BASE_URL + '/register', user).subscribe();
    }
}
