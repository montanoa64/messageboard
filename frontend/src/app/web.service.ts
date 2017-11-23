import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';

@Injectable()

export class WebService {
    BASE_URL = 'http://localhost:61433/api';
    messages = [];
    // class constructor
    // save local reference that we will access inside our get message function
    constructor(private http: Http) {
        this.getMessages();
    }
    // return messages with http call
    async getMessages() {
        // call get function to get the messages with an api call
        let response = await this.http.get(this.BASE_URL + '/messages').toPromise();
        this.messages = response.json();
    }
    // to post message
    async postMessage(message) {
        let response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
        this.messages.push(response.json());

    }
}
