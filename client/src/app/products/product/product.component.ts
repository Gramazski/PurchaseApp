/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'product',
    templateUrl: './src/app/products/product/product.component.html'
})
export class ProductComponent implements OnInit, OnDestroy{
    private sub: Subscription;
    id: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}