"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductOverviewComponent = (function () {
    function ProductOverviewComponent(route) {
        this.route = route;
    }
    ProductOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.parentRouteId = params["id"];
        });
    };
    ProductOverviewComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductOverviewComponent;
}());
ProductOverviewComponent = __decorate([
    core_1.Component({
        selector: 'product-overview',
        templateUrl: './src/app/products/product-overview/product-overview.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ProductOverviewComponent);
exports.ProductOverviewComponent = ProductOverviewComponent;
//# sourceMappingURL=product-overview.component.js.map