import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {
    // class constructor
    // save local reference that we will access inside our get message function
    constructor(private http: Http) {

    }
    // return messages with http call
    getMessages() {
        // call get function to get the messages with an api call
        return this.http.get('http://localhost:61433/api/messages').toPromise();
    }
}
