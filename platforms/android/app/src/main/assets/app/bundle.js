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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hbmltYXRpb25zLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9sYW5kbWFya3Mtc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL21vY2stbGFuZG1hcmtzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZGVidWdnZXIvZGV2dG9vbHMtZWxlbWVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLDBEOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsd0U7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZGV0YWlscy9kZXRhaWxzLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2RldGFpbHMvZGV0YWlscy5tb2R1bGUudHNcIixcblx0XHQyXG5cdF0sXG5cdFwiLi9ob21lL2hvbWUubW9kdWxlXCI6IFtcblx0XHRcIi4vaG9tZS9ob21lLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MFxuXHRdLFxuXHRcIi4vaG9tZTIvaG9tZTIubW9kdWxlXCI6IFtcblx0XHRcIi4vaG9tZTIvaG9tZTIubW9kdWxlLnRzXCIsXG5cdFx0XCJ2ZW5kb3JcIixcblx0XHQxXG5cdF1cbn07XG5mdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0KHJlcSkge1xuXHR2YXIgaWRzID0gbWFwW3JlcV07XG5cdGlmKCFpZHMpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHRcdHRocm93IGU7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIFByb21pc2UuYWxsKGlkcy5zbGljZSgxKS5tYXAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgaWQgPSBpZHNbMF07XG5cdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHR9KTtcbn1cbndlYnBhY2tBc3luY0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tBc3luY0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQXN5bmNDb250ZXh0LmlkID0gXCIuLi8kJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgcmVjdXJzaXZlXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tBc3luY0NvbnRleHQ7IiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmltYXRpb25zU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfYW5pbWF0aW9uT2Zmc2V0OiBudW1iZXI7XG5cbiAgICBnZXQgYW5pbWF0aW9uT2Zmc2V0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRpb25PZmZzZXQ7XG4gICAgfVxuXG4gICAgc2V0IGFuaW1hdGlvbk9mZnNldChvZmZzZXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9hbmltYXRpb25PZmZzZXQgPSBvZmZzZXQ7XG4gICAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9ob21lMlwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiaG9tZTJcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZTIvaG9tZTIubW9kdWxlI0hvbWUyTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlsc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9kZXRhaWxzL2RldGFpbHMubW9kdWxlI0RldGFpbHNNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxSYWRTaWRlRHJhd2VyIGRyYXdlclRyYW5zaXRpb249XFxcIlB1c2hUcmFuc2l0aW9uXFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJodHRwczovL21lZGlhLmxpY2RuLmNvbS9kbXMvaW1hZ2UvQzUxMEJBUUdBODNHeEdpVVdDQS9jb21wYW55LWxvZ29fMjAwXzIwMC8wP2U9MjE1OTAyNDQwMCZ2PWJldGEmdD1UNW9RSE4zSmp6T0NSZEk1T0thb0dSTlFzQWNMZkg4SzJxRlQyVUlMcENRXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZWRyYXdlci1hdmF0YXJcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlci10ZXh0IHZhclxcXCIgdGV4dD1cXFwiRmlsdGVyc1xcXCI+PC9MYWJlbD5cXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICA8U2Nyb2xsVmlldyByb3c9XFxcIjFcXFwiPlxcbiAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwic2lkZWRyYXdlci1jb250ZW50XFxcIj5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIkhvbWVcXFwiIHRhcD1cXFwib25OYXZpZ2F0aW9uSXRlbVRhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJGb29kXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiRnJpZW5kc1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRpb25JdGVtVGFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAwNztcXFwiIGNsYXNzPVxcXCJmYSBzaWRlZHJhd2VyLWljb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkNsdWJzXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiVG8tRG8gTGlzdFxcXCIgdGFwPVxcXCJvbk5hdmlnYXRpb25JdGVtVGFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjBjYTtcXFwiIGNsYXNzPVxcXCJmYSBzaWRlZHJhd2VyLWljb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkNvZmZlZVxcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIlNldHRpbmdzXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGlvbkl0ZW1UYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDEzO1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiU2hvcHNcXFwiIGNsYXNzPVxcXCJtLWwtMjAgc2lkZWRyYXdlci1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG4gICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICA8cGFnZS1yb3V0ZXItb3V0bGV0IHRrTWFpbkNvbnRlbnQgY2xhc3M9XFxcInBhZ2UgcGFnZS1jb250ZW50XFxcIj48L3BhZ2Utcm91dGVyLW91dGxldD5cXG48L1JhZFNpZGVEcmF3ZXI+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyB9XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0xIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJGb250QXdlc29tZVxcXCI7XFxufVxcblxcbi5hY3Rpb24tYmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ4YjFlYztcXG59XFxuXFxuLmFiLWljb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQgLnBhZ2UtcGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI0Q3RDdENztcXG4gICAgZm9udC1zaXplOiAyMDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucGFnZS1jb250ZW50IC5wYWdlLWljb24ge1xcbiAgICBmb250LXNpemU6IDcyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRDdEN0Q3O1xcbiAgICBtYXJnaW4tdG9wOiAyMCU7XFxufVxcblxcbi5wYWdlLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhyLWxpZ2h0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNDY0YztcXG59XFxuXFxuLnNpZGVkcmF3ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzMwO1xcbn1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYzMwO1xcbiAgICBoZWlnaHQ6IDE5MDtcXG59XFxuXFxuLnNpZGVkcmF3ZXItYXZhdGFyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogMTAwO1xcbiAgICBoZWlnaHQ6IDEwMDtcXG4gICAgYm9yZGVyLXdpZHRoOiA0O1xcbiAgICBib3JkZXItY29sb3I6ICM0OGIxZWM7XFxufVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDI0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogMTA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGVkcmF3ZXItaGVhZGVyLWZvb3Rub3RlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTY7XFxufVxcblxcbi5zaWRlZHJhd2VyLWljb24ge1xcbiAgICBmb250LXNpemU6IDIyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlci13aWR0aDogMztcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzkzYjNmO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzOTNiM2Y7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMzA7XFxuICAgIGZvbnQtc2l6ZTogMjI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBoZWlnaHQ6IDgwO1xcbn1cXG5cXG4uc2lkZWRyYXdlci1pdGVtIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmE0NTA7XFxufVxcbiBcIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEFuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vYW5pbWF0aW9ucy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4vbGFuZG1hcmtzLXNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQW5pbWF0aW9uc1NlcnZpY2UsXG4gICAgICAgIExhbmRtYXJrc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gXCIuL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBMQU5ETUFSS1MgfSBmcm9tIFwiLi9tb2NrLWxhbmRtYXJrc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZG1hcmtzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJZCA9IC0xO1xuXG4gICAgZ2V0TGFuZG1hcmtzKCk6IExhbmRtYXJrW10ge1xuICAgICAgICByZXR1cm4gTEFORE1BUktTO1xuICAgIH1cblxuICAgIGdldExhbmRtYXJrKGlkOiBudW1iZXIpOiBMYW5kbWFyayB7XG4gICAgICAgIHJldHVybiBMQU5ETUFSS1MuZmlsdGVyKGxhbmRtYXJrID0+IGxhbmRtYXJrLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpZCA8IExBTkRNQVJLUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSWQgPSBpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdGVkKCk6IExhbmRtYXJrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQgPCAwID8gbnVsbCA6IHRoaXMuZ2V0TGFuZG1hcmsodGhpcy5fc2VsZWN0ZWRJZCk7XG4gICAgfVxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJpbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gJy4vbGFuZG1hcmsnO1xuXG5leHBvcnQgY29uc3QgTEFORE1BUktTOiBMYW5kbWFya1tdID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IFwiV293IEJ1cmdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXJ2ZWwgYXQgbW9yZSB0aGFuIDIsMDAwIG5hdHVyYWwgcm9jayBhcmNoZXMgYXQgdGhpcyBwYXJrIGp1c3Qgb3V0c2lkZSBvZiBNb2FiLiBcIiArXG4gICAgICAgICAgICBcIlNvbWUgb2YgdGhlIGZvcm1hdGlvbnMgY2FuIGJlIHNwb3R0ZWQgZnJvbSB0aGUgcm9hZCwgYnV0IHRoZSBiZXN0IHJlcXVpcmUgYSBzY2VuaWMgaGlrZS4gXCIgK1xuICAgICAgICAgICAgXCJEb27igJl0IG1pc3MgdGhlIGZhbW91cyBEZWxpY2F0ZSBBcmNoICgzIG1pbGVzIHJvdW5kLXRyaXApIG9yIHRoZSA3LW1pbGUgKHJvdW5kLXRyaXApIERldmlscyBHYXJkZW4gTG9vcC5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiVGhlIFBhcmsgQXZlbnVlIFRyYWlsIGlzIHRoZSBtb3N0IHBvcHVsYXIgaGlrZSBpbiB0aGUgcGFyayBiZWNhdXNlIG9mIGl0cyBlYXNlIGFuZCBzY2VuZXJ5IGF0IGp1c3QgXCIgK1xuICAgICAgICAgICAgXCIyIG1pbGVzIHJvdW5kIHRyaXAuIE9yIHRyeSB0aGUgbW9yZSBjaGFsbGVuZ2luZyBoaWtlIHRvIERlbGljYXRlIEFyY2hlcyBhdCAzLjIgbWlsZXMgcm91bmQgdHJpcC5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiV2hldGhlciB5b3UgYXJlIGNhbXBpbmcgb3Igc3RheWluZyBpbiBhIGhvdGVsLCBkb27igJl0IGZvcmdldCB0byBzcGVuZCBzb21lIHRpbWUgbG9va2luZyB1cCBhdCB0aGUgc2t5IFwiICtcbiAgICAgICAgICAgIFwiYWZ0ZXIgbmlnaHQgZmFsbHMuIFlvdeKAmWxsIGZpbmQgc29tZSBvZiB0aGUgZGFya2VzdCBza2llcyBpbiBhbmQgYXJvdW5kIFV0YWjigJlzIG5hdGlvbmFsIHBhcmtzLlwiLFxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy93b3didXJnZXIuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlV0YWhcIixcbiAgICAgICAgbGlrZXM6IDI0NSxcbiAgICAgICAgY29tbWVudHM6IDIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIlRyYW1saW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk5pY2tuYW1lZCB0aGUgXFxcIkNyb3duIG9mIHRoZSBDb250aW5lbnQsXFxcIiBHbGFjaWVyIE5hdGlvbmFsIFBhcmsgc2l0cyBpbiB0aGUgbm9ydGh3ZXN0IGNvcm5lciBvZiBcIiArXG4gICAgICAgICAgICBcIk1vbnRhbmEuIEdsYWNpZXIgTmF0aW9uYWwgUGFyayBpcyBqdXN0IGEgc2NlbmljIGRheeKAmXMgZHJpdmUgbm9ydGggZnJvbSBZZWxsb3dzdG9uZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiSGl0IHRoZSB0cmFpbCB0byBleHBsb3JlIHBsYWNlcyBsaWtlIEZpc2hlcmNhcCBMYWtlIChwaWN0dXJlZCksIHdoaWNoIGlzIGEgZ3JlYXQgcGxhY2UgdG8gc3BvdCBhIG1vb3NlLiBcIiArXG4gICAgICAgICAgICBcIkZyb20gTWFueSBHbGFjaWVyIENhbXBncm91bmQsIGdvIHRvIHRoZSBTd2lmdGN1cnJlbnQgTW90b3IgSW5uIHBhcmtpbmcgbG90LiBUaGUgdHJhaWxoZWFkIGlzIG9uIHRoZSB3ZXN0IGVuZC4gXCIgK1xuICAgICAgICAgICAgXCJZb3UnbGwgZmluZCB0aGUgbGFrZSBsZXNzIHRoYW4gYSBtaWxlIGRvd24gdGhlIHRyYWlsLiBDb250aW51ZSAxLjUgbWlsZXMgdG8gUmVkcm9jayBMYWtlIGFuZCB0YWtlIGEgc3B1ciB0byBSZWRyb2NrIEZhbGxzLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJBIE5hdGlvbmFsIEhpc3RvcmljIExhbmRtYXJrLCBHb2luZy10by10aGUtU3VuIFJvYWQgaXMgb25lIG9mIHRoZSBtb3N0IHNjZW5pYyByb2FkcyBpbiBOb3J0aCBBbWVyaWNhLCBub3QgdG8gbWVudGlvbiBcIiArXG4gICAgICAgICAgICBcIm9uZSBvZiB0aGUgbW9zdCBjb21wbGV4IHRvIGJ1aWxkLiBUaGUgZmluYWwgc2VjdGlvbiwgb3ZlciBMb2dhbiBQYXNzLCB3YXMgY29tcGxldGVkIGluIDE5MzIgYWZ0ZXIgMTEgeWVhcnMgb2Ygd29yay4gXCIgK1xuICAgICAgICAgICAgXCJDb25zaWRlcmVkIGFuIGVuZ2luZWVyaW5nIGZlYXQsIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIHJvYWQgZm9yZXZlciBjaGFuZ2VkIHRoZSB3YXkgdmlzaXRvcnMgd291bGQgZXhwZXJpZW5jZSBcIiArXG4gICAgICAgICAgICBcIkdsYWNpZXIgTmF0aW9uYWwgUGFyay4gRnV0dXJlIHZpc2l0b3JzIHdvdWxkIGJlIGFibGUgdG8gZHJpdmUgb3ZlciBzZWN0aW9ucyBvZiB0aGUgcGFyayB0aGF0IHByZXZpb3VzbHkgaGFkIFwiICtcbiAgICAgICAgICAgIFwidGFrZW4gZGF5cyBvZiBob3JzZWJhY2sgcmlkaW5nIHRvIHNlZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiSW4gdGhlaXIgYWJpbGl0eSB0byB3b3cgdmlzaXRvcnMsIFllbGxvd3N0b25lIGFuZCBHbGFjaWVyIHNoYXJlIGEgY29tbW9uIGJvbmQuIEJ1dCBhcyB3aXRoIGFueSBncmVhdCBkZXN0aW5hdGlvbiwgXCIgK1xuICAgICAgICAgICAgXCJ0aGVyZSBhcmUgc29tZSBhZHZlbnR1cmVzIHRoYXQgYXJlIGZvdW5kIG5vd2hlcmUgZWxzZS4gR2xhY2llciBwcmVzZXJ2ZXMgb3ZlciAxLDAwMCwwMDAgYWNyZXMgb2YgZm9yZXN0cywgYWxwaW5lIFwiICtcbiAgICAgICAgICAgIFwibWVhZG93cyBhbmQgbGFrZXMuIEl0cyBkaXZlcnNlIGhhYml0YXRzIGFyZSBob21lIHRvIG92ZXIgNzAgc3BlY2llcyBvZiBtYW1tYWxzIGFuZCBvdmVyIDI2MCBzcGVjaWVzIG9mIGJpcmRzLiBcIiArXG4gICAgICAgICAgICBcIlRoZSBzcGVjdGFjdWxhciBnbGFjaWF0ZWQgbGFuZHNjYXBlIGlzIGEgaGlrZXLigJlzIHBhcmFkaXNlLCBjb250YWluaW5nIDcwMCBtaWxlcyBvZiBtYWludGFpbmVkIHRyYWlscyB0aGF0IGxlYWQgXCIgK1xuICAgICAgICAgICAgXCJkZWVwIGludG8gb25lIG9mIHRoZSBsYXJnZXN0IGludGFjdCBlY29zeXN0ZW1zIGluIHRoZSBsb3dlciA0OCBzdGF0ZXMuXCIsXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3RyYW1saW5lLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJNb250YW5hXCIsXG4gICAgICAgIGxpa2VzOiAxNTIsXG4gICAgICAgIGNvbW1lbnRzOiAxNlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJBY2FkZW15XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJKdXN0IDE1IG1pbGVzIHNvdXRoIG9mIE1vYWIsIGhpa2UgeW91ciB3YXkgdGhyb3VnaCAzMzcsIDU5OCBhY3JlcyBvZiBkcmFtYXRpYyByZWQtcm9jayBcIiArXG4gICAgICAgICAgICBcImxhbmRzY2FwZSBpbiBDYW55b25sYW5kcyBOUCwgYW5kIGRvIGl0IGFsbCB3aXRob3V0IGhhdmluZyB0byBjb21wZXRlIGZvciByb29tIG9uIHRoZSB0cmFpbCAtIENhbnlvbmxhbmRzIFwiICtcbiAgICAgICAgICAgIFwiaXMgYm90aCBVdGFo4oCZcyBsYXJnZXN0IGFuZCBsZWFzdCB2aXNpdGVkIHBhcmsuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIlRoZSByaXZlci1jYXJ2ZWQgcGFyayBib2FzdHMgMzYwLWRlZ3JlZSB2aWV3cyBvZiBydXN0LWNvbG9yZWQgYXJjaGVzLCBidXR0ZXMsIGFuZCBjbGlmZnMgLSBidXQgYmVjYXVzZSBcIiArXG4gICAgICAgICAgICBcIm9mIHRoZSBoaWdoLWRlc2VydCByb2NrIGVudmlyb25tZW50LCBpdHMgY2xpbWF0ZSBpcyBzdWJqZWN0IHRvIGV4dHJlbWUgdGVtcGVyYXR1cmUgZmx1Y3R1YXRpb25zLiBcIiArXG4gICAgICAgICAgICBcIlNraXAgcGFja2luZyB0aGUgcGFya2EsIGFuZCBnbyBpbiB0aGUgc3ByaW5nIG9yIGZhbGwgZm9yIHRoZSBtb3N0IG1vZGVyYXRlLCBhbmQgbW9zdCBmb3JnaXZpbmcsIHdlYXRoZXIuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIlNvIGV4cGFuc2l2ZSBpdOKAmXMgZGl2aWRlZCBpbnRvIGZvdXIgZGlzdHJpY3RzLCBDYW55b25sYW5kcyBkZWxpdmVycyBhIHF1aW50ZXNzZW50aWFsIGRlc2VydCBleHBlcmllbmNlOiBkZWVwIGNhbnlvbnMsIFwiICtcbiAgICAgICAgICAgIFwicHJlaGlzdG9yaWMgcm9jayBhcnQsIHJpdmVycywgYW5kIHN3ZWVwaW5nIG92ZXJsb29rcy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiQW1vbmcgdGhlIGV4Y2VwdGlvbmFsLCBzdHJpYXRlZCByb2NrIGZvcm1hdGlvbnMsIHRoZXJlIGFyZSBcIiArXG4gICAgICAgICAgICBcImxhbmRtYXJrcyB5b3Ugc2hvdWxkbuKAmXQgbWlzcywgbGlrZSB0aGUgdW51c3VhbCAxNTAwLWZvb3QgVXBoZWF2YWwgRG9tZSAtIHRob3VnaHQgdG8gYmUgYSBtZXRlb3JpdGUgY3JhdGVyIC0gb3IgdGhlIFwiICtcbiAgICAgICAgICAgIFwiRHJ1aWQgQXJjaCwgb2Z0ZW4gcmVmZXJyZWQgdG8gYXMgVXRhaOKAmXMgb3duIFN0b25laGVuZ2UuIEtlZXAgd2F0Y2ggZm9yIHRoZSB3aWxkbGlmZSwgdG9vLiBCaWdob3JuIHNoZWVwIHRha2UgcmVzaWRlbmNlIFwiICtcbiAgICAgICAgICAgIFwiaW4gdGhlIGNhbnlvbnMgYW5kIGJ1dHRlcywgYWxvbmcgd2l0aCBtdWxlIGRlZXIsIGthbmdhcm9vIHJhdHMsIGFuZCBjb3lvdGUuIExvb2sgdXAgZm9yIHJlZC0gdGFpbGVkIGhhd2tzLCBhbmQgYXQgbmlnaHQsIFwiICtcbiAgICAgICAgICAgIFwiZm9yIG9uZSBvZiB0aGUgZGFya2VzdCBza2llcyBpbiB0aGUgTG93ZXIgNDguIE9uIGEgbW9vbmxlc3MgbmlnaHQsIGdldCBtb3JlIHRoYW4geW91ciBmaWxsIG9mIHN0YXJzIC0gb3IgZ2V0IG91dCB0aGUgXCIgK1xuICAgICAgICAgICAgXCJiaW5vY3VsYXJzIHRvIHRyeSBmb3IgdGhlIHJpbmdzIG9mIFNhdHVybi5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvYWNhZGVteS5qcGdcIixcbiAgICAgICAgbG9jYXRpb246IFwiVXRhaFwiLFxuICAgICAgICBsaWtlczogMzg1LFxuICAgICAgICBjb21tZW50czogMzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwiRXZlcmxlaWdoXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpdmlkZWQgYnkgYSAyNzctbWlsZSBsb25nIGNhbnlvbiwgYW5kIHRoZSBtaWxlLWRlZXAgQ29sb3JhZG8gUml2ZXIsIHRoZSB0d28gaGFsdmVzIG9mIEdyYW5kIENhbnlvbiBOYXRpb25hbCBQYXJrLCBcIiArXG4gICAgICAgICAgICBcInRoZSBOb3J0aCBhbmQgU291dGggUmltLCBvZmZlciB0d28gcGFya3MgaW4gb25lLCB3aXRoIGRpdmVyc2UgbGFuZHNjYXBlIGFuZCBlY29sb2d5IG9uIGVpdGhlci5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiR3JhbmQgQ2FueW9uIE5hdGlvbmFsIFBhcmssIGFuZCB0aGUgZ3JlYXRlciBHcmFuZCBDYW55b24gcmVnaW9uLCBpcyBhIGhpa2VyJ3MgZHJlYW0uIE1vc3Qgb2YgR3JhbmQgQ2FueW9uIE5hdGlvbmFsIFBhcmsgaXMgXCIgK1xuICAgICAgICAgICAgXCJ1bmRldmVsb3BlZCBiYWNrY291bnRyeS4gVGhlcmUgYXJlIGxpdGVyYWxseSBodW5kcmVkcyBvZiBtaWxlcyB0byBoaWtlLCBiYWNrcGFjayBhbmQgZXhwbG9yZS4gRGVzcGl0ZSB0aGUgR3JhbmQgQ2FueW9uJ3MgXCIgK1xuICAgICAgICAgICAgXCJwb3B1bGFyaXR5IGFuZCBudW1iZXJzIG9mIHZpc2l0b3JzIGVhY2ggeWVhciwgdmlzaXRvcnMgb25seSBuZWVkIHRvIGhpa2UgYSBzbWFsbCBkaXN0YW5jZSB0byBlbmpveSBzb21lIHNvbGl0dWRlLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJFeHBsb3JlIHRoZSBkZXB0aHMgb2YgdGhlIEdyYW5kIENhbnlvbiBOYXRpb25hbCBQYXJrIG9uIHBvcHVsYXIgdHJhaWxzIGxpa2UgdGhlIEJyaWdodCBBbmdlbCBhbmQgU291dGggS2FpYmFiIHRyYWlsIG9uIGEgbXVsZS4gXCIgK1xuICAgICAgICAgICAgXCJBIEdyYW5kIENhbnlvbiBtdWxlIHJpZGUgaXMgYW4gYWR2ZW50dXJlIGFuZCBlYXN5IG9uIHlvdXIgbGVncy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiT25lIG9mIHRoZSBtb3N0IGV4Y2l0aW5nIHdheXMgdG8gZXhwZXJpZW5jZSB0aGUgR3JhbmQgQ2FueW9uIGlzIHRvIGZsb2F0IHRocm91Z2ggaXQgYnkgd2F5IG9mIHJhZnQgb24gdGhlIENvbG9yYWRvIFJpdmVyLiBcIiArXG4gICAgICAgICAgICBcIk1vc3QgcGVvcGxlIGJvb2sgdGhlaXIgdHJpcCB3aXRoIGEgY29tbWVyY2lhbCBvdXRmaXR0ZXIgYW5kIHlvdSBjYW4gZXZlbiBjb21iaW5lIHRoZSByYWZ0aW5nIHRyaXAgd2l0aCBhIGhlbGljb3B0ZXIgcmlkZS4gXCIgK1xuICAgICAgICAgICAgXCJFeHBlcmllbmNlZCB3aGl0ZXdhdGVyIHJhZnRlcj8gRW50ZXIgdGhlIGxvdHRlcnkgdG8gZG8geW91ciBvd24gdHJpcC5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZXZlcmxlaWdoLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJBcml6b25hXCIsXG4gICAgICAgIGxpa2VzOiA1MTQsXG4gICAgICAgIGNvbW1lbnRzOiA0OVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJXb3JrbWFuc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXhpbWl6ZSB5b3VyIGV4cGVyaWVuY2UgYXQgQnJ5Y2UgQ2FueW9uIE5hdGlvbmFsIFBhcmsgYnkgZHJpdmluZyB0byBTdW5yaXNlLCBTdW5zZXQsIEluc3BpcmF0aW9uIGFuZCBcIiArXG4gICAgICAgICAgICBcIkJyeWNlIHZpZXdwb2ludHMuIFRoZXNlIGFyZSBhbGwgc3BlY3RhY3VsYXIgb3Zlcmxvb2tzIG9mIHRoZSBwYXJr4oCZcyByZWQgaG9vZG9vcyBzaG9vdGluZyB1cCBhZ2FpbnN0IGV2ZXJncmVlbiBcIiArXG4gICAgICAgICAgICBcImZvcmVzdHMgaW4gdGhlIGJhY2tncm91bmQuIERlcGVuZGluZyBvbiB0aGUgdGltZSBvZiBkYXksIGFuZCB0aGUgYW5nbGUgYW5kIGxpZ2h0IG9mIHRoZSBzdW4sIHRoZSBob29kb29zIGFuZCBcIiArXG4gICAgICAgICAgICBcIm15c3RlcmlvdXMgcm9jayBmb3JtYXRpb25zIG9mdGVuIHRha2Ugb24gdW51c3VhbCBwYXR0ZXJucyBhbmQgc2hhcGVzLCBhbmQgc29tZSB0aGluaywgaW1hZ2luYXJ5IGZhY2VzLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJGb3IgbW9yZSBpbnNwaXJhdGlvbiwgbGFjZSB1cCB5b3VyIGhpa2luZyBib290cyBvciBvdGhlciBzdHVyZHkgc2hvZXMgYW5kIGV4cGxvcmUgYSB0cmFpbC4gVGhlcmUgaXMgc29tZXRoaW5nIFwiICtcbiAgICAgICAgICAgIFwiZm9yIGV2ZXJ5b25lIGF0IEJyeWNlIENhbnlvbi4gT3VyIGZhdm9yaXRlIGVhc3kgaGlrZXMgaW5jbHVkZSBCcmlzdGxlY29uZSBMb29wIFRyYWlsIGFuZCBRdWVlbnMgR2FyZGVuIFRyYWlsLiBcIiArXG4gICAgICAgICAgICBcIkhhdCBTaG9wIGlzIG91ciBmYXZvcml0ZSBtb2RlcmF0ZSBoaWtlLiBGb3IgbW9yZSBwaHlzaWNhbGx5IGZpdCBoaWtlcnMgbG9va2luZyBmb3IgYSBzdHJlbnVvdXMgYWR2ZW50dXJlLCBcIiArXG4gICAgICAgICAgICBcImRvIHRoZSA1LjUtbWlsZSB2ZXJ0aWNhbGx5IGNoYWxsZW5naW5nIFBlZWstQS1Cb28gTG9vcCBvciB0aGUgNy45IEZhaXJ5bGFuZCBMb29wIHJhdGVkIOKAnGRpZmZpY3VsdOKAnSBieSB0aGUgcGFyayBzZXJ2aWNlLiBcIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvd29ya21hbnMuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlV0YWhcIixcbiAgICAgICAgbGlrZXM6IDI0NSxcbiAgICAgICAgY29tbWVudHM6IDExXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiBcIldhZ2FtYW1hc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHcmFuZCBUZXRvbiBOYXRpb25hbCBQYXJrIHByZXNlcnZlcyBhIHNwZWN0YWN1bGFyIGxhbmRzY2FwZSByaWNoIHdpdGggbWFqZXN0aWMgbW91bnRhaW5zLCBwcmlzdGluZSBsYWtlcywgXCIgK1xuICAgICAgICAgICAgXCJhbmQgZXh0cmFvcmRpbmFyeSB3aWxkbGlmZS4gVGhlIGFicnVwdCB2ZXJ0aWNhbCByaXNlIG9mIHRoZSBqYWdnZWQgVGV0b24gTW91bnRhaW5zIGNvbnRyYXN0cyB3aXRoIHRoZSBob3Jpem9udGFsIFwiICtcbiAgICAgICAgICAgIFwic2FnZS1jb3ZlcmVkIHZhbGxleSBhbmQgZ2xhY2lhbCBsYWtlcyBhdCBpdHMgYmFzZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiSXQgdG9vayBtb3JlIHRoYW4gMzAgeWVhcnMgZm9yIEdyYW5kIFRldG9uIE5hdGlvbmFsIFBhcmsgdG8gdHJhbnNmb3JtIGZyb20gYW4gaWRlYSB0byBvbmUgb2YgdGhlIGNvdW50cnkncyBtb3N0IHN0dW5uaW5nIHBhcmtzLiBcIiArXG4gICAgICAgICAgICBcIldoZW4gQ29uZ3Jlc3MgY3JlYXRlZCB0aGUgcGFyayBpbiAxOTI5LCBpdCBvbmx5IGluY2x1ZGVkIHRoZSBUZXRvbiBSYW5nZSBhbmQgc2l4IGdsYWNpYWwgbGFrZXMuIEpvaG4gRC4gUm9ja2VmZWxsZXIsIEpyLiwgXCIgK1xuICAgICAgICAgICAgXCJwbGF5ZWQgYSBrZXkgcm9sZSBpbiBhY3F1aXJpbmcgYW4gYWRkaXRpb25hbCAzNSwwMDAgYWNyZXMgZm9yIHRoZSBwYXJrIHVuZGVyIHRoZSBuYW1lIFxcXCJTbmFrZSBSaXZlciBMYW5kIENvLlxcXCIgQW1pZCBcIiArXG4gICAgICAgICAgICBcImNvbnRyb3ZlcnN5IHRoZSBcXFwibmV3XFxcIiBHcmFuZCBUZXRvbiBOYXRpb25hbCBQYXJrIHdhcyBlc3RhYmxpc2hlZCBTZXB0LiAxNCwgMTk1MCwgYnkgUHJlc2lkZW50IEhhcnJ5IFRydW1hbi5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiR3JhbmQgVGV0b24gTmF0aW9uYWwgUGFyayBhbmQgaXRzIHdvcmxkLWNsYXNzIHNjZW5lcnkgYXR0cmFjdHMgbmVhcmx5IDQgbWlsbGlvbiB2aXNpdG9ycyBwZXIgeWVhci4gV2l0aCBKZW5ueSBMYWtlIFwiICtcbiAgICAgICAgICAgIFwiYW5kIEphY2tzb24gTGFrZSBhdCA2LDMyMCBmZWV0IGFuZCB0aGUgc3VtbWl0IG9mIHRoZSBHcmFuZCBUZXRvbiBhdCAxMyw3NzAgZmVldCwgdGhlIHBhcmsncyBlbGV2YXRpb24gcmFuZ2VzIGNyZWF0ZSBcIiArXG4gICAgICAgICAgICBcIm9uZSBvZiB0aGUgbmF0aW9uJ3MgbW9zdCBhd2UtaW5zcGlyaW5nIGxhbmRzY2FwZXMuIEluIGFkZGl0aW9uIHRvIGdhemluZyBhdCB0aGUgaW5jcmVkaWJsZSB2aWV3cywgdGhlcmUgaXMgbXVjaCB0byBkbyBcIiArXG4gICAgICAgICAgICBcImluIHRoaXMgcGFyayBmcm9tIGhpa2luZyBhbmQgcm9jayBjbGltYmluZyB0byBib2F0aW5nIGFuZCBmaXNoaW5nLiBBbmQgd2hlbiB5b3UgbmVlZCBhIGJyZWFrIGZyb20gb3V0ZG9vciBhZHZlbnR1cmUsIFwiICtcbiAgICAgICAgICAgIFwidGhlcmUgYXJlIGZldyBiZXR0ZXIgcGxhY2VzIHRvIHNpbXBseSByZWxheCBhbmQgd2F0Y2ggdGhlIHBhcmsncyBpbmNyZWRpYmxlIHdpbGRsaWZlLlwiLFxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy93YWdhbWFtYXMuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIld5b21pbmdcIixcbiAgICAgICAgbGlrZXM6IDE2OSxcbiAgICAgICAgY29tbWVudHM6IDdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiRGljZXlzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4cGxvcmUgU291dGggRGFrb3Rh4oCZcyBCbGFjayBIaWxscyByZWdpb24sIGEgbmF0dXJhbCB3b25kZXIgaW4gaXRzIG93biByaWdodC4gXCIgK1xuICAgICAgICAgICAgXCJMb2NhdGVkIGFib3V0IHNpeCBob3VycyBmcm9tIFllbGxvd3N0b25lLCB0aGUgQmxhY2sgSGlsbHMgYXJlIGhvbWUgdG8gc2V2ZW4gbmF0aW9uYWwgXCIgK1xuICAgICAgICAgICAgXCJzaXRlcyDigJQgQmFkbGFuZHMgTmF0aW9uYWwgUGFyaywgSmV3ZWwgQ2F2ZSBOYXRpb25hbCBNb251bWVudCwgdGhlIExld2lzICYgQ2xhcmsgTmF0aW9uYWwgXCIgK1xuICAgICAgICAgICAgXCJIaXN0b3JpYyBUcmFpbCwgTWludXRlbWFuIE1pc3NpbGUgTmF0aW9uYWwgSGlzdG9yaWMgU2l0ZSwgTWlzc291cmkgTmF0aW9uYWwgUmVjcmVhdGlvbmFsIFwiICtcbiAgICAgICAgICAgIFwiUml2ZXIsIE1vdW50IFJ1c2htb3JlIE5hdGlvbmFsIE1lbW9yaWFsLCBhbmQgV2luZCBDYXZlIE5hdGlvbmFsIFBhcmsuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkluIHRoaXMgbmF0dXJhbCBwbGF5Z3JvdW5kLCB5b3UgY2FuIGVuam95IGFuIGFidW5kYW5jZSBvZiByZWNyZWF0aW9uYWwgb3Bwb3J0dW5pdGllcywgZ29yZ2VvdXMgXCIgK1xuICAgICAgICAgICAgXCJzY2VuaWMgZHJpdmVzIOKAlCB3aGljaCBpbmNsdWRlIHRoZSBiZWF1dGlmdWwgU3BlYXJmaXNoIENhbnlvbiDigJQgYW5kIHdpbGRsaWZlLXdhdGNoaW5nLiBUaGlzIHJlZ2lvbiBcIiArXG4gICAgICAgICAgICBcImlzIGFsc28gcGFja2VkIHdpdGggY3VsdHVyYWwgYW5kIGhpc3RvcmljYWwgc2l0ZXMuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIldoaWxlIHlvdSB3b27igJl0IHNlZSBzYWJlci10b290aGVkIGNhdHMgb3Igcmhpbm9jZXJvc2VzIHJvYW1pbmcgdGhlIEJhZGxhbmRzIGxpa2UgdGhleSBvbmNlIGRpZCwgXCIgK1xuICAgICAgICAgICAgXCJ5b3UgbWF5IHNlZSB0aGVpciByZW1haW5zIGluIHRoaXMgc3R1bm5pbmcgbmF0aW9uYWwgcGFyayB3aXRoIHNvbWUgb2YgdGhlIHdvcmxk4oCZcyByaWNoZXN0IGZvc3NpbCBkZXBvc2l0cy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiTG9jYXRlZCBpbiBJbWxheSBUb3duc2hpcCBpbiBTb3V0aCBEYWtvdGEsIEJhZGxhbmRzIE5hdGlvbmFsIFBhcmsgaGFzIGEgRm9zc2lsIFByZXBhcmF0aW9uIExhYiBcIiArXG4gICAgICAgICAgICBcIndoZXJlIHlvdSBjYW4gd2F0Y2ggcGFsZW9udG9sb2dpc3RzIGF0IHdvcmssIGxpdGVyYWxseSB1bmNvdmVyaW5nIHRoZSBhbmNpZW50IGhpc3Rvcnkgb2YgdGhlIGFyZWEuIFwiICtcbiAgICAgICAgICAgIFwiQXQgdGhlIEJlbiBSZWlmZWwgVmlzaXRvciBDZW50ZXIsIGtpZHMgY2FuIHVzZSBhIHRvdWNoc2NyZWVuIHRvIGFzc2VtYmxlIGEgdmlydHVhbCBza2VsZXRvbiBhbmQgXCIgK1xuICAgICAgICAgICAgXCJ0b3VjaCBmb3NzaWxpemVkIGFuaW1hbCByZXBsaWNhcy4gWW91IGFsc28gY2FuIHdhdGNoIHRoZSBmaWxtIExhbmQgb2YgU3RvbmUgYW5kIExpZ2h0IGluIFwiICtcbiAgICAgICAgICAgIFwidGhlIGNlbnRlcuKAmXMgOTUtc2VhdCBhaXItY29uZGl0aW9uZWQgdGhlYXRlci5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZGljZXlzLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJTb3V0aCBEYWtvdGFcIixcbiAgICAgICAgbGlrZXM6IDIyNyxcbiAgICAgICAgY29tbWVudHM6IDI2XG4gICAgfVxuXSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RlYnVnZ2VyL2RldnRvb2xzLWVsZW1lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=