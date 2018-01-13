import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import 'rxjs/add/operator/toPromise';
import { Injectable, Output } from '@angular/core';

@Injectable()

export class WebService {
    BASE_URL = 'http://localhost:53205/api';
    messages = [];
    // class constructor
    // save local reference that we will access inside our get message function
    constructor(private http: Http, private sb: MatSnackBar) {
        this.getMessages();
    }
    // return messages with http call
    async getMessages() {
        // call get function to get the messages with an api call

        try {
            let response = await this.http.get(this.BASE_URL + '/messages').toPromise();
            this.messages = response.json();
            //this.messages.reverse();
        } catch (error) {
           this.handleError('Unable to get message');
        }

    }
    // to post message
    async postMessage(message) {
        try {
            let response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
        this.messages.push(response.json());
        } catch (error) {
            this.handleError('Unable to post message');
        }

    }

    private handleError(error){
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
    }

}
