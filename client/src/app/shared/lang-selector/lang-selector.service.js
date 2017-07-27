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
 * Created by Stanislau_Hramatskiu on 7/27/2017.
 */
var core_1 = require("@angular/core");
var ngx_cookie_1 = require("ngx-cookie");
var core_2 = require("@ngx-translate/core");
var langs_loader_service_1 = require("./langs-loader.service");
var LangSelectorService = (function () {
    function LangSelectorService(cookieService, translateService, langsLoaderService) {
        var _this = this;
        this.cookieService = cookieService;
        this.translateService = translateService;
        this.langsLoaderService = langsLoaderService;
        this.langsLoaderService.getLangs().subscribe(function (data) {
            _this.translateService.addLangs(data.json().langs);
            _this.translateService.setDefaultLang(data.json().defaultLang);
        });
    }
    LangSelectorService.prototype.getCurrentLang = function () {
        return this.cookieService.get('LANG') || this.saveNewLang(this.translateService.getDefaultLang());
    };
    LangSelectorService.prototype.getLangList = function () {
        return this.translateService.getLangs();
    };
    LangSelectorService.prototype.getStartLang = function () {
        return this.cookieService.get('LANG') || this.setNewLang(this.translateService.getBrowserLang());
    };
    LangSelectorService.prototype.setNewLang = function (newLang) {
        this.translateService.use(newLang);
        return this.saveNewLang(this.translateService.currentLang);
    };
    LangSelectorService.prototype.saveNewLang = function (newLang) {
        this.cookieService.put('LANG', newLang);
        return newLang;
    };
    return LangSelectorService;
}());
LangSelectorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [ngx_cookie_1.CookieService, core_2.TranslateService, langs_loader_service_1.LangsLoaderService])
], LangSelectorService);
exports.LangSelectorService = LangSelectorService;
//# sourceMappingURL=lang-selector.service.js.map