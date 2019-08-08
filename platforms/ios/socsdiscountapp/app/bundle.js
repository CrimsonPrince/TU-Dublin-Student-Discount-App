require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./details/details.module": [
		"./details/details.module.ts",
		1
	],
	"./home/home.module": [
		"./home/home.module.ts",
		"vendor",
		0
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
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
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

module.exports = "<RadSideDrawer drawerTransition=\"PushTransition\">\n\n    <GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\n        <StackLayout class=\"sidedrawer-header\">\n            <Image src=\"https://placem.at/people?random=11&w=500&h=500&txt=0\"\n                class=\"sidedrawer-avatar\"></Image>\n            <Label class=\"sidedrawer-header-text var\" text=\"Jane Doe\"></Label>\n            <Label class=\"sidedrawer-header-footnote var\" text=\"jane@mail.com\"></Label>\n        </StackLayout>\n\n        <ScrollView row=\"1\">\n            <StackLayout class=\"sidedrawer-content\">\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"Home\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf015;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Home\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"Friends\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf007;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Friends\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"To-Do List\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf0ca;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"To-Do List\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n                <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\n                    title=\"Settings\" tap=\"onNavigationItemTap\">\n                    <Label row=\"0\" col=\"0\" text=\"&#xf013;\" class=\"fa sidedrawer-icon\"></Label>\n                    <Label row=\"0\" col=\"1\" text=\"Settings\" class=\"m-l-20 sidedrawer-item\"></Label>\n                </GridLayout>\n\n                <StackLayout class=\"hr-light\"></StackLayout>\n\n            </StackLayout>\n        </ScrollView>\n    </GridLayout>\n\n    <page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\n</RadSideDrawer>"

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
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nFor example, the following CSS rule changes the font size of all UI\ncomponents that have the btn class name.\n*/\n.btn {\n    font-size: 18;\n}\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/", ""]);

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

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hbmltYXRpb25zLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9sYW5kbWFya3Mtc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy8uL21vY2stbGFuZG1hcmtzLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDOzs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUczQztJQUFBO0lBVUEsQ0FBQztJQVBHLHNCQUFJLDhDQUFlO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQW9CLE1BQWM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUNuQyxDQUFDOzs7T0FKQTtJQUxRLGlCQUFpQjtRQUQ3QixnRUFBVSxFQUFFO09BQ0EsaUJBQWlCLENBVTdCO0lBQUQsd0JBQUM7Q0FBQTtBQVY2Qjs7Ozs7Ozs7O0FDSDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5QztBQUU4QjtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUU7SUFDL0QsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSx3Q0FBd0MsRUFBRTtDQUM5RSxDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1Qiw4REFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkN0IsaTVCQUFpNUIsdWNBQXVjLDZjQUE2Yyw4Y0FBOGMsMmE7Ozs7Ozs7O0FDQW52RTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQU0xQztJQUFBO0lBQTRCLENBQUM7SUFBaEIsWUFBWTtRQUp4QiwrREFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIscURBQWlDO1NBQ3BDLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBO0FBQUo7Ozs7Ozs7O0FDTnpCLHlFQUEyQixtQkFBTyxDQUFDLGdEQUFnRDtBQUNuRjtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxvR0FBK0Y7O0FBRWpIO0FBQ0EsY0FBYyxRQUFTLDRZQUE0WSxvQkFBb0IsR0FBRzs7QUFFMWI7QUFDQSxRQUFRLElBQVU7QUFDbEI7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEUsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtGO0FBQ0o7QUFDTTtBQUc1QjtBQUNUO0FBRVU7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0J2RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBcEJyQiw4REFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDJEQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsMkZBQWtCO2dCQUNsQixpR0FBOEI7Z0JBQzlCLG9FQUFnQjthQUNuQjtZQUNELFlBQVksRUFBRTtnQkFDViwyREFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLHFFQUFpQjtnQkFDakIsbUVBQWdCOzthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDTCw4REFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQTtBQUFKOzs7Ozs7Ozs7QUMvQnRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFFRTtBQUc3QztJQURBO1FBRVksZ0JBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQW1CN0IsQ0FBQztJQWpCRyx1Q0FBWSxHQUFaO1FBQ0ksT0FBTyx5REFBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksRUFBVTtRQUNsQixPQUFPLHlEQUFTLENBQUMsTUFBTSxDQUFDLGtCQUFRLElBQUksZUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsd0NBQWEsR0FBYixVQUFjLEVBQVU7UUFDcEIsSUFBSSxFQUFFLEdBQUcseURBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQW5CUSxnQkFBZ0I7UUFENUIsZ0VBQVUsRUFBRTtPQUNBLGdCQUFnQixDQW9CNUI7SUFBRCx1QkFBQztDQUFBO0FBcEI0Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0g3QixPQUFPLEVBQUUsaUdBQXNDO0FBRS9DLE9BQU8sRUFBRSxHQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsY0FBYyxFQUFFLENBQUM7QUFDakIsbUJBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x6RDtBQUFBO0FBQU8sSUFBTSxTQUFTLEdBQWU7SUFDakM7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLFdBQVcsRUFBRSxtRkFBbUY7WUFDNUYsMkZBQTJGO1lBQzNGLHlHQUF5RztZQUN6RyxNQUFNO1lBQ04scUdBQXFHO1lBQ3JHLGtHQUFrRztZQUNsRyxNQUFNO1lBQ04sdUdBQXVHO1lBQ3ZHLCtGQUErRjtRQUNuRyxLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEVBQUU7S0FDZjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsVUFBVTtRQUNoQixXQUFXLEVBQUUsa0dBQWtHO1lBQzNHLHFGQUFxRjtZQUNyRixNQUFNO1lBQ04sMEdBQTBHO1lBQzFHLGdIQUFnSDtZQUNoSCw0SEFBNEg7WUFDNUgsTUFBTTtZQUNOLHVIQUF1SDtZQUN2SCxzSEFBc0g7WUFDdEgsaUhBQWlIO1lBQ2pILDhHQUE4RztZQUM5Ryx3Q0FBd0M7WUFDeEMsTUFBTTtZQUNOLG9IQUFvSDtZQUNwSCxtSEFBbUg7WUFDbkgsZ0hBQWdIO1lBQ2hILGlIQUFpSDtZQUNqSCx3RUFBd0U7UUFDNUUsS0FBSyxFQUFFLHVCQUF1QjtRQUM5QixRQUFRLEVBQUUsU0FBUztRQUNuQixLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxFQUFFO0tBQ2Y7SUFDRDtRQUNJLEVBQUUsRUFBRSxDQUFDO1FBQ0wsSUFBSSxFQUFFLFNBQVM7UUFDZixXQUFXLEVBQ1AseUZBQXlGO1lBQ3pGLDJHQUEyRztZQUMzRyxnREFBZ0Q7WUFDaEQsTUFBTTtZQUNOLHlHQUF5RztZQUN6RyxtR0FBbUc7WUFDbkcsMEdBQTBHO1lBQzFHLE1BQU07WUFDTix3SEFBd0g7WUFDeEgsdURBQXVEO1lBQ3ZELE1BQU07WUFDTiw2REFBNkQ7WUFDN0QscUhBQXFIO1lBQ3JILHlIQUF5SDtZQUN6SCwySEFBMkg7WUFDM0gsdUhBQXVIO1lBQ3ZILDRDQUE0QztRQUNoRCxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEVBQUU7S0FDZjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsV0FBVztRQUNqQixXQUFXLEVBQUUscUhBQXFIO1lBQzlILGdHQUFnRztZQUNoRyxNQUFNO1lBQ04sNkhBQTZIO1lBQzdILDJIQUEySDtZQUMzSCxtSEFBbUg7WUFDbkgsTUFBTTtZQUNOLGlJQUFpSTtZQUNqSSxpRUFBaUU7WUFDakUsTUFBTTtZQUNOLDRIQUE0SDtZQUM1SCw0SEFBNEg7WUFDNUgsdUVBQXVFO1FBQzNFLEtBQUssRUFBRSx3QkFBd0I7UUFDL0IsUUFBUSxFQUFFLFNBQVM7UUFDbkIsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsRUFBRTtLQUNmO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsQ0FBQztRQUNMLElBQUksRUFBRSxVQUFVO1FBQ2hCLFdBQVcsRUFBRSx3R0FBd0c7WUFDakgsZ0hBQWdIO1lBQ2hILCtHQUErRztZQUMvRyx3R0FBd0c7WUFDeEcsTUFBTTtZQUNOLGdIQUFnSDtZQUNoSCxnSEFBZ0g7WUFDaEgsNEdBQTRHO1lBQzVHLDBIQUEwSDtRQUM5SCxLQUFLLEVBQUUsdUJBQXVCO1FBQzlCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEVBQUU7S0FDZjtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsV0FBVztRQUNqQixXQUFXLEVBQUUsNEdBQTRHO1lBQ3JILG1IQUFtSDtZQUNuSCxvREFBb0Q7WUFDcEQsTUFBTTtZQUNOLGtJQUFrSTtZQUNsSSw0SEFBNEg7WUFDNUgsc0hBQXNIO1lBQ3RILDhHQUE4RztZQUM5RyxNQUFNO1lBQ04scUhBQXFIO1lBQ3JILHNIQUFzSDtZQUN0SCx3SEFBd0g7WUFDeEgsdUhBQXVIO1lBQ3ZILHVGQUF1RjtRQUMzRixLQUFLLEVBQUUsd0JBQXdCO1FBQy9CLFFBQVEsRUFBRSxTQUFTO1FBQ25CLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLENBQUM7S0FDZDtJQUNEO1FBQ0ksRUFBRSxFQUFFLENBQUM7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLFdBQVcsRUFBRSxnRkFBZ0Y7WUFDekYsdUZBQXVGO1lBQ3ZGLDJGQUEyRjtZQUMzRiwyRkFBMkY7WUFDM0YsdUVBQXVFO1lBQ3ZFLE1BQU07WUFDTixpR0FBaUc7WUFDakcsb0dBQW9HO1lBQ3BHLG9EQUFvRDtZQUNwRCxNQUFNO1lBQ04sa0dBQWtHO1lBQ2xHLDRHQUE0RztZQUM1RyxNQUFNO1lBQ04saUdBQWlHO1lBQ2pHLHFHQUFxRztZQUNyRyxrR0FBa0c7WUFDbEcsMkZBQTJGO1lBQzNGLCtDQUErQztRQUNuRCxLQUFLLEVBQUUscUJBQXFCO1FBQzVCLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEVBQUU7S0FDZjtDQUNKOzs7Ozs7OztBQzlKRCw0Qzs7Ozs7OztBQ0FBLDBDOzs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDZEOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSw2RDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxpRTs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEscUQ7Ozs7Ozs7QUNBQSxvRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vZGV0YWlscy9kZXRhaWxzLm1vZHVsZVwiOiBbXG5cdFx0XCIuL2RldGFpbHMvZGV0YWlscy5tb2R1bGUudHNcIixcblx0XHQxXG5cdF0sXG5cdFwiLi9ob21lL2hvbWUubW9kdWxlXCI6IFtcblx0XHRcIi4vaG9tZS9ob21lLm1vZHVsZS50c1wiLFxuXHRcdFwidmVuZG9yXCIsXG5cdFx0MFxuXHRdXG59O1xuZnVuY3Rpb24gd2VicGFja0FzeW5jQ29udGV4dChyZXEpIHtcblx0dmFyIGlkcyA9IG1hcFtyZXFdO1xuXHRpZighaWRzKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0pO1xuXHR9XG5cdHJldHVybiBQcm9taXNlLmFsbChpZHMuc2xpY2UoMSkubWFwKF9fd2VicGFja19yZXF1aXJlX18uZSkpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlkID0gaWRzWzBdO1xuXHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcblx0fSk7XG59XG53ZWJwYWNrQXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQXN5bmNDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0FzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQXN5bmNDb250ZXh0OyIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9uc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2FuaW1hdGlvbk9mZnNldDogbnVtYmVyO1xuXG4gICAgZ2V0IGFuaW1hdGlvbk9mZnNldCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0aW9uT2Zmc2V0O1xuICAgIH1cblxuICAgIHNldCBhbmltYXRpb25PZmZzZXQob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fYW5pbWF0aW9uT2Zmc2V0ID0gb2Zmc2V0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIi4vaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZGV0YWlsc1wiLCBsb2FkQ2hpbGRyZW46IFwiLi9kZXRhaWxzL2RldGFpbHMubW9kdWxlI0RldGFpbHNNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxSYWRTaWRlRHJhd2VyIGRyYXdlclRyYW5zaXRpb249XFxcIlB1c2hUcmFuc2l0aW9uXFxcIj5cXG5cXG4gICAgPEdyaWRMYXlvdXQgdGtEcmF3ZXJDb250ZW50IHJvd3M9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyIHNpZGVkcmF3ZXItbGVmdFxcXCI+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJodHRwczovL3BsYWNlbS5hdC9wZW9wbGU/cmFuZG9tPTExJnc9NTAwJmg9NTAwJnR4dD0wXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2lkZWRyYXdlci1hdmF0YXJcXFwiPjwvSW1hZ2U+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlci10ZXh0IHZhclxcXCIgdGV4dD1cXFwiSmFuZSBEb2VcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWhlYWRlci1mb290bm90ZSB2YXJcXFwiIHRleHQ9XFxcImphbmVAbWFpbC5jb21cXFwiPjwvTGFiZWw+XFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIxXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInNpZGVkcmF3ZXItY29udGVudFxcXCI+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJIb21lXFxcIiB0YXA9XFxcIm9uTmF2aWdhdGlvbkl0ZW1UYXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCImI3hmMDE1O1xcXCIgY2xhc3M9XFxcImZhIHNpZGVkcmF3ZXItaWNvblxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiSG9tZVxcXCIgY2xhc3M9XFxcIm0tbC0yMCBzaWRlZHJhd2VyLWl0ZW1cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVxcXCJoci1saWdodFxcXCI+PC9TdGFja0xheW91dD5cXG5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywgKlxcXCIgY2xhc3M9XFxcInNpZGVkcmF3ZXItbGlzdC1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIkZyaWVuZHNcXFwiIHRhcD1cXFwib25OYXZpZ2F0aW9uSXRlbVRhcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiIHRleHQ9XFxcIiYjeGYwMDc7XFxcIiBjbGFzcz1cXFwiZmEgc2lkZWRyYXdlci1pY29uXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJGcmllbmRzXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCAqXFxcIiBjbGFzcz1cXFwic2lkZWRyYXdlci1saXN0LWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cXFwiVG8tRG8gTGlzdFxcXCIgdGFwPVxcXCJvbk5hdmlnYXRpb25JdGVtVGFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjBjYTtcXFwiIGNsYXNzPVxcXCJmYSBzaWRlZHJhd2VyLWljb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlRvLURvIExpc3RcXFwiIGNsYXNzPVxcXCJtLWwtMjAgc2lkZWRyYXdlci1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cXFwiaHItbGlnaHRcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFxuICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sICpcXFwiIGNsYXNzPVxcXCJzaWRlZHJhd2VyLWxpc3QtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJTZXR0aW5nc1xcXCIgdGFwPVxcXCJvbk5hdmlnYXRpb25JdGVtVGFwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCIgdGV4dD1cXFwiJiN4ZjAxMztcXFwiIGNsYXNzPVxcXCJmYSBzaWRlZHJhd2VyLWljb25cXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIlNldHRpbmdzXFxcIiBjbGFzcz1cXFwibS1sLTIwIHNpZGVkcmF3ZXItaXRlbVxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcblxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcImhyLWxpZ2h0XFxcIj48L1N0YWNrTGF5b3V0PlxcblxcbiAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICA8L1Njcm9sbFZpZXc+XFxuICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgPHBhZ2Utcm91dGVyLW91dGxldCB0a01haW5Db250ZW50IGNsYXNzPVxcXCJwYWdlIHBhZ2UtY29udGVudFxcXCI+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuPC9SYWRTaWRlRHJhd2VyPlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gSW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMSFuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIiksIFwiXCIpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuSW4gTmF0aXZlU2NyaXB0LCB0aGUgYXBwLmNzcyBmaWxlIGlzIHdoZXJlIHlvdSBwbGFjZSBDU1MgcnVsZXMgdGhhdFxcbnlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRvIHlvdXIgZW50aXJlIGFwcGxpY2F0aW9uLiBDaGVjayBvdXRcXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3N0eWxpbmcgZm9yIGEgZnVsbCBsaXN0IG9mIHRoZSBDU1NcXG5zZWxlY3RvcnMgYW5kIHByb3BlcnRpZXMgeW91IGNhbiB1c2UgdG8gc3R5bGUgVUkgY29tcG9uZW50cy5cXG5cXG4vKlxcbkZvciBleGFtcGxlLCB0aGUgZm9sbG93aW5nIENTUyBydWxlIGNoYW5nZXMgdGhlIGZvbnQgc2l6ZSBvZiBhbGwgVUlcXG5jb21wb25lbnRzIHRoYXQgaGF2ZSB0aGUgYnRuIGNsYXNzIG5hbWUuXFxuKi9cXG4uYnRuIHtcXG4gICAgZm9udC1zaXplOiAxODtcXG59XFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeUxvYWRlciwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEFuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vYW5pbWF0aW9ucy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4vbGFuZG1hcmtzLXNlcnZpY2VcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQW5pbWF0aW9uc1NlcnZpY2UsXG4gICAgICAgIExhbmRtYXJrc1NlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gXCIuL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBMQU5ETUFSS1MgfSBmcm9tIFwiLi9tb2NrLWxhbmRtYXJrc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZG1hcmtzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJZCA9IC0xO1xuXG4gICAgZ2V0TGFuZG1hcmtzKCk6IExhbmRtYXJrW10ge1xuICAgICAgICByZXR1cm4gTEFORE1BUktTO1xuICAgIH1cblxuICAgIGdldExhbmRtYXJrKGlkOiBudW1iZXIpOiBMYW5kbWFyayB7XG4gICAgICAgIHJldHVybiBMQU5ETUFSS1MuZmlsdGVyKGxhbmRtYXJrID0+IGxhbmRtYXJrLmlkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRJZChpZDogbnVtYmVyKSB7XG4gICAgICAgIGlmIChpZCA8IExBTkRNQVJLUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkSWQgPSBpZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFNlbGVjdGVkKCk6IExhbmRtYXJrIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQgPCAwID8gbnVsbCA6IHRoaXMuZ2V0TGFuZG1hcmsodGhpcy5fc2VsZWN0ZWRJZCk7XG4gICAgfVxufSIsIi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbmltcG9ydCB7IHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xuXG5lbmFibGVQcm9kTW9kZSgpO1xucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iLCJpbXBvcnQgeyBMYW5kbWFyayB9IGZyb20gJy4vbGFuZG1hcmsnO1xuXG5leHBvcnQgY29uc3QgTEFORE1BUktTOiBMYW5kbWFya1tdID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6IFwiV293IEJ1cmdlclwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXJ2ZWwgYXQgbW9yZSB0aGFuIDIsMDAwIG5hdHVyYWwgcm9jayBhcmNoZXMgYXQgdGhpcyBwYXJrIGp1c3Qgb3V0c2lkZSBvZiBNb2FiLiBcIiArXG4gICAgICAgICAgICBcIlNvbWUgb2YgdGhlIGZvcm1hdGlvbnMgY2FuIGJlIHNwb3R0ZWQgZnJvbSB0aGUgcm9hZCwgYnV0IHRoZSBiZXN0IHJlcXVpcmUgYSBzY2VuaWMgaGlrZS4gXCIgK1xuICAgICAgICAgICAgXCJEb27igJl0IG1pc3MgdGhlIGZhbW91cyBEZWxpY2F0ZSBBcmNoICgzIG1pbGVzIHJvdW5kLXRyaXApIG9yIHRoZSA3LW1pbGUgKHJvdW5kLXRyaXApIERldmlscyBHYXJkZW4gTG9vcC5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiVGhlIFBhcmsgQXZlbnVlIFRyYWlsIGlzIHRoZSBtb3N0IHBvcHVsYXIgaGlrZSBpbiB0aGUgcGFyayBiZWNhdXNlIG9mIGl0cyBlYXNlIGFuZCBzY2VuZXJ5IGF0IGp1c3QgXCIgK1xuICAgICAgICAgICAgXCIyIG1pbGVzIHJvdW5kIHRyaXAuIE9yIHRyeSB0aGUgbW9yZSBjaGFsbGVuZ2luZyBoaWtlIHRvIERlbGljYXRlIEFyY2hlcyBhdCAzLjIgbWlsZXMgcm91bmQgdHJpcC5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiV2hldGhlciB5b3UgYXJlIGNhbXBpbmcgb3Igc3RheWluZyBpbiBhIGhvdGVsLCBkb27igJl0IGZvcmdldCB0byBzcGVuZCBzb21lIHRpbWUgbG9va2luZyB1cCBhdCB0aGUgc2t5IFwiICtcbiAgICAgICAgICAgIFwiYWZ0ZXIgbmlnaHQgZmFsbHMuIFlvdeKAmWxsIGZpbmQgc29tZSBvZiB0aGUgZGFya2VzdCBza2llcyBpbiBhbmQgYXJvdW5kIFV0YWjigJlzIG5hdGlvbmFsIHBhcmtzLlwiLFxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy93b3didXJnZXIuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlV0YWhcIixcbiAgICAgICAgbGlrZXM6IDI0NSxcbiAgICAgICAgY29tbWVudHM6IDIzXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiBcIlRyYW1saW5lXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk5pY2tuYW1lZCB0aGUgXFxcIkNyb3duIG9mIHRoZSBDb250aW5lbnQsXFxcIiBHbGFjaWVyIE5hdGlvbmFsIFBhcmsgc2l0cyBpbiB0aGUgbm9ydGh3ZXN0IGNvcm5lciBvZiBcIiArXG4gICAgICAgICAgICBcIk1vbnRhbmEuIEdsYWNpZXIgTmF0aW9uYWwgUGFyayBpcyBqdXN0IGEgc2NlbmljIGRheeKAmXMgZHJpdmUgbm9ydGggZnJvbSBZZWxsb3dzdG9uZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiSGl0IHRoZSB0cmFpbCB0byBleHBsb3JlIHBsYWNlcyBsaWtlIEZpc2hlcmNhcCBMYWtlIChwaWN0dXJlZCksIHdoaWNoIGlzIGEgZ3JlYXQgcGxhY2UgdG8gc3BvdCBhIG1vb3NlLiBcIiArXG4gICAgICAgICAgICBcIkZyb20gTWFueSBHbGFjaWVyIENhbXBncm91bmQsIGdvIHRvIHRoZSBTd2lmdGN1cnJlbnQgTW90b3IgSW5uIHBhcmtpbmcgbG90LiBUaGUgdHJhaWxoZWFkIGlzIG9uIHRoZSB3ZXN0IGVuZC4gXCIgK1xuICAgICAgICAgICAgXCJZb3UnbGwgZmluZCB0aGUgbGFrZSBsZXNzIHRoYW4gYSBtaWxlIGRvd24gdGhlIHRyYWlsLiBDb250aW51ZSAxLjUgbWlsZXMgdG8gUmVkcm9jayBMYWtlIGFuZCB0YWtlIGEgc3B1ciB0byBSZWRyb2NrIEZhbGxzLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJBIE5hdGlvbmFsIEhpc3RvcmljIExhbmRtYXJrLCBHb2luZy10by10aGUtU3VuIFJvYWQgaXMgb25lIG9mIHRoZSBtb3N0IHNjZW5pYyByb2FkcyBpbiBOb3J0aCBBbWVyaWNhLCBub3QgdG8gbWVudGlvbiBcIiArXG4gICAgICAgICAgICBcIm9uZSBvZiB0aGUgbW9zdCBjb21wbGV4IHRvIGJ1aWxkLiBUaGUgZmluYWwgc2VjdGlvbiwgb3ZlciBMb2dhbiBQYXNzLCB3YXMgY29tcGxldGVkIGluIDE5MzIgYWZ0ZXIgMTEgeWVhcnMgb2Ygd29yay4gXCIgK1xuICAgICAgICAgICAgXCJDb25zaWRlcmVkIGFuIGVuZ2luZWVyaW5nIGZlYXQsIHRoZSBjb25zdHJ1Y3Rpb24gb2YgdGhlIHJvYWQgZm9yZXZlciBjaGFuZ2VkIHRoZSB3YXkgdmlzaXRvcnMgd291bGQgZXhwZXJpZW5jZSBcIiArXG4gICAgICAgICAgICBcIkdsYWNpZXIgTmF0aW9uYWwgUGFyay4gRnV0dXJlIHZpc2l0b3JzIHdvdWxkIGJlIGFibGUgdG8gZHJpdmUgb3ZlciBzZWN0aW9ucyBvZiB0aGUgcGFyayB0aGF0IHByZXZpb3VzbHkgaGFkIFwiICtcbiAgICAgICAgICAgIFwidGFrZW4gZGF5cyBvZiBob3JzZWJhY2sgcmlkaW5nIHRvIHNlZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiSW4gdGhlaXIgYWJpbGl0eSB0byB3b3cgdmlzaXRvcnMsIFllbGxvd3N0b25lIGFuZCBHbGFjaWVyIHNoYXJlIGEgY29tbW9uIGJvbmQuIEJ1dCBhcyB3aXRoIGFueSBncmVhdCBkZXN0aW5hdGlvbiwgXCIgK1xuICAgICAgICAgICAgXCJ0aGVyZSBhcmUgc29tZSBhZHZlbnR1cmVzIHRoYXQgYXJlIGZvdW5kIG5vd2hlcmUgZWxzZS4gR2xhY2llciBwcmVzZXJ2ZXMgb3ZlciAxLDAwMCwwMDAgYWNyZXMgb2YgZm9yZXN0cywgYWxwaW5lIFwiICtcbiAgICAgICAgICAgIFwibWVhZG93cyBhbmQgbGFrZXMuIEl0cyBkaXZlcnNlIGhhYml0YXRzIGFyZSBob21lIHRvIG92ZXIgNzAgc3BlY2llcyBvZiBtYW1tYWxzIGFuZCBvdmVyIDI2MCBzcGVjaWVzIG9mIGJpcmRzLiBcIiArXG4gICAgICAgICAgICBcIlRoZSBzcGVjdGFjdWxhciBnbGFjaWF0ZWQgbGFuZHNjYXBlIGlzIGEgaGlrZXLigJlzIHBhcmFkaXNlLCBjb250YWluaW5nIDcwMCBtaWxlcyBvZiBtYWludGFpbmVkIHRyYWlscyB0aGF0IGxlYWQgXCIgK1xuICAgICAgICAgICAgXCJkZWVwIGludG8gb25lIG9mIHRoZSBsYXJnZXN0IGludGFjdCBlY29zeXN0ZW1zIGluIHRoZSBsb3dlciA0OCBzdGF0ZXMuXCIsXG4gICAgICAgIGltYWdlOiBcIn4vaW1hZ2VzL3RyYW1saW5lLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJNb250YW5hXCIsXG4gICAgICAgIGxpa2VzOiAxNTIsXG4gICAgICAgIGNvbW1lbnRzOiAxNlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogXCJBY2FkZW15XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJKdXN0IDE1IG1pbGVzIHNvdXRoIG9mIE1vYWIsIGhpa2UgeW91ciB3YXkgdGhyb3VnaCAzMzcsIDU5OCBhY3JlcyBvZiBkcmFtYXRpYyByZWQtcm9jayBcIiArXG4gICAgICAgICAgICBcImxhbmRzY2FwZSBpbiBDYW55b25sYW5kcyBOUCwgYW5kIGRvIGl0IGFsbCB3aXRob3V0IGhhdmluZyB0byBjb21wZXRlIGZvciByb29tIG9uIHRoZSB0cmFpbCAtIENhbnlvbmxhbmRzIFwiICtcbiAgICAgICAgICAgIFwiaXMgYm90aCBVdGFo4oCZcyBsYXJnZXN0IGFuZCBsZWFzdCB2aXNpdGVkIHBhcmsuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIlRoZSByaXZlci1jYXJ2ZWQgcGFyayBib2FzdHMgMzYwLWRlZ3JlZSB2aWV3cyBvZiBydXN0LWNvbG9yZWQgYXJjaGVzLCBidXR0ZXMsIGFuZCBjbGlmZnMgLSBidXQgYmVjYXVzZSBcIiArXG4gICAgICAgICAgICBcIm9mIHRoZSBoaWdoLWRlc2VydCByb2NrIGVudmlyb25tZW50LCBpdHMgY2xpbWF0ZSBpcyBzdWJqZWN0IHRvIGV4dHJlbWUgdGVtcGVyYXR1cmUgZmx1Y3R1YXRpb25zLiBcIiArXG4gICAgICAgICAgICBcIlNraXAgcGFja2luZyB0aGUgcGFya2EsIGFuZCBnbyBpbiB0aGUgc3ByaW5nIG9yIGZhbGwgZm9yIHRoZSBtb3N0IG1vZGVyYXRlLCBhbmQgbW9zdCBmb3JnaXZpbmcsIHdlYXRoZXIuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIlNvIGV4cGFuc2l2ZSBpdOKAmXMgZGl2aWRlZCBpbnRvIGZvdXIgZGlzdHJpY3RzLCBDYW55b25sYW5kcyBkZWxpdmVycyBhIHF1aW50ZXNzZW50aWFsIGRlc2VydCBleHBlcmllbmNlOiBkZWVwIGNhbnlvbnMsIFwiICtcbiAgICAgICAgICAgIFwicHJlaGlzdG9yaWMgcm9jayBhcnQsIHJpdmVycywgYW5kIHN3ZWVwaW5nIG92ZXJsb29rcy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiQW1vbmcgdGhlIGV4Y2VwdGlvbmFsLCBzdHJpYXRlZCByb2NrIGZvcm1hdGlvbnMsIHRoZXJlIGFyZSBcIiArXG4gICAgICAgICAgICBcImxhbmRtYXJrcyB5b3Ugc2hvdWxkbuKAmXQgbWlzcywgbGlrZSB0aGUgdW51c3VhbCAxNTAwLWZvb3QgVXBoZWF2YWwgRG9tZSAtIHRob3VnaHQgdG8gYmUgYSBtZXRlb3JpdGUgY3JhdGVyIC0gb3IgdGhlIFwiICtcbiAgICAgICAgICAgIFwiRHJ1aWQgQXJjaCwgb2Z0ZW4gcmVmZXJyZWQgdG8gYXMgVXRhaOKAmXMgb3duIFN0b25laGVuZ2UuIEtlZXAgd2F0Y2ggZm9yIHRoZSB3aWxkbGlmZSwgdG9vLiBCaWdob3JuIHNoZWVwIHRha2UgcmVzaWRlbmNlIFwiICtcbiAgICAgICAgICAgIFwiaW4gdGhlIGNhbnlvbnMgYW5kIGJ1dHRlcywgYWxvbmcgd2l0aCBtdWxlIGRlZXIsIGthbmdhcm9vIHJhdHMsIGFuZCBjb3lvdGUuIExvb2sgdXAgZm9yIHJlZC0gdGFpbGVkIGhhd2tzLCBhbmQgYXQgbmlnaHQsIFwiICtcbiAgICAgICAgICAgIFwiZm9yIG9uZSBvZiB0aGUgZGFya2VzdCBza2llcyBpbiB0aGUgTG93ZXIgNDguIE9uIGEgbW9vbmxlc3MgbmlnaHQsIGdldCBtb3JlIHRoYW4geW91ciBmaWxsIG9mIHN0YXJzIC0gb3IgZ2V0IG91dCB0aGUgXCIgK1xuICAgICAgICAgICAgXCJiaW5vY3VsYXJzIHRvIHRyeSBmb3IgdGhlIHJpbmdzIG9mIFNhdHVybi5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvYWNhZGVteS5qcGdcIixcbiAgICAgICAgbG9jYXRpb246IFwiVXRhaFwiLFxuICAgICAgICBsaWtlczogMzg1LFxuICAgICAgICBjb21tZW50czogMzFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6IFwiRXZlcmxlaWdoXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRpdmlkZWQgYnkgYSAyNzctbWlsZSBsb25nIGNhbnlvbiwgYW5kIHRoZSBtaWxlLWRlZXAgQ29sb3JhZG8gUml2ZXIsIHRoZSB0d28gaGFsdmVzIG9mIEdyYW5kIENhbnlvbiBOYXRpb25hbCBQYXJrLCBcIiArXG4gICAgICAgICAgICBcInRoZSBOb3J0aCBhbmQgU291dGggUmltLCBvZmZlciB0d28gcGFya3MgaW4gb25lLCB3aXRoIGRpdmVyc2UgbGFuZHNjYXBlIGFuZCBlY29sb2d5IG9uIGVpdGhlci5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiR3JhbmQgQ2FueW9uIE5hdGlvbmFsIFBhcmssIGFuZCB0aGUgZ3JlYXRlciBHcmFuZCBDYW55b24gcmVnaW9uLCBpcyBhIGhpa2VyJ3MgZHJlYW0uIE1vc3Qgb2YgR3JhbmQgQ2FueW9uIE5hdGlvbmFsIFBhcmsgaXMgXCIgK1xuICAgICAgICAgICAgXCJ1bmRldmVsb3BlZCBiYWNrY291bnRyeS4gVGhlcmUgYXJlIGxpdGVyYWxseSBodW5kcmVkcyBvZiBtaWxlcyB0byBoaWtlLCBiYWNrcGFjayBhbmQgZXhwbG9yZS4gRGVzcGl0ZSB0aGUgR3JhbmQgQ2FueW9uJ3MgXCIgK1xuICAgICAgICAgICAgXCJwb3B1bGFyaXR5IGFuZCBudW1iZXJzIG9mIHZpc2l0b3JzIGVhY2ggeWVhciwgdmlzaXRvcnMgb25seSBuZWVkIHRvIGhpa2UgYSBzbWFsbCBkaXN0YW5jZSB0byBlbmpveSBzb21lIHNvbGl0dWRlLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJFeHBsb3JlIHRoZSBkZXB0aHMgb2YgdGhlIEdyYW5kIENhbnlvbiBOYXRpb25hbCBQYXJrIG9uIHBvcHVsYXIgdHJhaWxzIGxpa2UgdGhlIEJyaWdodCBBbmdlbCBhbmQgU291dGggS2FpYmFiIHRyYWlsIG9uIGEgbXVsZS4gXCIgK1xuICAgICAgICAgICAgXCJBIEdyYW5kIENhbnlvbiBtdWxlIHJpZGUgaXMgYW4gYWR2ZW50dXJlIGFuZCBlYXN5IG9uIHlvdXIgbGVncy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiT25lIG9mIHRoZSBtb3N0IGV4Y2l0aW5nIHdheXMgdG8gZXhwZXJpZW5jZSB0aGUgR3JhbmQgQ2FueW9uIGlzIHRvIGZsb2F0IHRocm91Z2ggaXQgYnkgd2F5IG9mIHJhZnQgb24gdGhlIENvbG9yYWRvIFJpdmVyLiBcIiArXG4gICAgICAgICAgICBcIk1vc3QgcGVvcGxlIGJvb2sgdGhlaXIgdHJpcCB3aXRoIGEgY29tbWVyY2lhbCBvdXRmaXR0ZXIgYW5kIHlvdSBjYW4gZXZlbiBjb21iaW5lIHRoZSByYWZ0aW5nIHRyaXAgd2l0aCBhIGhlbGljb3B0ZXIgcmlkZS4gXCIgK1xuICAgICAgICAgICAgXCJFeHBlcmllbmNlZCB3aGl0ZXdhdGVyIHJhZnRlcj8gRW50ZXIgdGhlIGxvdHRlcnkgdG8gZG8geW91ciBvd24gdHJpcC5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZXZlcmxlaWdoLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJBcml6b25hXCIsXG4gICAgICAgIGxpa2VzOiA1MTQsXG4gICAgICAgIGNvbW1lbnRzOiA0OVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJXb3JrbWFuc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYXhpbWl6ZSB5b3VyIGV4cGVyaWVuY2UgYXQgQnJ5Y2UgQ2FueW9uIE5hdGlvbmFsIFBhcmsgYnkgZHJpdmluZyB0byBTdW5yaXNlLCBTdW5zZXQsIEluc3BpcmF0aW9uIGFuZCBcIiArXG4gICAgICAgICAgICBcIkJyeWNlIHZpZXdwb2ludHMuIFRoZXNlIGFyZSBhbGwgc3BlY3RhY3VsYXIgb3Zlcmxvb2tzIG9mIHRoZSBwYXJr4oCZcyByZWQgaG9vZG9vcyBzaG9vdGluZyB1cCBhZ2FpbnN0IGV2ZXJncmVlbiBcIiArXG4gICAgICAgICAgICBcImZvcmVzdHMgaW4gdGhlIGJhY2tncm91bmQuIERlcGVuZGluZyBvbiB0aGUgdGltZSBvZiBkYXksIGFuZCB0aGUgYW5nbGUgYW5kIGxpZ2h0IG9mIHRoZSBzdW4sIHRoZSBob29kb29zIGFuZCBcIiArXG4gICAgICAgICAgICBcIm15c3RlcmlvdXMgcm9jayBmb3JtYXRpb25zIG9mdGVuIHRha2Ugb24gdW51c3VhbCBwYXR0ZXJucyBhbmQgc2hhcGVzLCBhbmQgc29tZSB0aGluaywgaW1hZ2luYXJ5IGZhY2VzLlwiICtcbiAgICAgICAgICAgIFwiXFxuXFxuXCIgK1xuICAgICAgICAgICAgXCJGb3IgbW9yZSBpbnNwaXJhdGlvbiwgbGFjZSB1cCB5b3VyIGhpa2luZyBib290cyBvciBvdGhlciBzdHVyZHkgc2hvZXMgYW5kIGV4cGxvcmUgYSB0cmFpbC4gVGhlcmUgaXMgc29tZXRoaW5nIFwiICtcbiAgICAgICAgICAgIFwiZm9yIGV2ZXJ5b25lIGF0IEJyeWNlIENhbnlvbi4gT3VyIGZhdm9yaXRlIGVhc3kgaGlrZXMgaW5jbHVkZSBCcmlzdGxlY29uZSBMb29wIFRyYWlsIGFuZCBRdWVlbnMgR2FyZGVuIFRyYWlsLiBcIiArXG4gICAgICAgICAgICBcIkhhdCBTaG9wIGlzIG91ciBmYXZvcml0ZSBtb2RlcmF0ZSBoaWtlLiBGb3IgbW9yZSBwaHlzaWNhbGx5IGZpdCBoaWtlcnMgbG9va2luZyBmb3IgYSBzdHJlbnVvdXMgYWR2ZW50dXJlLCBcIiArXG4gICAgICAgICAgICBcImRvIHRoZSA1LjUtbWlsZSB2ZXJ0aWNhbGx5IGNoYWxsZW5naW5nIFBlZWstQS1Cb28gTG9vcCBvciB0aGUgNy45IEZhaXJ5bGFuZCBMb29wIHJhdGVkIOKAnGRpZmZpY3VsdOKAnSBieSB0aGUgcGFyayBzZXJ2aWNlLiBcIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvd29ya21hbnMuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIlV0YWhcIixcbiAgICAgICAgbGlrZXM6IDI0NSxcbiAgICAgICAgY29tbWVudHM6IDExXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiBcIldhZ2FtYW1hc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHcmFuZCBUZXRvbiBOYXRpb25hbCBQYXJrIHByZXNlcnZlcyBhIHNwZWN0YWN1bGFyIGxhbmRzY2FwZSByaWNoIHdpdGggbWFqZXN0aWMgbW91bnRhaW5zLCBwcmlzdGluZSBsYWtlcywgXCIgK1xuICAgICAgICAgICAgXCJhbmQgZXh0cmFvcmRpbmFyeSB3aWxkbGlmZS4gVGhlIGFicnVwdCB2ZXJ0aWNhbCByaXNlIG9mIHRoZSBqYWdnZWQgVGV0b24gTW91bnRhaW5zIGNvbnRyYXN0cyB3aXRoIHRoZSBob3Jpem9udGFsIFwiICtcbiAgICAgICAgICAgIFwic2FnZS1jb3ZlcmVkIHZhbGxleSBhbmQgZ2xhY2lhbCBsYWtlcyBhdCBpdHMgYmFzZS5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiSXQgdG9vayBtb3JlIHRoYW4gMzAgeWVhcnMgZm9yIEdyYW5kIFRldG9uIE5hdGlvbmFsIFBhcmsgdG8gdHJhbnNmb3JtIGZyb20gYW4gaWRlYSB0byBvbmUgb2YgdGhlIGNvdW50cnkncyBtb3N0IHN0dW5uaW5nIHBhcmtzLiBcIiArXG4gICAgICAgICAgICBcIldoZW4gQ29uZ3Jlc3MgY3JlYXRlZCB0aGUgcGFyayBpbiAxOTI5LCBpdCBvbmx5IGluY2x1ZGVkIHRoZSBUZXRvbiBSYW5nZSBhbmQgc2l4IGdsYWNpYWwgbGFrZXMuIEpvaG4gRC4gUm9ja2VmZWxsZXIsIEpyLiwgXCIgK1xuICAgICAgICAgICAgXCJwbGF5ZWQgYSBrZXkgcm9sZSBpbiBhY3F1aXJpbmcgYW4gYWRkaXRpb25hbCAzNSwwMDAgYWNyZXMgZm9yIHRoZSBwYXJrIHVuZGVyIHRoZSBuYW1lIFxcXCJTbmFrZSBSaXZlciBMYW5kIENvLlxcXCIgQW1pZCBcIiArXG4gICAgICAgICAgICBcImNvbnRyb3ZlcnN5IHRoZSBcXFwibmV3XFxcIiBHcmFuZCBUZXRvbiBOYXRpb25hbCBQYXJrIHdhcyBlc3RhYmxpc2hlZCBTZXB0LiAxNCwgMTk1MCwgYnkgUHJlc2lkZW50IEhhcnJ5IFRydW1hbi5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiR3JhbmQgVGV0b24gTmF0aW9uYWwgUGFyayBhbmQgaXRzIHdvcmxkLWNsYXNzIHNjZW5lcnkgYXR0cmFjdHMgbmVhcmx5IDQgbWlsbGlvbiB2aXNpdG9ycyBwZXIgeWVhci4gV2l0aCBKZW5ueSBMYWtlIFwiICtcbiAgICAgICAgICAgIFwiYW5kIEphY2tzb24gTGFrZSBhdCA2LDMyMCBmZWV0IGFuZCB0aGUgc3VtbWl0IG9mIHRoZSBHcmFuZCBUZXRvbiBhdCAxMyw3NzAgZmVldCwgdGhlIHBhcmsncyBlbGV2YXRpb24gcmFuZ2VzIGNyZWF0ZSBcIiArXG4gICAgICAgICAgICBcIm9uZSBvZiB0aGUgbmF0aW9uJ3MgbW9zdCBhd2UtaW5zcGlyaW5nIGxhbmRzY2FwZXMuIEluIGFkZGl0aW9uIHRvIGdhemluZyBhdCB0aGUgaW5jcmVkaWJsZSB2aWV3cywgdGhlcmUgaXMgbXVjaCB0byBkbyBcIiArXG4gICAgICAgICAgICBcImluIHRoaXMgcGFyayBmcm9tIGhpa2luZyBhbmQgcm9jayBjbGltYmluZyB0byBib2F0aW5nIGFuZCBmaXNoaW5nLiBBbmQgd2hlbiB5b3UgbmVlZCBhIGJyZWFrIGZyb20gb3V0ZG9vciBhZHZlbnR1cmUsIFwiICtcbiAgICAgICAgICAgIFwidGhlcmUgYXJlIGZldyBiZXR0ZXIgcGxhY2VzIHRvIHNpbXBseSByZWxheCBhbmQgd2F0Y2ggdGhlIHBhcmsncyBpbmNyZWRpYmxlIHdpbGRsaWZlLlwiLFxuICAgICAgICBpbWFnZTogXCJ+L2ltYWdlcy93YWdhbWFtYXMuanBnXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIld5b21pbmdcIixcbiAgICAgICAgbGlrZXM6IDE2OSxcbiAgICAgICAgY29tbWVudHM6IDdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIG5hbWU6IFwiRGljZXlzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4cGxvcmUgU291dGggRGFrb3Rh4oCZcyBCbGFjayBIaWxscyByZWdpb24sIGEgbmF0dXJhbCB3b25kZXIgaW4gaXRzIG93biByaWdodC4gXCIgK1xuICAgICAgICAgICAgXCJMb2NhdGVkIGFib3V0IHNpeCBob3VycyBmcm9tIFllbGxvd3N0b25lLCB0aGUgQmxhY2sgSGlsbHMgYXJlIGhvbWUgdG8gc2V2ZW4gbmF0aW9uYWwgXCIgK1xuICAgICAgICAgICAgXCJzaXRlcyDigJQgQmFkbGFuZHMgTmF0aW9uYWwgUGFyaywgSmV3ZWwgQ2F2ZSBOYXRpb25hbCBNb251bWVudCwgdGhlIExld2lzICYgQ2xhcmsgTmF0aW9uYWwgXCIgK1xuICAgICAgICAgICAgXCJIaXN0b3JpYyBUcmFpbCwgTWludXRlbWFuIE1pc3NpbGUgTmF0aW9uYWwgSGlzdG9yaWMgU2l0ZSwgTWlzc291cmkgTmF0aW9uYWwgUmVjcmVhdGlvbmFsIFwiICtcbiAgICAgICAgICAgIFwiUml2ZXIsIE1vdW50IFJ1c2htb3JlIE5hdGlvbmFsIE1lbW9yaWFsLCBhbmQgV2luZCBDYXZlIE5hdGlvbmFsIFBhcmsuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIkluIHRoaXMgbmF0dXJhbCBwbGF5Z3JvdW5kLCB5b3UgY2FuIGVuam95IGFuIGFidW5kYW5jZSBvZiByZWNyZWF0aW9uYWwgb3Bwb3J0dW5pdGllcywgZ29yZ2VvdXMgXCIgK1xuICAgICAgICAgICAgXCJzY2VuaWMgZHJpdmVzIOKAlCB3aGljaCBpbmNsdWRlIHRoZSBiZWF1dGlmdWwgU3BlYXJmaXNoIENhbnlvbiDigJQgYW5kIHdpbGRsaWZlLXdhdGNoaW5nLiBUaGlzIHJlZ2lvbiBcIiArXG4gICAgICAgICAgICBcImlzIGFsc28gcGFja2VkIHdpdGggY3VsdHVyYWwgYW5kIGhpc3RvcmljYWwgc2l0ZXMuXCIgK1xuICAgICAgICAgICAgXCJcXG5cXG5cIiArXG4gICAgICAgICAgICBcIldoaWxlIHlvdSB3b27igJl0IHNlZSBzYWJlci10b290aGVkIGNhdHMgb3Igcmhpbm9jZXJvc2VzIHJvYW1pbmcgdGhlIEJhZGxhbmRzIGxpa2UgdGhleSBvbmNlIGRpZCwgXCIgK1xuICAgICAgICAgICAgXCJ5b3UgbWF5IHNlZSB0aGVpciByZW1haW5zIGluIHRoaXMgc3R1bm5pbmcgbmF0aW9uYWwgcGFyayB3aXRoIHNvbWUgb2YgdGhlIHdvcmxk4oCZcyByaWNoZXN0IGZvc3NpbCBkZXBvc2l0cy5cIiArXG4gICAgICAgICAgICBcIlxcblxcblwiICtcbiAgICAgICAgICAgIFwiTG9jYXRlZCBpbiBJbWxheSBUb3duc2hpcCBpbiBTb3V0aCBEYWtvdGEsIEJhZGxhbmRzIE5hdGlvbmFsIFBhcmsgaGFzIGEgRm9zc2lsIFByZXBhcmF0aW9uIExhYiBcIiArXG4gICAgICAgICAgICBcIndoZXJlIHlvdSBjYW4gd2F0Y2ggcGFsZW9udG9sb2dpc3RzIGF0IHdvcmssIGxpdGVyYWxseSB1bmNvdmVyaW5nIHRoZSBhbmNpZW50IGhpc3Rvcnkgb2YgdGhlIGFyZWEuIFwiICtcbiAgICAgICAgICAgIFwiQXQgdGhlIEJlbiBSZWlmZWwgVmlzaXRvciBDZW50ZXIsIGtpZHMgY2FuIHVzZSBhIHRvdWNoc2NyZWVuIHRvIGFzc2VtYmxlIGEgdmlydHVhbCBza2VsZXRvbiBhbmQgXCIgK1xuICAgICAgICAgICAgXCJ0b3VjaCBmb3NzaWxpemVkIGFuaW1hbCByZXBsaWNhcy4gWW91IGFsc28gY2FuIHdhdGNoIHRoZSBmaWxtIExhbmQgb2YgU3RvbmUgYW5kIExpZ2h0IGluIFwiICtcbiAgICAgICAgICAgIFwidGhlIGNlbnRlcuKAmXMgOTUtc2VhdCBhaXItY29uZGl0aW9uZWQgdGhlYXRlci5cIixcbiAgICAgICAgaW1hZ2U6IFwifi9pbWFnZXMvZGljZXlzLmpwZ1wiLFxuICAgICAgICBsb2NhdGlvbjogXCJTb3V0aCBEYWtvdGFcIixcbiAgICAgICAgbGlrZXM6IDIyNyxcbiAgICAgICAgY29tbWVudHM6IDI2XG4gICAgfVxuXSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==