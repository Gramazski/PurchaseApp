/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'product-specs',
    templateUrl: './src/app/products/product-specs/product-specs.component.html'
})
export class ProductSpecsComponent implements OnInit, OnDestroy{
    private sub: any;

    private parentRouteId: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.parent.params.subscribe(params => {
            this.parentRouteId = +params["id"];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}