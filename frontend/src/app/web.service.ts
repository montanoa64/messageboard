import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {
    BASE_URL = 'http://localhost:61433/api';
    // class constructor
    // save local reference that we will access inside our get message function
    constructor(private http: Http) {

    }
    // return messages with http call
    getMessages() {
        // call get function to get the messages with an api call
        return this.http.get(this.BASE_URL + '/messages').toPromise();
    }
    // to post message
    postMessage(message) {
        return this.http.post(this.BASE_URL + '/messages', message).toPromise();

    }
}
