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
var lang_selector_service_1 = require("./lang-selector.service");
var LangSelectorComponent = (function () {
    function LangSelectorComponent(langSelectorService) {
        this.langSelectorService = langSelectorService;
    }
    LangSelectorComponent.prototype.ngOnInit = function () {
        this.langs = this.langSelectorService.getLangList();
        this.selectedLang = this.langSelectorService.getCurrentLang();
    };
    LangSelectorComponent.prototype.onChange = function (newLang) {
        if (this.selectedLang !== newLang) {
            this.selectedLang = this.langSelectorService.setNewLang(newLang);
        }
    };
    return LangSelectorComponent;
}());
LangSelectorComponent = __decorate([
    core_1.Component({
        selector: 'lang-selector',
        templateUrl: 'src/app/shared/lang-selector/lang-selector.component.html'
    }),
    __metadata("design:paramtypes", [lang_selector_service_1.LangSelectorService])
], LangSelectorComponent);
exports.LangSelectorComponent = LangSelectorComponent;
//# sourceMappingURL=lang-selector.component.js.map