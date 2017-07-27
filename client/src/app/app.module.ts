/**
 * Created by Stanislau_Hramatskiu on 7/20/2017.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CookieModule} from 'ngx-cookie';

import { AppComponent }   from './app.component';
import {LoginService} from "./login/login.service";
import {RegisterService} from "./register/register.service";
import {routing} from "./app-routing.module";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UserGuard} from "./shared/user/user.guard";
import {customHttpProvider} from "./shared/helpers/custom-http";
import {TopMenuComponent} from "./shared/menu/top-menu.component";
import {AlertComponent} from "./shared/alert/alert.component";
import {AlertService} from "./shared/alert/alert.service";
import {LoggedControlService} from "./shared/helpers/logged-control.service";
import {ProductService} from "./products/shared/product.service";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {ProductSpecsComponent} from "./products/product-specs/product-specs.component";
import {ProductOverviewComponent} from "./products/product-overview/product-overview.component";
import {ProductComponent} from "./products/product/product.component";
import {LangSelectorService} from "./shared/lang-selector/lang-selector.service";
import {LangSelectorComponent} from "./shared/lang-selector/lang-selector.component";
import {LangsLoaderService} from "./shared/lang-selector/langs-loader.service";

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing, TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateHttpLoader(http, '/i18n/', '.json'),
            deps: [Http]
        }
    }), CookieModule.forRoot() ],
    providers: [LoginService, RegisterService, ProductService, UserGuard, customHttpProvider, AlertService, LoggedControlService, LangSelectorService, LangsLoaderService],
    declarations: [ AppComponent, RegisterComponent, LoginComponent, HomeComponent, TopMenuComponent, AlertComponent, ProductListComponent,
        ProductSpecsComponent, ProductOverviewComponent, ProductComponent, LangSelectorComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {
    constructor(langSelectorService: LangSelectorService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        langSelectorService.setNewLang(langSelectorService.getStartLang());
    }
}