/**
 * Created by Stanislau_Hramatskiu on 7/27/2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class LangsLoaderService{
    constructor(private http: Http){}

    getLangs(){
        return this.http.get('/data/langs.json');
    }
}