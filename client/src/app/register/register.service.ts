/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../shared/user/user.model';
import {LoggedControlService} from "../shared/helpers/logged-control.service";

@Injectable()
export class RegisterService {
    constructor(private http: Http, private loggedControlService: LoggedControlService){}

    create(user: User) {
        return this.http.post('/users/register', {"user": user})
            .map((response: Response) => {
                return response.json();
            });
    }
}