"use strict";
/**
 * Created by Stanislau_Hramatskiu on 7/21/2017.
 */
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var user_guard_1 = require("./shared/user/user.guard");
var product_list_component_1 = require("./products/product-list/product-list.component");
var product_component_1 = require("./products/product/product.component");
var product_overview_component_1 = require("./products/product-overview/product-overview.component");
var product_specs_component_1 = require("./products/product-specs/product-specs.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, canActivate: [user_guard_1.UserGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent, canActivate: [user_guard_1.UserGuard] },
    { path: 'products/:id', component: product_component_1.ProductComponent, canActivate: [user_guard_1.UserGuard], canActivateChild: [user_guard_1.UserGuard], children: [
            { path: 'overview', component: product_overview_component_1.ProductOverviewComponent },
            { path: 'specs', component: product_specs_component_1.ProductSpecsComponent }
        ] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app-routing.module.js.map