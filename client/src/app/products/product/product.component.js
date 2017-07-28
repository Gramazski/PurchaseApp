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
var product_model_1 = require("../shared/product.model");
var product_service_1 = require("../shared/product.service");
var ProductComponent = (function () {
    function ProductComponent(route, productService) {
        this.route = route;
        this.productService = productService;
        this.product = new product_model_1.Product("none", 10);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.productService.getProduct(params['id']).subscribe(function (data) {
                _this.product = data.json();
            });
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'product',
        templateUrl: './src/app/products/product/product.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map