require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./details/details.module": [
		"./details/details.module.ts",
		2
	],
	"./home/home.module": [
		"./home/home.module.ts",
		"vendor",
		0
	],
	"./home2/home2.module": [
		"./home2/home2.module.ts",
		"vendor",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./animations-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
    }
    Object.defineProperty(AnimationsService.prototype, "animationOffset", {
        get: function () {
            return this._animationOffset;
        },
        set: function (offset) {
            this._animationOffset = offset;
        },
        enumerable: true,
        configurable: true
    });
    AnimationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AnimationsService);
    return AnimationsService;
}());



/***/ }),

/***/ "./app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var routes = [
    { path: "", redirectTo: "/home2", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "home2", loadChildren: "./home2/home2.module#Home2Module" },
    { path: "details", loadChildren: "./details/details.module#DetailsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app.component.html":
/***/ (function(module, exports) {

module.exports = "<RadSideDrawer drawerTransition=\"PushTransition\">\n\n    <GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n        <StackLayout class=\"sidedrawer-header\">\n            <Image src=\"https://media.licdn.com/dms/image/C510BAQGA83GxGiUWCA/company-logo_200_200/0?e=2159024400&v=beta&t=T5oQHN3JjzOCRdI5OKaoGRNQsAcLfH8K2qFT2UILpCQ\"\n                class=\"sidedrawer-avatar\"></Image>\n            <Label class=\"sidedrawer-header-text var\" text=\"Filters\"></Label>\n        </StackLayout>\n\n        <ScrollView row=\"1\">\n            <StackLayout class=\"sidedrawer-content\">\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"Home\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf007;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Food\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"Friends\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf007;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Clubs\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"To-Do List\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf0ca;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Coffee\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"Settings\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf013;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Shops\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n            </StackLayout>\n        </ScrollView>\n    </GridLayout>\n\n    <page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\n</RadSideDrawer>"

/***/ }),

/***/ "./app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, ".fa {\n    font-family: \"FontAwesome\";\n}\n\n.action-bar {\n    background-color: #48b1ec;\n}\n\n.ab-icon {\n    color: white;\n}\n\n.page-content .page-placeholder {\n    color: #D7D7D7;\n    font-size: 20;\n    vertical-align: center;\n    horizontal-align: center;\n}\n.page-content .page-icon {\n    font-size: 72;\n    vertical-align: top;\n    horizontal-align: center;\n    color: #D7D7D7;\n    margin-top: 20%;\n}\n\n.page-content {\n    background-color: white;\n}\n\n.hr-light {\n    background-color: #41464c;\n}\n\n.sidedrawer {\n    background-color: #282c30;\n}\n\n.sidedrawer-header {\n    background-color: #282c30;\n    height: 190;\n}\n\n.sidedrawer-avatar {\n    border-radius: 50%;\n    width: 100;\n    height: 100;\n    border-width: 4;\n    border-color: #48b1ec;\n}\n\n.sidedrawer-header-text {\n    color: white;\n    font-size: 24;\n    font-weight: bold;\n    margin-top: 10;\n    text-align: center;\n}\n\n.sidedrawer-header-footnote {\n    color: white;\n    text-align: center;\n    font-size: 16;\n}\n\n.sidedrawer-icon {\n    font-size: 22;\n    border-radius: 50%;\n    border-width: 3;\n    border-color: #393b3f;\n    width: 40;\n    height: 40;\n    background-color: #393b3f;\n    vertical-align: center;\n    color: white;\n    text-align: center;\n}\n\n.sidedrawer-list-item {\n    color: white;\n    padding-left: 30;\n    font-size: 22;\n    font-weight: bold;\n    height: 80;\n}\n\n.sidedrawer-item {\n    vertical-align: center;\n}\n\n.sidedrawer-list-item-active {\n    background-color: #a6a450;\n}\n ", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app.component.ts");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./animations-service.ts");
/* harmony import */ var _landmarks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./landmarks-service.ts");
/* harmony import */ var _landmarks2_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./landmarks2-service.ts");









var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            providers: [
                _animations_service__WEBPACK_IMPORTED_MODULE_5__["AnimationsService"],
                _landmarks_service__WEBPACK_IMPORTED_MODULE_6__["LandmarksService"],
                _landmarks2_service__WEBPACK_IMPORTED_MODULE_7__["Landmarks2Service"],
                { provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./landmarks-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandmarksService", function() { return LandmarksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_landmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./mock-landmarks.ts");


var LandmarksService = /** @class */ (function () {
    function LandmarksService() {
        this._selectedId = -1;
    }
    LandmarksService.prototype.getLandmarks = function () {
        return _mock_landmarks__WEBPACK_IMPORTED_MODULE_1__["LANDMARKS"];
    };
    LandmarksService.prototype.getLandmark = function (id) {
        return _mock_landmarks__WEBPACK_IMPORTED_MODULE_1__["LANDMARKS"].filter(function (landmark) { return landmark.id === id; })[0];
    };
    LandmarksService.prototype.setSelectedId = function (id) {
        if (id < _mock_landmarks__WEBPACK_IMPORTED_MODULE_1__["LANDMARKS"].length) {
            this._selectedId = id;
        }
    };
    LandmarksService.prototype.getSelected = function () {
        return this._selectedId < 0 ? null : this.getLandmark(this._selectedId);
    };
    LandmarksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LandmarksService);
    return LandmarksService;
}());



/***/ }),

/***/ "./landmarks2-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landmarks2Service", function() { return Landmarks2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock2_landmarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./mock2-landmarks.ts");


var Landmarks2Service = /** @class */ (function () {
    function Landmarks2Service() {
        this._selectedId = -1;
    }
    Landmarks2Service.prototype.getLandmarks = function () {
        return _mock2_landmarks__WEBPACK_IMPORTED_MODULE_1__["LANDMARKS"];
    };
    Landmarks2Service.prototype.getLandmark = function (id) {
        return _mock2_landmarks__WEBPACK_IMPORTED_MODULE_1__["LANDMARKS"].filter(function (landmark) { return landmark.id === id; })[0];
    };
    Landmarks2Service.prototype.setSelectedId = function (id) {
        if (id < _mock2_landmarks__WEBPACK_IMPORTED_MODULE_1__["LANDMARKS"].length) {
            this._selectedId = id;
        }
    };
    Landmarks2Service.prototype.getSelected = function () {
        return this._selectedId < 0 ? null : this.getLandmark(this._selectedId);
    };
    Landmarks2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Landmarks2Service);
    return Landmarks2Service;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        


var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./mock-landmarks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDMARKS", function() { return LANDMARKS; });
var LANDMARKS = [
    {
        id: 0,
        name: "Wow Burger",
        description: "Marvel at more than 2,000 natural rock arches at this park just outside of Moab. " +
            "Some of the formations can be spotted from the road, but the best require a scenic hike. " +
            "Don’t miss the famous Delicate Arch (3 miles round-trip) or the 7-mile (round-trip) Devils Garden Loop." +
            "\n\n" +
            "The Park Avenue Trail is the most popular hike in the park because of its ease and scenery at just " +
            "2 miles round trip. Or try the more challenging hike to Delicate Arches at 3.2 miles round trip." +
            "\n\n" +
            "Whether you are camping or staying in a hotel, don’t forget to spend some time looking up at the sky " +
            "after night falls. You’ll find some of the darkest skies in and around Utah’s national parks.",
        image: "~/images/wowburger.jpg",
        location: "Utah",
        likes: 245,
        comments: 23
    },
    {
        id: 1,
        name: "Tramline",
        description: "Nicknamed the \"Crown of the Continent,\" Glacier National Park sits in the northwest corner of " +
            "Montana. Glacier National Park is just a scenic day’s drive north from Yellowstone." +
            "\n\n" +
            "Hit the trail to explore places like Fishercap Lake (pictured), which is a great place to spot a moose. " +
            "From Many Glacier Campground, go to the Swiftcurrent Motor Inn parking lot. The trailhead is on the west end. " +
            "You'll find the lake less than a mile down the trail. Continue 1.5 miles to Redrock Lake and take a spur to Redrock Falls." +
            "\n\n" +
            "A National Historic Landmark, Going-to-the-Sun Road is one of the most scenic roads in North America, not to mention " +
            "one of the most complex to build. The final section, over Logan Pass, was completed in 1932 after 11 years of work. " +
            "Considered an engineering feat, the construction of the road forever changed the way visitors would experience " +
            "Glacier National Park. Future visitors would be able to drive over sections of the park that previously had " +
            "taken days of horseback riding to see." +
            "\n\n" +
            "In their ability to wow visitors, Yellowstone and Glacier share a common bond. But as with any great destination, " +
            "there are some adventures that are found nowhere else. Glacier preserves over 1,000,000 acres of forests, alpine " +
            "meadows and lakes. Its diverse habitats are home to over 70 species of mammals and over 260 species of birds. " +
            "The spectacular glaciated landscape is a hiker’s paradise, containing 700 miles of maintained trails that lead " +
            "deep into one of the largest intact ecosystems in the lower 48 states.",
        image: "~/images/tramline.jpg",
        location: "Montana",
        likes: 152,
        comments: 16
    },
    {
        id: 2,
        name: "Academy",
        description: "Just 15 miles south of Moab, hike your way through 337, 598 acres of dramatic red-rock " +
            "landscape in Canyonlands NP, and do it all without having to compete for room on the trail - Canyonlands " +
            "is both Utah’s largest and least visited park." +
            "\n\n" +
            "The river-carved park boasts 360-degree views of rust-colored arches, buttes, and cliffs - but because " +
            "of the high-desert rock environment, its climate is subject to extreme temperature fluctuations. " +
            "Skip packing the parka, and go in the spring or fall for the most moderate, and most forgiving, weather." +
            "\n\n" +
            "So expansive it’s divided into four districts, Canyonlands delivers a quintessential desert experience: deep canyons, " +
            "prehistoric rock art, rivers, and sweeping overlooks." +
            "\n\n" +
            "Among the exceptional, striated rock formations, there are " +
            "landmarks you shouldn’t miss, like the unusual 1500-foot Upheaval Dome - thought to be a meteorite crater - or the " +
            "Druid Arch, often referred to as Utah’s own Stonehenge. Keep watch for the wildlife, too. Bighorn sheep take residence " +
            "in the canyons and buttes, along with mule deer, kangaroo rats, and coyote. Look up for red- tailed hawks, and at night, " +
            "for one of the darkest skies in the Lower 48. On a moonless night, get more than your fill of stars - or get out the " +
            "binoculars to try for the rings of Saturn.",
        image: "~/images/academy.jpg",
        location: "Utah",
        likes: 385,
        comments: 31
    },
    {
        id: 3,
        name: "Everleigh",
        description: "Divided by a 277-mile long canyon, and the mile-deep Colorado River, the two halves of Grand Canyon National Park, " +
            "the North and South Rim, offer two parks in one, with diverse landscape and ecology on either." +
            "\n\n" +
            "Grand Canyon National Park, and the greater Grand Canyon region, is a hiker's dream. Most of Grand Canyon National Park is " +
            "undeveloped backcountry. There are literally hundreds of miles to hike, backpack and explore. Despite the Grand Canyon's " +
            "popularity and numbers of visitors each year, visitors only need to hike a small distance to enjoy some solitude." +
            "\n\n" +
            "Explore the depths of the Grand Canyon National Park on popular trails like the Bright Angel and South Kaibab trail on a mule. " +
            "A Grand Canyon mule ride is an adventure and easy on your legs." +
            "\n\n" +
            "One of the most exciting ways to experience the Grand Canyon is to float through it by way of raft on the Colorado River. " +
            "Most people book their trip with a commercial outfitter and you can even combine the rafting trip with a helicopter ride. " +
            "Experienced whitewater rafter? Enter the lottery to do your own trip.",
        image: "~/images/everleigh.jpg",
        location: "Arizona",
        likes: 514,
        comments: 49
    },
    {
        id: 4,
        name: "Workmans",
        description: "Maximize your experience at Bryce Canyon National Park by driving to Sunrise, Sunset, Inspiration and " +
            "Bryce viewpoints. These are all spectacular overlooks of the park’s red hoodoos shooting up against evergreen " +
            "forests in the background. Depending on the time of day, and the angle and light of the sun, the hoodoos and " +
            "mysterious rock formations often take on unusual patterns and shapes, and some think, imaginary faces." +
            "\n\n" +
            "For more inspiration, lace up your hiking boots or other sturdy shoes and explore a trail. There is something " +
            "for everyone at Bryce Canyon. Our favorite easy hikes include Bristlecone Loop Trail and Queens Garden Trail. " +
            "Hat Shop is our favorite moderate hike. For more physically fit hikers looking for a strenuous adventure, " +
            "do the 5.5-mile vertically challenging Peek-A-Boo Loop or the 7.9 Fairyland Loop rated “difficult” by the park service. ",
        image: "~/images/workmans.jpg",
        location: "Utah",
        likes: 245,
        comments: 11
    },
    {
        id: 5,
        name: "Wagamamas",
        description: "Grand Teton National Park preserves a spectacular landscape rich with majestic mountains, pristine lakes, " +
            "and extraordinary wildlife. The abrupt vertical rise of the jagged Teton Mountains contrasts with the horizontal " +
            "sage-covered valley and glacial lakes at its base." +
            "\n\n" +
            "It took more than 30 years for Grand Teton National Park to transform from an idea to one of the country's most stunning parks. " +
            "When Congress created the park in 1929, it only included the Teton Range and six glacial lakes. John D. Rockefeller, Jr., " +
            "played a key role in acquiring an additional 35,000 acres for the park under the name \"Snake River Land Co.\" Amid " +
            "controversy the \"new\" Grand Teton National Park was established Sept. 14, 1950, by President Harry Truman." +
            "\n\n" +
            "Grand Teton National Park and its world-class scenery attracts nearly 4 million visitors per year. With Jenny Lake " +
            "and Jackson Lake at 6,320 feet and the summit of the Grand Teton at 13,770 feet, the park's elevation ranges create " +
            "one of the nation's most awe-inspiring landscapes. In addition to gazing at the incredible views, there is much to do " +
            "in this park from hiking and rock climbing to boating and fishing. And when you need a break from outdoor adventure, " +
            "there are few better places to simply relax and watch the park's incredible wildlife.",
        image: "~/images/wagamamas.jpg",
        location: "Wyoming",
        likes: 169,
        comments: 7
    },
    {
        id: 6,
        name: "Diceys",
        description: "Explore South Dakota’s Black Hills region, a natural wonder in its own right. " +
            "Located about six hours from Yellowstone, the Black Hills are home to seven national " +
            "sites — Badlands National Park, Jewel Cave National Monument, the Lewis & Clark National " +
            "Historic Trail, Minuteman Missile National Historic Site, Missouri National Recreational " +
            "River, Mount Rushmore National Memorial, and Wind Cave National Park." +
            "\n\n" +
            "In this natural playground, you can enjoy an abundance of recreational opportunities, gorgeous " +
            "scenic drives — which include the beautiful Spearfish Canyon — and wildlife-watching. This region " +
            "is also packed with cultural and historical sites." +
            "\n\n" +
            "While you won’t see saber-toothed cats or rhinoceroses roaming the Badlands like they once did, " +
            "you may see their remains in this stunning national park with some of the world’s richest fossil deposits." +
            "\n\n" +
            "Located in Imlay Township in South Dakota, Badlands National Park has a Fossil Preparation Lab " +
            "where you can watch paleontologists at work, literally uncovering the ancient history of the area. " +
            "At the Ben Reifel Visitor Center, kids can use a touchscreen to assemble a virtual skeleton and " +
            "touch fossilized animal replicas. You also can watch the film Land of Stone and Light in " +
            "the center’s 95-seat air-conditioned theater.",
        image: "~/images/diceys.jpg",
        location: "South Dakota",
        likes: 227,
        comments: 26
    }
];


/***/ }),

/***/ "./mock2-landmarks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANDMARKS", function() { return LANDMARKS; });
var LANDMARKS = [
    {
        id: 0,
        name: "Wow Burger",
        description: "Marvel at more than 2,000 natural rock arches at this park just outside of Moab. " +
            "Some of the formations can be spotted from the road, but the best require a scenic hike. " +
            "Don’t miss the famous Delicate Arch (3 miles round-trip) or the 7-mile (round-trip) Devils Garden Loop." +
            "\n\n" +
            "The Park Avenue Trail is the most popular hike in the park because of its ease and scenery at just " +
            "2 miles round trip. Or try the more challenging hike to Delicate Arches at 3.2 miles round trip." +
            "\n\n" +
            "Whether you are camping or staying in a hotel, don’t forget to spend some time looking up at the sky " +
            "after night falls. You’ll find some of the darkest skies in and around Utah’s national parks.",
        image: "https://www.w3schools.com/howto/img_snow.jpg",
        location: "Utah",
        likes: 245,
        comments: 23
    },
    {
        id: 1,
        name: "Tramline",
        description: "Nicknamed the \"Crown of the Continent,\" Glacier National Park sits in the northwest corner of " +
            "Montana. Glacier National Park is just a scenic day’s drive north from Yellowstone." +
            "\n\n" +
            "Hit the trail to explore places like Fishercap Lake (pictured), which is a great place to spot a moose. " +
            "From Many Glacier Campground, go to the Swiftcurrent Motor Inn parking lot. The trailhead is on the west end. " +
            "You'll find the lake less than a mile down the trail. Continue 1.5 miles to Redrock Lake and take a spur to Redrock Falls." +
            "\n\n" +
            "A National Historic Landmark, Going-to-the-Sun Road is one of the most scenic roads in North America, not to mention " +
            "one of the most complex to build. The final section, over Logan Pass, was completed in 1932 after 11 years of work. " +
            "Considered an engineering feat, the construction of the road forever changed the way visitors would experience " +
            "Glacier National Park. Future visitors would be able to drive over sections of the park that previously had " +
            "taken days of horseback riding to see." +
            "\n\n" +
            "In their ability to wow visitors, Yellowstone and Glacier share a common bond. But as with any great destination, " +
            "there are some adventures that are found nowhere else. Glacier preserves over 1,000,000 acres of forests, alpine " +
            "meadows and lakes. Its diverse habitats are home to over 70 species of mammals and over 260 species of birds. " +
            "The spectacular glaciated landscape is a hiker’s paradise, containing 700 miles of maintained trails that lead " +
            "deep into one of the largest intact ecosystems in the lower 48 states.",
        image: "https://www.w3schools.com/howto/img_snow.jpg",
        location: "Montana",
        likes: 152,
        comments: 16
    }
];


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-autocomplete/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-autocomplete/angular");

/***/ }),

/***/ "nativescript-ui-calendar/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-calendar/angular");

/***/ }),

/***/ "nativescript-ui-chart/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-chart/angular");

/***/ }),

/***/ "nativescript-ui-dataform/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-dataform/angular");

/***/ }),

/***/ "nativescript-ui-gauge/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-gauge/angular");

/***/ }),

/***/ "nativescript-ui-listview/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview/angular");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/debugger/devtools-elements":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/debugger/devtools-elements");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/enums":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/enums");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hbmltYXRpb25zLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9sYW5kbWFya3Mtc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9sYW5kbWFya3MyLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9tb2NrLWxhbmRtYXJrcy50cyIsIndlYnBhY2s6Ly8vLi9tb2NrMi1sYW5kbWFya3MudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kZWJ1Z2dlci9kZXZ0b29scy1lbGVtZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiXSwibmFt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QUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsRUFBRTtLQUNmO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxVQUFVO1FBQ2hCLFdBQVcsRUFBRSxrR0FBa0c7WUFDM0cscUZBQXFGO1lBQ3JGLE1BQU07WUFDTiwwR0FBMEc7WUFDMUcsZ0hBQWdIO1lBQ2hILDRIQUE0SDtZQUM1SCxNQUFNO1lBQ04sdUhBQXVIO1lBQ3ZILHNIQUFzSDtZQUN0SCxpSEFBaUg7WUFDakgsOEdBQThHO1lBQzlHLHdDQUF3QztZQUN4QyxNQUFNO1lBQ04sb0hBQW9IO1lBQ3BILG1IQUFtSDtZQUNuSCxnSEFBZ0g7WUFDaEgsaUhBQWlIO1lBQ2pILHdFQUF3RTtRQUM1RSxLQUFLLEVBQUUsOENBQThDO1FBQ3JELFFBQVEsRUFBRSxTQUFTO1FBQ25CLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEVBQUU7S0FDZjtDQUNKOzs7Ozs7OztBQzlDRCw0Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLHdFOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLHFEOzs7Ozs7O0FDQUEsb0UiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2RldGFpbHMvZGV0YWlscy5tb2R1bGVcIjogW1xuXHRcdFwiLi9kZXRhaWxzL2RldGFpbHMubW9kdWxlLnRzXCIsXG5cdFx0MlxuXHRdLFxuXHRcIi4vaG9tZS9ob21lLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2hvbWUvaG9tZS5tb2R1bGUudHNcIixcblx0XHRcInZlbmRvclwiLFxuXHRcdDBcblx0XSxcblx0XCIuL2hvbWUyL2hvbWUyLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2hvbWUyL2hvbWUyLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MVxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2FuaW1hdGlvbk9mZnNldDogbnVtYmVyO1xuXG4gICAgZ2V0IGFuaW1hdGlvbk9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uT2Zmc2V0O1xuICAgIH1cblxuICAgIHNldCBhbmltYXRpb25PZmZzZXQob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZTJcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWUyXCIsIGxvYWRDaGlsZHJlbjogXCIuL2hvbWUyL2hvbWUyLm1vZHVsZSNIb21lMk1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImRldGFpbHNcIiwgbG9hZENoaWxkcmVuOiBcIi4vZGV0YWlscy9kZXRhaWxzLm1vZHVsZSNEZXRhaWxzTW9kdWxlXCIgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8UmFkU2lkZURyYXdlciBkcmF3ZXJUcmFuc2l0aW9uPVxcXCJQdXNoVHJhbnNpdGlvblxcXCI+XFxuXFxuICAgIDxHcmlkTGF5b3V0IHRrRHJhd2VyQ29udGVudCByb3dzPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlciBzaWRlZHJhd2VyLWxlZnRcXFwiPlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0M1MTBCQVFHQTgzR3hHaVVXQ0EvY29tcGFueS1sb2dvXzIwMF8yMDAvMD9lPTIxNTkwMjQ0MDAmdj1iZXRhJnQ9VDVvUUhOM0pqek9DUmRJNU9LYW9HUk5Rc0FjTGZIOEsycUZUMlVJTHBDUVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcInNpZGVkcmF3ZXItYXZhdGFyXFxcIj48L0ltYWdlPlxcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwic2lkZWRyYXdlci1oZWFkZXItdGV4dCB2YXJcXFwiIHRleHQ9XFxcIkZpbHRlcnNcXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJIb21lXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGlvbkl0ZW1UYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDA3O1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiRm9vZFxcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIkZyaWVuZHNcXFwiIHRhcD1cXFwib25OYXZpZ2F0aW9uSXRlbVRhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJDbHVic1xcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIlRvLURvIExpc3RcXFwiIHRhcD1cXFwib25OYXZpZ2F0aW9uSXRlbVRhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwY2E7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJDb2ZmZWVcXFwiIGNsYXNzPVxcXCJtLWwtMjAgc2lkZWRyYXdlci1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJTZXR0aW5nc1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRpb25JdGVtVGFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAxMztcXFwiIGNsYXNzPVxcXCJmYSBzaWRlZHJhd2VyLWljb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlNob3BzXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50IGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuPC9SYWRTaWRlRHJhd2VyPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRm9udEF3ZXNvbWVcXFwiO1xcbn1cXG5cXG4uYWN0aW9uLWJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OGIxZWM7XFxufVxcblxcbi5hYi1pY29uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucGFnZS1jb250ZW50IC5wYWdlLXBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNEN0Q3RDc7XFxuICAgIGZvbnQtc2l6ZTogMjA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG59XFxuLnBhZ2UtY29udGVudCAucGFnZS1pY29uIHtcXG4gICAgZm9udC1zaXplOiA3MjtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0Q3RDdENztcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbn1cXG5cXG4ucGFnZS1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oci1saWdodCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTQ2NGM7XFxufVxcblxcbi5zaWRlZHJhd2VyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzMDtcXG59XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzMDtcXG4gICAgaGVpZ2h0OiAxOTA7XFxufVxcblxcbi5zaWRlZHJhd2VyLWF2YXRhciB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDEwMDtcXG4gICAgaGVpZ2h0OiAxMDA7XFxuICAgIGJvcmRlci13aWR0aDogNDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNDhiMWVjO1xcbn1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItdGV4dCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyNDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDEwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci1mb290bm90ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE2O1xcbn1cXG5cXG4uc2lkZWRyYXdlci1pY29uIHtcXG4gICAgZm9udC1zaXplOiAyMjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXItd2lkdGg6IDM7XFxuICAgIGJvcmRlci1jb2xvcjogIzM5M2IzZjtcXG4gICAgd2lkdGg6IDQwO1xcbiAgICBoZWlnaHQ6IDQwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzYjNmO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwO1xcbiAgICBmb250LXNpemU6IDIyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaGVpZ2h0OiA4MDtcXG59XFxuXFxuLnNpZGVkcmF3ZXItaXRlbSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbS1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZhNDUwO1xcbn1cXG4gXCIsIFwiXCJdKTtcblxuO1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuL2FuaW1hdGlvbnMtc2VydmljZVwiO1xuaW1wb3J0IHsgTGFuZG1hcmtzU2VydmljZSB9IGZyb20gXCIuL2xhbmRtYXJrcy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMYW5kbWFya3MyU2VydmljZSB9IGZyb20gXCIuL2xhbmRtYXJrczItc2VydmljZVwiO1xuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQW5pbWF0aW9uc1NlcnZpY2UsXG4gICAgICAgIExhbmRtYXJrc1NlcnZpY2UsXG4gICAgICAgIExhbmRtYXJrczJTZXJ2aWNlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTGFuZG1hcmsgfSBmcm9tIFwiLi9sYW5kbWFya1wiO1xuaW1wb3J0IHsgTEFORE1BUktTIH0gZnJvbSBcIi4vbW9jay1sYW5kbWFya3NcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExhbmRtYXJrc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSWQgPSAtMTtcblxuICAgIGdldExhbmRtYXJrcygpOiBMYW5kbWFya1tdIHtcbiAgICAgICAgcmV0dXJuIExBTkRNQVJLUztcbiAgICB9XG5cbiAgICBnZXRMYW5kbWFyayhpZDogbnVtYmVyKTogTGFuZG1hcmsge1xuICAgICAgICByZXR1cm4gTEFORE1BUktTLmZpbHRlcihsYW5kbWFyayA9PiBsYW5kbWFyay5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIHNldFNlbGVjdGVkSWQoaWQ6IG51bWJlcikge1xuICAgICAgICBpZiAoaWQgPCBMQU5ETUFSS1MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZElkID0gaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZCgpOiBMYW5kbWFyayB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZElkIDwgMCA/IG51bGwgOiB0aGlzLmdldExhbmRtYXJrKHRoaXMuX3NlbGVjdGVkSWQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4vbGFuZG1hcmtcIjtcbmltcG9ydCB7IExBTkRNQVJLUyB9IGZyb20gXCIuL21vY2syLWxhbmRtYXJrc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZG1hcmtzMlNlcnZpY2Uge1xuICAgIHByaXZhdGUgX3NlbGVjdGVkSWQgPSAtMTtcblxuICAgIGdldExhbmRtYXJrcygpOiBMYW5kbWFya1tdIHtcbiAgICAgICAgcmV0dXJuIExBTkRNQVJLUztcbiAgICB9XG5cbiAgICBnZXRMYW5kbWFyayhpZDogbnVtYmVyKTogTGFuZG1hcmsge1xuICAgICAgICByZXR1cm4gTEFORE1BUktTLmZpbHRlcihsYW5kbWFyayA9PiBsYW5kbWFyay5pZCA9PT0gaWQpWzBdO1xuICAgIH1cblxuICAgIHNldFNlbGVjdGVkSWQoaWQ6IG51bWJlcikge1xuICAgICAgICBpZiAoaWQgPCBMQU5ETUFSS1MubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZElkID0gaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTZWxlY3RlZCgpOiBMYW5kbWFyayB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZElkIDwgMCA/IG51bGwgOiB0aGlzLmdldExhbmRtYXJrKHRoaXMuX3NlbGVjdGVkSWQpO1xuICAgIH1cbn0iLCIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC5tb2R1bGVcIjtcblxuZW5hYmxlUHJvZE1vZGUoKTtcbnBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xuIiwiaW1wb3J0IHsgTGFuZG1hcmsgfSBmcm9tICcuL2xhbmRtYXJrJztcblxuZXhwb3J0IGNvbnN0IExBTkRNQVJLUzogTGFuZG1hcmtbXSA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiBcIldvdyBCdXJnZXJcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFydmVsIGF0IG1vcmUgdGhhbiAyLDAwMCBuYXR1cmFsIHJvY2sgYXJjaGVzIGF0IHRoaXMgcGFyayBqdXN0IG91dHNpZGUgb2YgTW9hYi4gXCIgK1xuICAgICAgICAgICAgXCJTb21lIG9mIHRoZSBmb3JtYXRpb25zIGNhbiBiZSBzcG90dGVkIGZyb20gdGhlIHJvYWQsIGJ1dCB0aGUgYmVzdCByZXF1aXJlIGEgc2NlbmljIGhpa2UuIFwiICtcbiAgICAgICAgICAgIFwiRG9u4oCZdCBtaXNzIHRoZSBmYW1vdXMgRGVsaWNhdGUgQXJjaCAoMyBtaWxlcyByb3VuZC10cmlwKSBvciB0aGUgNy1taWxlIChyb3VuZC10cmlwKSBEZXZpbHMgR2FyZGVuIExvb3AuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIlRoZSBQYXJrIEF2ZW51ZSBUcmFpbCBpcyB0aGUgbW9zdCBwb3B1bGFyIGhpa2UgaW4gdGhlIHBhcmsgYmVjYXVzZSBvZiBpdHMgZWFzZSBhbmQgc2NlbmVyeSBhdCBqdXN0IFwiICtcbiAgICAgICAgICAgIFwiMiBtaWxlcyByb3VuZCB0cmlwLiBPciB0cnkgdGhlIG1vcmUgY2hhbGxlbmdpbmcgaGlrZSB0byBEZWxpY2F0ZSBBcmNoZXMgYXQgMy4yIG1pbGVzIHJvdW5kIHRyaXAuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIldoZXRoZXIgeW91IGFyZSBjYW1waW5nIG9yIHN0YXlpbmcgaW4gYSBob3RlbCwgZG9u4oCZdCBmb3JnZXQgdG8gc3BlbmQgc29tZSB0aW1lIGxvb2tpbmcgdXAgYXQgdGhlIHNreSBcIiArXG4gICAgICAgICAgICBcImFmdGVyIG5pZ2h0IGZhbGxzLiBZb3XigJlsbCBmaW5kIHNvbWUgb2YgdGhlIGRhcmtlc3Qgc2tpZXMgaW4gYW5kIGFyb3VuZCBVdGFo4oCZcyBuYXRpb25hbCBwYXJrcy5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvd293YnVyZ2VyLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJVdGFoXCIsXG4gICAgICAgIGxpa2VzOiAyNDUsXG4gICAgICAgIGNvbW1lbnRzOiAyM1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJUcmFtbGluZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOaWNrbmFtZWQgdGhlIFxcXCJDcm93biBvZiB0aGUgQ29udGluZW50LFxcXCIgR2xhY2llciBOYXRpb25hbCBQYXJrIHNpdHMgaW4gdGhlIG5vcnRod2VzdCBjb3JuZXIgb2YgXCIgK1xuICAgICAgICAgICAgXCJNb250YW5hLiBHbGFjaWVyIE5hdGlvbmFsIFBhcmsgaXMganVzdCBhIHNjZW5pYyBkYXnigJlzIGRyaXZlIG5vcnRoIGZyb20gWWVsbG93c3RvbmUuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkhpdCB0aGUgdHJhaWwgdG8gZXhwbG9yZSBwbGFjZXMgbGlrZSBGaXNoZXJjYXAgTGFrZSAocGljdHVyZWQpLCB3aGljaCBpcyBhIGdyZWF0IHBsYWNlIHRvIHNwb3QgYSBtb29zZS4gXCIgK1xuICAgICAgICAgICAgXCJGcm9tIE1hbnkgR2xhY2llciBDYW1wZ3JvdW5kLCBnbyB0byB0aGUgU3dpZnRjdXJyZW50IE1vdG9yIElubiBwYXJraW5nIGxvdC4gVGhlIHRyYWlsaGVhZCBpcyBvbiB0aGUgd2VzdCBlbmQuIFwiICtcbiAgICAgICAgICAgIFwiWW91J2xsIGZpbmQgdGhlIGxha2UgbGVzcyB0aGFuIGEgbWlsZSBkb3duIHRoZSB0cmFpbC4gQ29udGludWUgMS41IG1pbGVzIHRvIFJlZHJvY2sgTGFrZSBhbmQgdGFrZSBhIHNwdXIgdG8gUmVkcm9jayBGYWxscy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiQSBOYXRpb25hbCBIaXN0b3JpYyBMYW5kbWFyaywgR29pbmctdG8tdGhlLVN1biBSb2FkIGlzIG9uZSBvZiB0aGUgbW9zdCBzY2VuaWMgcm9hZHMgaW4gTm9ydGggQW1lcmljYSwgbm90IHRvIG1lbnRpb24gXCIgK1xuICAgICAgICAgICAgXCJvbmUgb2YgdGhlIG1vc3QgY29tcGxleCB0byBidWlsZC4gVGhlIGZpbmFsIHNlY3Rpb24sIG92ZXIgTG9nYW4gUGFzcywgd2FzIGNvbXBsZXRlZCBpbiAxOTMyIGFmdGVyIDExIHllYXJzIG9mIHdvcmsuIFwiICtcbiAgICAgICAgICAgIFwiQ29uc2lkZXJlZCBhbiBlbmdpbmVlcmluZyBmZWF0LCB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSByb2FkIGZvcmV2ZXIgY2hhbmdlZCB0aGUgd2F5IHZpc2l0b3JzIHdvdWxkIGV4cGVyaWVuY2UgXCIgK1xuICAgICAgICAgICAgXCJHbGFjaWVyIE5hdGlvbmFsIFBhcmsuIEZ1dHVyZSB2aXNpdG9ycyB3b3VsZCBiZSBhYmxlIHRvIGRyaXZlIG92ZXIgc2VjdGlvbnMgb2YgdGhlIHBhcmsgdGhhdCBwcmV2aW91c2x5IGhhZCBcIiArXG4gICAgICAgICAgICBcInRha2VuIGRheXMgb2YgaG9yc2ViYWNrIHJpZGluZyB0byBzZWUuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkluIHRoZWlyIGFiaWxpdHkgdG8gd293IHZpc2l0b3JzLCBZZWxsb3dzdG9uZSBhbmQgR2xhY2llciBzaGFyZSBhIGNvbW1vbiBib25kLiBCdXQgYXMgd2l0aCBhbnkgZ3JlYXQgZGVzdGluYXRpb24sIFwiICtcbiAgICAgICAgICAgIFwidGhlcmUgYXJlIHNvbWUgYWR2ZW50dXJlcyB0aGF0IGFyZSBmb3VuZCBub3doZXJlIGVsc2UuIEdsYWNpZXIgcHJlc2VydmVzIG92ZXIgMSwwMDAsMDAwIGFjcmVzIG9mIGZvcmVzdHMsIGFscGluZSBcIiArXG4gICAgICAgICAgICBcIm1lYWRvd3MgYW5kIGxha2VzLiBJdHMgZGl2ZXJzZSBoYWJpdGF0cyBhcmUgaG9tZSB0byBvdmVyIDcwIHNwZWNpZXMgb2YgbWFtbWFscyBhbmQgb3ZlciAyNjAgc3BlY2llcyBvZiBiaXJkcy4gXCIgK1xuICAgICAgICAgICAgXCJUaGUgc3BlY3RhY3VsYXIgZ2xhY2lhdGVkIGxhbmRzY2FwZSBpcyBhIGhpa2Vy4oCZcyBwYXJhZGlzZSwgY29udGFpbmluZyA3MDAgbWlsZXMgb2YgbWFpbnRhaW5lZCB0cmFpbHMgdGhhdCBsZWFkIFwiICtcbiAgICAgICAgICAgIFwiZGVlcCBpbnRvIG9uZSBvZiB0aGUgbGFyZ2VzdCBpbnRhY3QgZWNvc3lzdGVtcyBpbiB0aGUgbG93ZXIgNDggc3RhdGVzLlwiLFxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy90cmFtbGluZS5qcGdcIixcbiAgICAgICAgbG9jYXRpb246IFwiTW9udGFuYVwiLFxuICAgICAgICBsaWtlczogMTUyLFxuICAgICAgICBjb21tZW50czogMTZcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6IFwiQWNhZGVteVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiSnVzdCAxNSBtaWxlcyBzb3V0aCBvZiBNb2FiLCBoaWtlIHlvdXIgd2F5IHRocm91Z2ggMzM3LCA1OTggYWNyZXMgb2YgZHJhbWF0aWMgcmVkLXJvY2sgXCIgK1xuICAgICAgICAgICAgXCJsYW5kc2NhcGUgaW4gQ2FueW9ubGFuZHMgTlAsIGFuZCBkbyBpdCBhbGwgd2l0aG91dCBoYXZpbmcgdG8gY29tcGV0ZSBmb3Igcm9vbSBvbiB0aGUgdHJhaWwgLSBDYW55b25sYW5kcyBcIiArXG4gICAgICAgICAgICBcImlzIGJvdGggVXRhaOKAmXMgbGFyZ2VzdCBhbmQgbGVhc3QgdmlzaXRlZCBwYXJrLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJUaGUgcml2ZXItY2FydmVkIHBhcmsgYm9hc3RzIDM2MC1kZWdyZWUgdmlld3Mgb2YgcnVzdC1jb2xvcmVkIGFyY2hlcywgYnV0dGVzLCBhbmQgY2xpZmZzIC0gYnV0IGJlY2F1c2UgXCIgK1xuICAgICAgICAgICAgXCJvZiB0aGUgaGlnaC1kZXNlcnQgcm9jayBlbnZpcm9ubWVudCwgaXRzIGNsaW1hdGUgaXMgc3ViamVjdCB0byBleHRyZW1lIHRlbXBlcmF0dXJlIGZsdWN0dWF0aW9ucy4gXCIgK1xuICAgICAgICAgICAgXCJTa2lwIHBhY2tpbmcgdGhlIHBhcmthLCBhbmQgZ28gaW4gdGhlIHNwcmluZyBvciBmYWxsIGZvciB0aGUgbW9zdCBtb2RlcmF0ZSwgYW5kIG1vc3QgZm9yZ2l2aW5nLCB3ZWF0aGVyLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJTbyBleHBhbnNpdmUgaXTigJlzIGRpdmlkZWQgaW50byBmb3VyIGRpc3RyaWN0cywgQ2FueW9ubGFuZHMgZGVsaXZlcnMgYSBxdWludGVzc2VudGlhbCBkZXNlcnQgZXhwZXJpZW5jZTogZGVlcCBjYW55b25zLCBcIiArXG4gICAgICAgICAgICBcInByZWhpc3RvcmljIHJvY2sgYXJ0LCByaXZlcnMsIGFuZCBzd2VlcGluZyBvdmVybG9va3MuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkFtb25nIHRoZSBleGNlcHRpb25hbCwgc3RyaWF0ZWQgcm9jayBmb3JtYXRpb25zLCB0aGVyZSBhcmUgXCIgK1xuICAgICAgICAgICAgXCJsYW5kbWFya3MgeW91IHNob3VsZG7igJl0IG1pc3MsIGxpa2UgdGhlIHVudXN1YWwgMTUwMC1mb290IFVwaGVhdmFsIERvbWUgLSB0aG91Z2h0IHRvIGJlIGEgbWV0ZW9yaXRlIGNyYXRlciAtIG9yIHRoZSBcIiArXG4gICAgICAgICAgICBcIkRydWlkIEFyY2gsIG9mdGVuIHJlZmVycmVkIHRvIGFzIFV0YWjigJlzIG93biBTdG9uZWhlbmdlLiBLZWVwIHdhdGNoIGZvciB0aGUgd2lsZGxpZmUsIHRvby4gQmlnaG9ybiBzaGVlcCB0YWtlIHJlc2lkZW5jZSBcIiArXG4gICAgICAgICAgICBcImluIHRoZSBjYW55b25zIGFuZCBidXR0ZXMsIGFsb25nIHdpdGggbXVsZSBkZWVyLCBrYW5nYXJvbyByYXRzLCBhbmQgY295b3RlLiBMb29rIHVwIGZvciByZWQtIHRhaWxlZCBoYXdrcywgYW5kIGF0IG5pZ2h0LCBcIiArXG4gICAgICAgICAgICBcImZvciBvbmUgb2YgdGhlIGRhcmtlc3Qgc2tpZXMgaW4gdGhlIExvd2VyIDQ4LiBPbiBhIG1vb25sZXNzIG5pZ2h0LCBnZXQgbW9yZSB0aGFuIHlvdXIgZmlsbCBvZiBzdGFycyAtIG9yIGdldCBvdXQgdGhlIFwiICtcbiAgICAgICAgICAgIFwiYmlub2N1bGFycyB0byB0cnkgZm9yIHRoZSByaW5ncyBvZiBTYXR1cm4uXCIsXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2FjYWRlbXkuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlV0YWhcIixcbiAgICAgICAgbGlrZXM6IDM4NSxcbiAgICAgICAgY29tbWVudHM6IDMxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIkV2ZXJsZWlnaFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEaXZpZGVkIGJ5IGEgMjc3LW1pbGUgbG9uZyBjYW55b24sIGFuZCB0aGUgbWlsZS1kZWVwIENvbG9yYWRvIFJpdmVyLCB0aGUgdHdvIGhhbHZlcyBvZiBHcmFuZCBDYW55b24gTmF0aW9uYWwgUGFyaywgXCIgK1xuICAgICAgICAgICAgXCJ0aGUgTm9ydGggYW5kIFNvdXRoIFJpbSwgb2ZmZXIgdHdvIHBhcmtzIGluIG9uZSwgd2l0aCBkaXZlcnNlIGxhbmRzY2FwZSBhbmQgZWNvbG9neSBvbiBlaXRoZXIuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkdyYW5kIENhbnlvbiBOYXRpb25hbCBQYXJrLCBhbmQgdGhlIGdyZWF0ZXIgR3JhbmQgQ2FueW9uIHJlZ2lvbiwgaXMgYSBoaWtlcidzIGRyZWFtLiBNb3N0IG9mIEdyYW5kIENhbnlvbiBOYXRpb25hbCBQYXJrIGlzIFwiICtcbiAgICAgICAgICAgIFwidW5kZXZlbG9wZWQgYmFja2NvdW50cnkuIFRoZXJlIGFyZSBsaXRlcmFsbHkgaHVuZHJlZHMgb2YgbWlsZXMgdG8gaGlrZSwgYmFja3BhY2sgYW5kIGV4cGxvcmUuIERlc3BpdGUgdGhlIEdyYW5kIENhbnlvbidzIFwiICtcbiAgICAgICAgICAgIFwicG9wdWxhcml0eSBhbmQgbnVtYmVycyBvZiB2aXNpdG9ycyBlYWNoIHllYXIsIHZpc2l0b3JzIG9ubHkgbmVlZCB0byBoaWtlIGEgc21hbGwgZGlzdGFuY2UgdG8gZW5qb3kgc29tZSBzb2xpdHVkZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiRXhwbG9yZSB0aGUgZGVwdGhzIG9mIHRoZSBHcmFuZCBDYW55b24gTmF0aW9uYWwgUGFyayBvbiBwb3B1bGFyIHRyYWlscyBsaWtlIHRoZSBCcmlnaHQgQW5nZWwgYW5kIFNvdXRoIEthaWJhYiB0cmFpbCBvbiBhIG11bGUuIFwiICtcbiAgICAgICAgICAgIFwiQSBHcmFuZCBDYW55b24gbXVsZSByaWRlIGlzIGFuIGFkdmVudHVyZSBhbmQgZWFzeSBvbiB5b3VyIGxlZ3MuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIk9uZSBvZiB0aGUgbW9zdCBleGNpdGluZyB3YXlzIHRvIGV4cGVyaWVuY2UgdGhlIEdyYW5kIENhbnlvbiBpcyB0byBmbG9hdCB0aHJvdWdoIGl0IGJ5IHdheSBvZiByYWZ0IG9uIHRoZSBDb2xvcmFkbyBSaXZlci4gXCIgK1xuICAgICAgICAgICAgXCJNb3N0IHBlb3BsZSBib29rIHRoZWlyIHRyaXAgd2l0aCBhIGNvbW1lcmNpYWwgb3V0Zml0dGVyIGFuZCB5b3UgY2FuIGV2ZW4gY29tYmluZSB0aGUgcmFmdGluZyB0cmlwIHdpdGggYSBoZWxpY29wdGVyIHJpZGUuIFwiICtcbiAgICAgICAgICAgIFwiRXhwZXJpZW5jZWQgd2hpdGV3YXRlciByYWZ0ZXI/IEVudGVyIHRoZSBsb3R0ZXJ5IHRvIGRvIHlvdXIgb3duIHRyaXAuXCIsXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2V2ZXJsZWlnaC5qcGdcIixcbiAgICAgICAgbG9jYXRpb246IFwiQXJpem9uYVwiLFxuICAgICAgICBsaWtlczogNTE0LFxuICAgICAgICBjb21tZW50czogNDlcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6IFwiV29ya21hbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWF4aW1pemUgeW91ciBleHBlcmllbmNlIGF0IEJyeWNlIENhbnlvbiBOYXRpb25hbCBQYXJrIGJ5IGRyaXZpbmcgdG8gU3VucmlzZSwgU3Vuc2V0LCBJbnNwaXJhdGlvbiBhbmQgXCIgK1xuICAgICAgICAgICAgXCJCcnljZSB2aWV3cG9pbnRzLiBUaGVzZSBhcmUgYWxsIHNwZWN0YWN1bGFyIG92ZXJsb29rcyBvZiB0aGUgcGFya+KAmXMgcmVkIGhvb2Rvb3Mgc2hvb3RpbmcgdXAgYWdhaW5zdCBldmVyZ3JlZW4gXCIgK1xuICAgICAgICAgICAgXCJmb3Jlc3RzIGluIHRoZSBiYWNrZ3JvdW5kLiBEZXBlbmRpbmcgb24gdGhlIHRpbWUgb2YgZGF5LCBhbmQgdGhlIGFuZ2xlIGFuZCBsaWdodCBvZiB0aGUgc3VuLCB0aGUgaG9vZG9vcyBhbmQgXCIgK1xuICAgICAgICAgICAgXCJteXN0ZXJpb3VzIHJvY2sgZm9ybWF0aW9ucyBvZnRlbiB0YWtlIG9uIHVudXN1YWwgcGF0dGVybnMgYW5kIHNoYXBlcywgYW5kIHNvbWUgdGhpbmssIGltYWdpbmFyeSBmYWNlcy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiRm9yIG1vcmUgaW5zcGlyYXRpb24sIGxhY2UgdXAgeW91ciBoaWtpbmcgYm9vdHMgb3Igb3RoZXIgc3R1cmR5IHNob2VzIGFuZCBleHBsb3JlIGEgdHJhaWwuIFRoZXJlIGlzIHNvbWV0aGluZyBcIiArXG4gICAgICAgICAgICBcImZvciBldmVyeW9uZSBhdCBCcnljZSBDYW55b24uIE91ciBmYXZvcml0ZSBlYXN5IGhpa2VzIGluY2x1ZGUgQnJpc3RsZWNvbmUgTG9vcCBUcmFpbCBhbmQgUXVlZW5zIEdhcmRlbiBUcmFpbC4gXCIgK1xuICAgICAgICAgICAgXCJIYXQgU2hvcCBpcyBvdXIgZmF2b3JpdGUgbW9kZXJhdGUgaGlrZS4gRm9yIG1vcmUgcGh5c2ljYWxseSBmaXQgaGlrZXJzIGxvb2tpbmcgZm9yIGEgc3RyZW51b3VzIGFkdmVudHVyZSwgXCIgK1xuICAgICAgICAgICAgXCJkbyB0aGUgNS41LW1pbGUgdmVydGljYWxseSBjaGFsbGVuZ2luZyBQZWVrLUEtQm9vIExvb3Agb3IgdGhlIDcuOSBGYWlyeWxhbmQgTG9vcCByYXRlZCDigJxkaWZmaWN1bHTigJ0gYnkgdGhlIHBhcmsgc2VydmljZS4gXCIsXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3dvcmttYW5zLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJVdGFoXCIsXG4gICAgICAgIGxpa2VzOiAyNDUsXG4gICAgICAgIGNvbW1lbnRzOiAxMVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgbmFtZTogXCJXYWdhbWFtYXNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR3JhbmQgVGV0b24gTmF0aW9uYWwgUGFyayBwcmVzZXJ2ZXMgYSBzcGVjdGFjdWxhciBsYW5kc2NhcGUgcmljaCB3aXRoIG1hamVzdGljIG1vdW50YWlucywgcHJpc3RpbmUgbGFrZXMsIFwiICtcbiAgICAgICAgICAgIFwiYW5kIGV4dHJhb3JkaW5hcnkgd2lsZGxpZmUuIFRoZSBhYnJ1cHQgdmVydGljYWwgcmlzZSBvZiB0aGUgamFnZ2VkIFRldG9uIE1vdW50YWlucyBjb250cmFzdHMgd2l0aCB0aGUgaG9yaXpvbnRhbCBcIiArXG4gICAgICAgICAgICBcInNhZ2UtY292ZXJlZCB2YWxsZXkgYW5kIGdsYWNpYWwgbGFrZXMgYXQgaXRzIGJhc2UuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkl0IHRvb2sgbW9yZSB0aGFuIDMwIHllYXJzIGZvciBHcmFuZCBUZXRvbiBOYXRpb25hbCBQYXJrIHRvIHRyYW5zZm9ybSBmcm9tIGFuIGlkZWEgdG8gb25lIG9mIHRoZSBjb3VudHJ5J3MgbW9zdCBzdHVubmluZyBwYXJrcy4gXCIgK1xuICAgICAgICAgICAgXCJXaGVuIENvbmdyZXNzIGNyZWF0ZWQgdGhlIHBhcmsgaW4gMTkyOSwgaXQgb25seSBpbmNsdWRlZCB0aGUgVGV0b24gUmFuZ2UgYW5kIHNpeCBnbGFjaWFsIGxha2VzLiBKb2huIEQuIFJvY2tlZmVsbGVyLCBKci4sIFwiICtcbiAgICAgICAgICAgIFwicGxheWVkIGEga2V5IHJvbGUgaW4gYWNxdWlyaW5nIGFuIGFkZGl0aW9uYWwgMzUsMDAwIGFjcmVzIGZvciB0aGUgcGFyayB1bmRlciB0aGUgbmFtZSBcXFwiU25ha2UgUml2ZXIgTGFuZCBDby5cXFwiIEFtaWQgXCIgK1xuICAgICAgICAgICAgXCJjb250cm92ZXJzeSB0aGUgXFxcIm5ld1xcXCIgR3JhbmQgVGV0b24gTmF0aW9uYWwgUGFyayB3YXMgZXN0YWJsaXNoZWQgU2VwdC4gMTQsIDE5NTAsIGJ5IFByZXNpZGVudCBIYXJyeSBUcnVtYW4uXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkdyYW5kIFRldG9uIE5hdGlvbmFsIFBhcmsgYW5kIGl0cyB3b3JsZC1jbGFzcyBzY2VuZXJ5IGF0dHJhY3RzIG5lYXJseSA0IG1pbGxpb24gdmlzaXRvcnMgcGVyIHllYXIuIFdpdGggSmVubnkgTGFrZSBcIiArXG4gICAgICAgICAgICBcImFuZCBKYWNrc29uIExha2UgYXQgNiwzMjAgZmVldCBhbmQgdGhlIHN1bW1pdCBvZiB0aGUgR3JhbmQgVGV0b24gYXQgMTMsNzcwIGZlZXQsIHRoZSBwYXJrJ3MgZWxldmF0aW9uIHJhbmdlcyBjcmVhdGUgXCIgK1xuICAgICAgICAgICAgXCJvbmUgb2YgdGhlIG5hdGlvbidzIG1vc3QgYXdlLWluc3BpcmluZyBsYW5kc2NhcGVzLiBJbiBhZGRpdGlvbiB0byBnYXppbmcgYXQgdGhlIGluY3JlZGlibGUgdmlld3MsIHRoZXJlIGlzIG11Y2ggdG8gZG8gXCIgK1xuICAgICAgICAgICAgXCJpbiB0aGlzIHBhcmsgZnJvbSBoaWtpbmcgYW5kIHJvY2sgY2xpbWJpbmcgdG8gYm9hdGluZyBhbmQgZmlzaGluZy4gQW5kIHdoZW4geW91IG5lZWQgYSBicmVhayBmcm9tIG91dGRvb3IgYWR2ZW50dXJlLCBcIiArXG4gICAgICAgICAgICBcInRoZXJlIGFyZSBmZXcgYmV0dGVyIHBsYWNlcyB0byBzaW1wbHkgcmVsYXggYW5kIHdhdGNoIHRoZSBwYXJrJ3MgaW5jcmVkaWJsZSB3aWxkbGlmZS5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvd2FnYW1hbWFzLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJXeW9taW5nXCIsXG4gICAgICAgIGxpa2VzOiAxNjksXG4gICAgICAgIGNvbW1lbnRzOiA3XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICBuYW1lOiBcIkRpY2V5c1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJFeHBsb3JlIFNvdXRoIERha290YeKAmXMgQmxhY2sgSGlsbHMgcmVnaW9uLCBhIG5hdHVyYWwgd29uZGVyIGluIGl0cyBvd24gcmlnaHQuIFwiICtcbiAgICAgICAgICAgIFwiTG9jYXRlZCBhYm91dCBzaXggaG91cnMgZnJvbSBZZWxsb3dzdG9uZSwgdGhlIEJsYWNrIEhpbGxzIGFyZSBob21lIHRvIHNldmVuIG5hdGlvbmFsIFwiICtcbiAgICAgICAgICAgIFwic2l0ZXMg4oCUIEJhZGxhbmRzIE5hdGlvbmFsIFBhcmssIEpld2VsIENhdmUgTmF0aW9uYWwgTW9udW1lbnQsIHRoZSBMZXdpcyAmIENsYXJrIE5hdGlvbmFsIFwiICtcbiAgICAgICAgICAgIFwiSGlzdG9yaWMgVHJhaWwsIE1pbnV0ZW1hbiBNaXNzaWxlIE5hdGlvbmFsIEhpc3RvcmljIFNpdGUsIE1pc3NvdXJpIE5hdGlvbmFsIFJlY3JlYXRpb25hbCBcIiArXG4gICAgICAgICAgICBcIlJpdmVyLCBNb3VudCBSdXNobW9yZSBOYXRpb25hbCBNZW1vcmlhbCwgYW5kIFdpbmQgQ2F2ZSBOYXRpb25hbCBQYXJrLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJJbiB0aGlzIG5hdHVyYWwgcGxheWdyb3VuZCwgeW91IGNhbiBlbmpveSBhbiBhYnVuZGFuY2Ugb2YgcmVjcmVhdGlvbmFsIG9wcG9ydHVuaXRpZXMsIGdvcmdlb3VzIFwiICtcbiAgICAgICAgICAgIFwic2NlbmljIGRyaXZlcyDigJQgd2hpY2ggaW5jbHVkZSB0aGUgYmVhdXRpZnVsIFNwZWFyZmlzaCBDYW55b24g4oCUIGFuZCB3aWxkbGlmZS13YXRjaGluZy4gVGhpcyByZWdpb24gXCIgK1xuICAgICAgICAgICAgXCJpcyBhbHNvIHBhY2tlZCB3aXRoIGN1bHR1cmFsIGFuZCBoaXN0b3JpY2FsIHNpdGVzLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJXaGlsZSB5b3Ugd29u4oCZdCBzZWUgc2FiZXItdG9vdGhlZCBjYXRzIG9yIHJoaW5vY2Vyb3NlcyByb2FtaW5nIHRoZSBCYWRsYW5kcyBsaWtlIHRoZXkgb25jZSBkaWQsIFwiICtcbiAgICAgICAgICAgIFwieW91IG1heSBzZWUgdGhlaXIgcmVtYWlucyBpbiB0aGlzIHN0dW5uaW5nIG5hdGlvbmFsIHBhcmsgd2l0aCBzb21lIG9mIHRoZSB3b3JsZOKAmXMgcmljaGVzdCBmb3NzaWwgZGVwb3NpdHMuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkxvY2F0ZWQgaW4gSW1sYXkgVG93bnNoaXAgaW4gU291dGggRGFrb3RhLCBCYWRsYW5kcyBOYXRpb25hbCBQYXJrIGhhcyBhIEZvc3NpbCBQcmVwYXJhdGlvbiBMYWIgXCIgK1xuICAgICAgICAgICAgXCJ3aGVyZSB5b3UgY2FuIHdhdGNoIHBhbGVvbnRvbG9naXN0cyBhdCB3b3JrLCBsaXRlcmFsbHkgdW5jb3ZlcmluZyB0aGUgYW5jaWVudCBoaXN0b3J5IG9mIHRoZSBhcmVhLiBcIiArXG4gICAgICAgICAgICBcIkF0IHRoZSBCZW4gUmVpZmVsIFZpc2l0b3IgQ2VudGVyLCBraWRzIGNhbiB1c2UgYSB0b3VjaHNjcmVlbiB0byBhc3NlbWJsZSBhIHZpcnR1YWwgc2tlbGV0b24gYW5kIFwiICtcbiAgICAgICAgICAgIFwidG91Y2ggZm9zc2lsaXplZCBhbmltYWwgcmVwbGljYXMuIFlvdSBhbHNvIGNhbiB3YXRjaCB0aGUgZmlsbSBMYW5kIG9mIFN0b25lIGFuZCBMaWdodCBpbiBcIiArXG4gICAgICAgICAgICBcInRoZSBjZW50ZXLigJlzIDk1LXNlYXQgYWlyLWNvbmRpdGlvbmVkIHRoZWF0ZXIuXCIsXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL2RpY2V5cy5qcGdcIixcbiAgICAgICAgbG9jYXRpb246IFwiU291dGggRGFrb3RhXCIsXG4gICAgICAgIGxpa2VzOiAyMjcsXG4gICAgICAgIGNvbW1lbnRzOiAyNlxuICAgIH1cbl0iLCJpbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gJy4vbGFuZG1hcmsnO1xuXG5leHBvcnQgY29uc3QgTEFORE1BUktTOiBMYW5kbWFya1tdID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IFwiV293IEJ1cmdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXJ2ZWwgYXQgbW9yZSB0aGFuIDIsMDAwIG5hdHVyYWwgcm9jayBhcmNoZXMgYXQgdGhpcyBwYXJrIGp1c3Qgb3V0c2lkZSBvZiBNb2FiLiBcIiArXG4gICAgICAgICAgICBcIlNvbWUgb2YgdGhlIGZvcm1hdGlvbnMgY2FuIGJlIHNwb3R0ZWQgZnJvbSB0aGUgcm9hZCwgYnV0IHRoZSBiZXN0IHJlcXVpcmUgYSBzY2VuaWMgaGlrZS4gXCIgK1xuICAgICAgICAgICAgXCJEb27igJl0IG1pc3MgdGhlIGZhbW91cyBEZWxpY2F0ZSBBcmNoICgzIG1pbGVzIHJvdW5kLXRyaXApIG9yIHRoZSA3LW1pbGUgKHJvdW5kLXRyaXApIERldmlscyBHYXJkZW4gTG9vcC5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiVGhlIFBhcmsgQXZlbnVlIFRyYWlsIGlzIHRoZSBtb3N0IHBvcHVsYXIgaGlrZSBpbiB0aGUgcGFyayBiZWNhdXNlIG9mIGl0cyBlYXNlIGFuZCBzY2VuZXJ5IGF0IGp1c3QgXCIgK1xuICAgICAgICAgICAgXCIyIG1pbGVzIHJvdW5kIHRyaXAuIE9yIHRyeSB0aGUgbW9yZSBjaGFsbGVuZ2luZyBoaWtlIHRvIERlbGljYXRlIEFyY2hlcyBhdCAzLjIgbWlsZXMgcm91bmQgdHJpcC5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiV2hldGhlciB5b3UgYXJlIGNhbXBpbmcgb3Igc3RheWluZyBpbiBhIGhvdGVsLCBkb27igJl0IGZvcmdldCB0byBzcGVuZCBzb21lIHRpbWUgbG9va2luZyB1cCBhdCB0aGUgc2t5IFwiICtcbiAgICAgICAgICAgIFwiYWZ0ZXIgbmlnaHQgZmFsbHMuIFlvdeKAmWxsIGZpbmQgc29tZSBvZiB0aGUgZGFya2VzdCBza2llcyBpbiBhbmQgYXJvdW5kIFV0YWjigJlzIG5hdGlvbmFsIHBhcmtzLlwiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2ltZ19zbm93LmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJVdGFoXCIsXG4gICAgICAgIGxpa2VzOiAyNDUsXG4gICAgICAgIGNvbW1lbnRzOiAyM1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogXCJUcmFtbGluZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOaWNrbmFtZWQgdGhlIFxcXCJDcm93biBvZiB0aGUgQ29udGluZW50LFxcXCIgR2xhY2llciBOYXRpb25hbCBQYXJrIHNpdHMgaW4gdGhlIG5vcnRod2VzdCBjb3JuZXIgb2YgXCIgK1xuICAgICAgICAgICAgXCJNb250YW5hLiBHbGFjaWVyIE5hdGlvbmFsIFBhcmsgaXMganVzdCBhIHNjZW5pYyBkYXnigJlzIGRyaXZlIG5vcnRoIGZyb20gWWVsbG93c3RvbmUuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkhpdCB0aGUgdHJhaWwgdG8gZXhwbG9yZSBwbGFjZXMgbGlrZSBGaXNoZXJjYXAgTGFrZSAocGljdHVyZWQpLCB3aGljaCBpcyBhIGdyZWF0IHBsYWNlIHRvIHNwb3QgYSBtb29zZS4gXCIgK1xuICAgICAgICAgICAgXCJGcm9tIE1hbnkgR2xhY2llciBDYW1wZ3JvdW5kLCBnbyB0byB0aGUgU3dpZnRjdXJyZW50IE1vdG9yIElubiBwYXJraW5nIGxvdC4gVGhlIHRyYWlsaGVhZCBpcyBvbiB0aGUgd2VzdCBlbmQuIFwiICtcbiAgICAgICAgICAgIFwiWW91J2xsIGZpbmQgdGhlIGxha2UgbGVzcyB0aGFuIGEgbWlsZSBkb3duIHRoZSB0cmFpbC4gQ29udGludWUgMS41IG1pbGVzIHRvIFJlZHJvY2sgTGFrZSBhbmQgdGFrZSBhIHNwdXIgdG8gUmVkcm9jayBGYWxscy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiQSBOYXRpb25hbCBIaXN0b3JpYyBMYW5kbWFyaywgR29pbmctdG8tdGhlLVN1biBSb2FkIGlzIG9uZSBvZiB0aGUgbW9zdCBzY2VuaWMgcm9hZHMgaW4gTm9ydGggQW1lcmljYSwgbm90IHRvIG1lbnRpb24gXCIgK1xuICAgICAgICAgICAgXCJvbmUgb2YgdGhlIG1vc3QgY29tcGxleCB0byBidWlsZC4gVGhlIGZpbmFsIHNlY3Rpb24sIG92ZXIgTG9nYW4gUGFzcywgd2FzIGNvbXBsZXRlZCBpbiAxOTMyIGFmdGVyIDExIHllYXJzIG9mIHdvcmsuIFwiICtcbiAgICAgICAgICAgIFwiQ29uc2lkZXJlZCBhbiBlbmdpbmVlcmluZyBmZWF0LCB0aGUgY29uc3RydWN0aW9uIG9mIHRoZSByb2FkIGZvcmV2ZXIgY2hhbmdlZCB0aGUgd2F5IHZpc2l0b3JzIHdvdWxkIGV4cGVyaWVuY2UgXCIgK1xuICAgICAgICAgICAgXCJHbGFjaWVyIE5hdGlvbmFsIFBhcmsuIEZ1dHVyZSB2aXNpdG9ycyB3b3VsZCBiZSBhYmxlIHRvIGRyaXZlIG92ZXIgc2VjdGlvbnMgb2YgdGhlIHBhcmsgdGhhdCBwcmV2aW91c2x5IGhhZCBcIiArXG4gICAgICAgICAgICBcInRha2VuIGRheXMgb2YgaG9yc2ViYWNrIHJpZGluZyB0byBzZWUuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkluIHRoZWlyIGFiaWxpdHkgdG8gd293IHZpc2l0b3JzLCBZZWxsb3dzdG9uZSBhbmQgR2xhY2llciBzaGFyZSBhIGNvbW1vbiBib25kLiBCdXQgYXMgd2l0aCBhbnkgZ3JlYXQgZGVzdGluYXRpb24sIFwiICtcbiAgICAgICAgICAgIFwidGhlcmUgYXJlIHNvbWUgYWR2ZW50dXJlcyB0aGF0IGFyZSBmb3VuZCBub3doZXJlIGVsc2UuIEdsYWNpZXIgcHJlc2VydmVzIG92ZXIgMSwwMDAsMDAwIGFjcmVzIG9mIGZvcmVzdHMsIGFscGluZSBcIiArXG4gICAgICAgICAgICBcIm1lYWRvd3MgYW5kIGxha2VzLiBJdHMgZGl2ZXJzZSBoYWJpdGF0cyBhcmUgaG9tZSB0byBvdmVyIDcwIHNwZWNpZXMgb2YgbWFtbWFscyBhbmQgb3ZlciAyNjAgc3BlY2llcyBvZiBiaXJkcy4gXCIgK1xuICAgICAgICAgICAgXCJUaGUgc3BlY3RhY3VsYXIgZ2xhY2lhdGVkIGxhbmRzY2FwZSBpcyBhIGhpa2Vy4oCZcyBwYXJhZGlzZSwgY29udGFpbmluZyA3MDAgbWlsZXMgb2YgbWFpbnRhaW5lZCB0cmFpbHMgdGhhdCBsZWFkIFwiICtcbiAgICAgICAgICAgIFwiZGVlcCBpbnRvIG9uZSBvZiB0aGUgbGFyZ2VzdCBpbnRhY3QgZWNvc3lzdGVtcyBpbiB0aGUgbG93ZXIgNDggc3RhdGVzLlwiLFxuICAgICAgICBpbWFnZTogXCJodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2ltZ19zbm93LmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJNb250YW5hXCIsXG4gICAgICAgIGxpa2VzOiAxNTIsXG4gICAgICAgIGNvbW1lbnRzOiAxNlxuICAgIH1cbl0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kZWJ1Z2dlci9kZXZ0b29scy1lbGVtZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvYWN0aXZpdHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9