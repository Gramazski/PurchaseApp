"use strict";
/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var Product = (function () {
    function Product(purchase, price) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map