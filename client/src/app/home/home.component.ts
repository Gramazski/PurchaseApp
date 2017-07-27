/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
import {Component} from "@angular/core";
import {Product} from "../products/shared/product.model";
import {Response} from "@angular/http";
import {ProductService} from "../products/shared/product.service";

@Component({
    selector: 'home-component',
    templateUrl: './src/app/home/home.component.html'
})
export class HomeComponent{
    items: Product[];

    constructor(private productService: ProductService){}

    ngOnInit(){
        this.productService.getAllProducts().subscribe((data: Response) => {
            console.log(data);
            this.items = data.json();
        });
    }

    addItem(text: string, price: number): void {

        if(text==null || text==undefined || text.trim()=="")
            return;
        if(price==null || price==undefined)
            return;

        this.items.push(new Product(text, price));
    }
}