import { AuthService } from './auth.service';
import { Http } from '@angular/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import { Injectable, Output } from '@angular/core';


@Injectable()

export class WebService {
    BASE_URL = 'http://localhost:53205/api';
    private messagesStore = [];
    private messageSubjet = new Subject();
    messages = this.messageSubjet.asObservable();
    // class constructor
    // save local reference that we will access inside our get message function
    constructor(private http: Http, private sb: MatSnackBar, private auth: AuthService) {
        this.getMessages();
    }
    // return messages with http call
    getMessages(user) {
        // call get function to get the messages with an api call
            user = (user) ? '/' + user : '';
            this.http.get(this.BASE_URL + '/messages' + user).subscribe(response => {
                this.messagesStore = response.json();
                this.messageSubjet.next(this.messagesStore);
            }, error => {
                this.handleError('Unable to get message');
            });
    }
    // to post message
    async postMessage(message) {
        try {
            let response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messagesStore.push(response.json());
            this.messageSubjet.next(this.messagesStore);
        } catch (error) {
            this.handleError('Unable to post message');
        }

    }

    getUser() {
        return this.http.get(this.BASE_URL + '/user/me', this.auth.tokenHeader).map(res => res.json());
    }

    private handleError(error) {
        console.error(error);
        this.sb.open(error, 'close', {duration: 2000});
    }

}
