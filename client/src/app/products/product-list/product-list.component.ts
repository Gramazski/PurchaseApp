/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Component, OnInit} from "@angular/core";
import {Product} from "../shared/product.model";
import {Response} from "@angular/http";
import {ProductService} from "../shared/product.service";

@Component({
    selector: 'home-component',
    templateUrl: './src/app/products/product-list/product-list.component.html'
})
export class ProductListComponent implements OnInit{
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