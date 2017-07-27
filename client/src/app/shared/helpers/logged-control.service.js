"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Stanislau_Hramatskiu on 7/24/2017.
 */
var core_1 = require("@angular/core");
var LoggedControlService = (function () {
    function LoggedControlService() {
        this._isLoggedIn = localStorage.getItem('currentUser') == null;
    }
    Object.defineProperty(LoggedControlService.prototype, "isLoggedIn", {
        get: function () {
            return this._isLoggedIn;
        },
        set: function (isLoggedIn) {
            this._isLoggedIn = isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    LoggedControlService.prototype.login = function (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this._isLoggedIn = true;
    };
    LoggedControlService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this._isLoggedIn = false;
    };
    return LoggedControlService;
}());
LoggedControlService = __decorate([
    core_1.Injectable()
], LoggedControlService);
exports.LoggedControlService = LoggedControlService;
//# sourceMappingURL=logged-control.service.js.map