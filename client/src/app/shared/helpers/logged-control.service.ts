/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Injectable} from "@angular/core";
import {User} from "../user/user.model";

@Injectable()
export class LoggedControlService{
    private _isLoggedIn : boolean = localStorage.getItem('currentUser') == null;

    get isLoggedIn(): boolean {
        return this._isLoggedIn;
    }

    set isLoggedIn(isLoggedIn: boolean){
        this._isLoggedIn = isLoggedIn;
    }

    login(user: User): void{
        localStorage.setItem('currentUser', JSON.stringify(user));
        this._isLoggedIn = true;
    }

    logout(): void{
        localStorage.removeItem('currentUser');
        this._isLoggedIn = false;
    }
}