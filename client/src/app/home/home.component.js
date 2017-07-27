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
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var core_1 = require("@angular/core");
var product_model_1 = require("../products/shared/product.model");
var product_service_1 = require("../products/shared/product.service");
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (data) {
            console.log(data);
            _this.items = data.json();
        });
    };
    HomeComponent.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "")
            return;
        if (price == null || price == undefined)
            return;
        this.items.push(new product_model_1.Product(text, price));
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-component',
        templateUrl: './src/app/home/home.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map