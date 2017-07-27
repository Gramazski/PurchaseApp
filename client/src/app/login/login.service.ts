/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {LoggedControlService} from "../shared/helpers/logged-control.service";

@Injectable()
export class LoginService {
    constructor(private http: Http, private loggedControlService: LoggedControlService) { }

    login(username: string, password: string) {
        return this.http.post('/users/login', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.loggedControlService.login(user);
                }

                return user;
            });
    }

    logout(): void{
        this.loggedControlService.logout();
    }
}