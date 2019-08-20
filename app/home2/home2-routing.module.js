"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var home_component_1 = require("./home2.component");
var routes = [
    { path: "", component: home_component_1.HomeComponent }
];
var HomeRoutingModule = /** @class */ (function () {
    function Home2RoutingModule() {
    }
    Home2RoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], Home2RoutingModule);
    return Home2RoutingModule;
}());
exports.Home2RoutingModule = Home2RoutingModule;
