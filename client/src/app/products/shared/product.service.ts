/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

@Injectable()
export class ProductService{
    constructor(private http: Http){}

    getAllProducts(){
        return this.http.get("/products");
    }
}