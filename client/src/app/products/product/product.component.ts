/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Product} from "../shared/product.model";
import {ProductService} from "../shared/product.service";
import {Response} from "@angular/http";

@Component({
    selector: 'product',
    templateUrl: './src/app/products/product/product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy{
    private sub: Subscription;
    id: number;
    product: Product = new Product("none", 10);

    constructor(private route: ActivatedRoute, private productService: ProductService) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.productService.getProduct(params['id']).subscribe((data: Response) => {
                this.product = data.json();
            });
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}