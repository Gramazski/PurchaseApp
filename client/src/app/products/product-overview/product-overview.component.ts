/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: 'product-overview',
    templateUrl: './src/app/products/product-overview/product-overview.component.html'
})
export class ProductOverviewComponent implements OnInit, OnDestroy{
    private sub: any;

    private parentRouteId: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.parent.params.subscribe(params => {
            this.parentRouteId = params["id"];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}