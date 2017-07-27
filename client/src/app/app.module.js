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
 * Created by Stanislau_Hramatskiu on 7/20/2017.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var app_component_1 = require("./app.component");
var login_service_1 = require("./login/login.service");
var register_service_1 = require("./register/register.service");
var app_routing_module_1 = require("./app-routing.module");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./home/home.component");
var user_guard_1 = require("./shared/user/user.guard");
var custom_http_1 = require("./shared/helpers/custom-http");
var top_menu_component_1 = require("./shared/menu/top-menu.component");
var alert_component_1 = require("./shared/alert/alert.component");
var alert_service_1 = require("./shared/alert/alert.service");
var logged_control_service_1 = require("./shared/helpers/logged-control.service");
var product_service_1 = require("./products/shared/product.service");
var product_list_component_1 = require("./products/product-list/product-list.component");
var product_specs_component_1 = require("./products/product-specs/product-specs.component");
var product_overview_component_1 = require("./products/product-overview/product-overview.component");
var product_component_1 = require("./products/product/product.component");
var AppModule = (function () {
    function AppModule(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('ru');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('ru');
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_module_1.routing, core_2.TranslateModule.forRoot({
                loader: {
                    provide: core_2.TranslateLoader,
                    useFactory: function (http) { return new http_loader_1.TranslateHttpLoader(http, '/i18n/', '.json'); },
                    deps: [http_1.Http]
                }
            })],
        providers: [login_service_1.LoginService, register_service_1.RegisterService, product_service_1.ProductService, user_guard_1.UserGuard, custom_http_1.customHttpProvider, alert_service_1.AlertService, logged_control_service_1.LoggedControlService],
        declarations: [app_component_1.AppComponent, register_component_1.RegisterComponent, login_component_1.LoginComponent, home_component_1.HomeComponent, top_menu_component_1.TopMenuComponent, alert_component_1.AlertComponent, product_list_component_1.ProductListComponent,
            product_specs_component_1.ProductSpecsComponent, product_overview_component_1.ProductOverviewComponent, product_component_1.ProductComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [core_2.TranslateService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map