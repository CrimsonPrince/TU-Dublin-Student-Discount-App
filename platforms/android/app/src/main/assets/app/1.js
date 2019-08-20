(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[1],{

/***/ "./action-button/action-button.component.css":
/***/ (function(module, exports) {

module.exports = ".main-layout {\n\twidth: 24;\n\theight: 24;\n\tpadding: 4 2;\n}\n\n.line {\n    height: 2;\n    background-color: white;\n\tmargin: 5 1;\n\tborder-radius: 1;\n}"

/***/ }),

/***/ "./action-button/action-button.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout (tap)=\"onTap($event)\" rows=\"*,*,*\" class=\"main-layout\">\n\t<StackLayout #lineTop row=\"0\" (loaded)=\"updateTop(lineTop,true)\" class=\"line\"></StackLayout>\n\t<StackLayout #lineCenter row=\"1\" (loaded)=\"updateCenter(lineCenter,true)\" class=\"line\"></StackLayout>\n\t<StackLayout #lineBottom row=\"2\" (loaded)=\"updateBottom(lineBottom,true)\" class=\"line\"></StackLayout>\n</GridLayout>"

/***/ }),

/***/ "./action-button/action-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonComponent", function() { return ActionButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ActionButtonComponent = /** @class */ (function () {
    function ActionButtonComponent() {
        this.tap = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActionButtonComponent.prototype.onTap = function (args) {
        this.tap.next(args);
    };
    ActionButtonComponent.prototype.updateTop = function (element, animate) {
        if (animate) {
            if (this.isArrow) {
                element.animate({
                    rotate: -45,
                    scale: { x: 0.45, y: 1 },
                    translate: { x: -5, y: 3 },
                    duration: 200
                }).catch(function () { });
            }
            else {
                this.animateToHamburger(element);
            }
        }
        else {
            element.rotate = -45;
            element.scaleX = 0.45;
            element.translateX = -5;
            element.translateY = 3;
        }
    };
    ActionButtonComponent.prototype.updateCenter = function (element, animate) {
        if (animate) {
            if (this.isArrow) {
                element.animate({
                    rotate: 0,
                    scale: { x: 0.9, y: 1 },
                    translate: { x: 1, y: 0 },
                    duration: 200
                }).catch(function () { });
            }
            else {
                this.animateToHamburger(element);
            }
        }
        else {
            element.rotate = 0;
            element.scaleX = 0.9;
            element.translateX = 1;
            element.translateY = 0;
        }
    };
    ActionButtonComponent.prototype.updateBottom = function (element, animate) {
        if (animate) {
            if (this.isArrow) {
                element.animate({
                    rotate: 45,
                    scale: { x: 0.45, y: 1 },
                    translate: { x: -5, y: -3 },
                    duration: 200
                }).catch(function () { });
            }
            else {
                this.animateToHamburger(element);
            }
        }
        else {
            element.rotate = 45;
            element.scaleX = 0.45;
            element.translateX = -5;
            element.translateY = -3;
        }
    };
    ActionButtonComponent.prototype.animateToHamburger = function (element) {
        element.animate({
            rotate: 0,
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: 200
        }).catch(function () { });
    };
    ActionButtonComponent.prototype.makeArrow = function () {
        this.updateTop(this._lineTopRef.nativeElement, false);
        this.updateCenter(this._lineCenterRef.nativeElement, false);
        this.updateBottom(this._lineBottomRef.nativeElement, false);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isArrow'),
        __metadata("design:type", Boolean)
    ], ActionButtonComponent.prototype, "isArrow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("tap"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ActionButtonComponent.prototype, "tap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lineTop", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ActionButtonComponent.prototype, "_lineTopRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lineCenter", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ActionButtonComponent.prototype, "_lineCenterRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("lineBottom", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ActionButtonComponent.prototype, "_lineBottomRef", void 0);
    ActionButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ActionButton",
            template: __webpack_require__("./action-button/action-button.component.html"),
            styles: [__webpack_require__("./action-button/action-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionButtonComponent);
    return ActionButtonComponent;
}());



/***/ }),

/***/ "./action-button/action-button.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButtonModule", function() { return ActionButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-calendar/angular");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-chart/angular");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-ui-dataform/angular");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-autocomplete/angular");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-gauge/angular");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _action_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./action-button/action-button.component.ts");











var ActionButtonModule = /** @class */ (function () {
    function ActionButtonModule() {
    }
    ActionButtonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"]
            ],
            declarations: [
                _action_button_component__WEBPACK_IMPORTED_MODULE_10__["ActionButtonComponent"]
            ],
            exports: [
                _action_button_component__WEBPACK_IMPORTED_MODULE_10__["ActionButtonComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], ActionButtonModule);
    return ActionButtonModule;
}());



/***/ }),

/***/ "./home2/home2-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home2/home2.component.ts");



var routes = [
    { path: "", component: _home2_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./home2/home2.component.css":
/***/ (function(module, exports) {

module.exports = ".main-layout {\n    margin-top: 0;\n    margin-bottom: -2;\n}\n\n.animating-image-container {\n    vertical-align: top;\n}\n\n.list-item {\n    margin-bottom: 2;\n}\n\n.item-title {\n    background-color: rgba(0,0,0,0.4);\n    color: white;\n    vertical-align: bottom;\n    padding: 16;\n    font-size: 20;\n}\n\n.action-bar-label {\n    font-size: 22;\n    horizontal-align: center;\n    vertical-align: center;\n    color: white;\n}\n\n.action-bar-icon {\n    width: 20;\n    vertical-align: center;\n    margin: 12;\n}"

/***/ }),

/***/ "./home2/home2.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\" backgroundColor=\"#ffe\">\n\t<NavigationButton visibility=\"collapsed\"></NavigationButton>\n\t<GridLayout columns=\"auto,*,auto\" ios:padding=\"0 10\" height=\"100%\" width=\"100%\">\n\t\t<ActionButton #actionButton (tap)=\"onDrawerButtonTap($event)\" ></ActionButton>\n\t\t<Label col=\"1\" text=\"Worked\" class=\"action-bar-label\" color=\"black\"></Label>\n\t\t<Image #search col=\"2\" src=\"~/icons/search.png\" class=\"action-bar-icon\" tintColor=\"#2a2a2a\"></Image>\n\t</GridLayout>\n</ActionBar>\n\n<GridLayout height=\"100%\">\n\t<ListView #list [items]=\"landmarks\" (itemTap)=\"onNavigationItemTap($event)\">\n\t\t<ng-template let-item=\"item\">\n\t\t\t<GridLayout class=\"list-item\">\n\t\t\t\t<Image [src]=\"item.image\"></Image>\n\t\t\t\t<Label [text]=\"item.name\" class=\"item-title\"></Label>\n\t\t\t</GridLayout>\n\t\t</ng-template>\n\t</ListView>\n\t<AbsoluteLayout #animatingImageContainer opacity=\"0\" class=\"animating-image-container\">\n\t\t<Image #animatingImage width=\"100%\"></Image>\n\t</AbsoluteLayout>\n</GridLayout>"

/***/ }),

/***/ "./home2/home2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tns-core-modules/ui/frame");
/* harmony import */ var tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../node_modules/tns-core-modules/color/color.js");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
/* harmony import */ var application__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(application__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../node_modules/tns-core-modules/platform/platform.js");
/* harmony import */ var platform__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(platform__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./animations-service.ts");
/* harmony import */ var _landmarks_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./landmarks-service.ts");
/* harmony import */ var _action_button_action_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./action-button/action-button.component.ts");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_12__);













var HomeComponent = /** @class */ (function () {
    function HomeComponent(animationsService, landmarksService, routerExtensions, page, location) {
        this.animationsService = animationsService;
        this.landmarksService = landmarksService;
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.location = location;
        this._adjustedOffset = 0;
        this.page['scrollableContent'] = true;
        this._landmarks = this.landmarksService.getLandmarks();
        if (application__WEBPACK_IMPORTED_MODULE_7__["android"]) {
            this._updateStatusBarColor("#2B3238");
        }
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.location.onPopState(function () {
            _this._onNavigatedTo();
        });
        if (application__WEBPACK_IMPORTED_MODULE_7__["ios"]) {
            Object(tns_core_modules_ui_frame__WEBPACK_IMPORTED_MODULE_5__["topmost"])().ios.controller.navigationBar.barStyle = 1;
        }
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_12__["getRootView"]();
        sideDrawer.showDrawer();
    };
    Object.defineProperty(HomeComponent.prototype, "landmarks", {
        get: function () {
            return this._landmarks;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.onNavigationItemTap = function (args) {
        var _this = this;
        this.landmarksService.setSelectedId(args.index);
        this._selectedView = args.view;
        this.animationsService.animationOffset = this.measureOffset(args.view, args.object);
        this.routerExtensions.navigate(['/details'], { animated: false });
        setTimeout(function () {
            _this._prepareForBackNavigation();
        });
    };
    HomeComponent.prototype.measureOffset = function (view1, view2) {
        var offset = view1.getLocationRelativeTo(view2).y;
        if (view2.ios && view2.ios.adjustedContentInset) {
            this._adjustedOffset = view2.ios.adjustedContentInset.top;
        }
        return offset - this._adjustedOffset;
    };
    HomeComponent.prototype._prepareForBackNavigation = function () {
        this._listRef.nativeElement.opacity = 0;
        this._selectedView.opacity = 0;
        this._imageRef.nativeElement.src = this.landmarksService.getSelected().image;
        this._imageContainerRef.nativeElement.translateY = this._adjustedOffset;
        this._imageContainerRef.nativeElement.opacity = 1;
        this._buttonRef.makeArrow();
        this._searchRef.nativeElement.opacity = 0;
    };
    HomeComponent.prototype._onNavigatedTo = function () {
        var _this = this;
        var offset = this.animationsService.animationOffset + this._adjustedOffset;
        this._imageContainerRef.nativeElement.animate({
            translate: { x: 0, y: offset },
            duration: 200,
            curve: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_4__["AnimationCurve"].easeOut
        }).then(function () {
            _this._selectedView.opacity = 1;
            _this._imageContainerRef.nativeElement.animate({
                opacity: 0,
                duration: 400,
                curve: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_4__["AnimationCurve"].easeOut
            }).then(function () {
                _this._imageContainerRef.nativeElement.translateY = 0;
            });
        }).catch(function () { });
        this._listRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(function () { });
        this._searchRef.nativeElement.animate({
            opacity: 1,
            duration: 200
        }).catch(function () { });
    };
    HomeComponent.prototype._updateStatusBarColor = function (color) {
        if (platform__WEBPACK_IMPORTED_MODULE_8__["device"].sdkVersion >= "21" && application__WEBPACK_IMPORTED_MODULE_7__["android"].foregroundActivity) {
            var nativeColor = new color__WEBPACK_IMPORTED_MODULE_6__["Color"](color).android;
            var window = application__WEBPACK_IMPORTED_MODULE_7__["android"].foregroundActivity.getWindow();
            window.setStatusBarColor(nativeColor);
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _animations_service__WEBPACK_IMPORTED_MODULE_9__["AnimationsService"] },
        { type: _landmarks_service__WEBPACK_IMPORTED_MODULE_10__["LandmarksService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"] },
        { type: tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("actionButton", { static: true }),
        __metadata("design:type", _action_button_action_button_component__WEBPACK_IMPORTED_MODULE_11__["ActionButtonComponent"])
    ], HomeComponent.prototype, "_buttonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("search", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "_searchRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("list", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "_listRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("animatingImage", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "_imageRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("animatingImageContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "_imageContainerRef", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./home2/home2.component.html"),
            styles: [__webpack_require__("./home2/home2.component.css")]
        }),
        __metadata("design:paramtypes", [_animations_service__WEBPACK_IMPORTED_MODULE_9__["AnimationsService"],
            _landmarks_service__WEBPACK_IMPORTED_MODULE_10__["LandmarksService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterExtensions"],
            tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_3__["Page"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["PlatformLocation"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./home2/home2.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home2Module", function() { return Home2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nativescript-ui-listview/angular");
/* harmony import */ var nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-ui-calendar/angular");
/* harmony import */ var nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-ui-chart/angular");
/* harmony import */ var nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nativescript-ui-dataform/angular");
/* harmony import */ var nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nativescript-ui-autocomplete/angular");
/* harmony import */ var nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nativescript-ui-gauge/angular");
/* harmony import */ var nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nativescript-angular/forms");
/* harmony import */ var nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home2_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home2/home2-routing.module.ts");
/* harmony import */ var _home2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home2/home2.component.ts");
/* harmony import */ var _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./action-button/action-button.module.ts");













var Home2Module = /** @class */ (function () {
    function Home2Module() {
    }
    Home2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"],
                nativescript_ui_listview_angular__WEBPACK_IMPORTED_MODULE_3__["NativeScriptUIListViewModule"],
                nativescript_ui_calendar_angular__WEBPACK_IMPORTED_MODULE_4__["NativeScriptUICalendarModule"],
                nativescript_ui_chart_angular__WEBPACK_IMPORTED_MODULE_5__["NativeScriptUIChartModule"],
                nativescript_ui_dataform_angular__WEBPACK_IMPORTED_MODULE_6__["NativeScriptUIDataFormModule"],
                nativescript_ui_autocomplete_angular__WEBPACK_IMPORTED_MODULE_7__["NativeScriptUIAutoCompleteTextViewModule"],
                nativescript_ui_gauge_angular__WEBPACK_IMPORTED_MODULE_8__["NativeScriptUIGaugeModule"],
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home2_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"],
                _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_12__["ActionButtonModule"]
            ],
            declarations: [
                _home2_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], Home2Module);
    return Home2Module;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"android":{"v8Flags":"--expose_gc","forceLog":true},"main":"main.js","name":"tns-template-blank-ng","version":"3.1.1"};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUyL2hvbWUyLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUyL2hvbWUyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZTIvaG9tZTIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZTIvaG9tZTIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2hvbWUyL2hvbWUyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUFnQyxjQUFjLGVBQWUsaUJBQWlCLEdBQUcsV0FBVyxnQkFBZ0IsOEJBQThCLGdCQUFnQixxQkFBcUIsR0FBRyxDOzs7Ozs7O0FDQWxMLCthOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQThGO0FBVTlGO0lBVUM7UUFOZSxRQUFHLEdBQW1DLElBQUksMERBQVksRUFBb0IsQ0FBQztJQU8xRixDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLElBQXNCO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsT0FBYSxFQUFDLE9BQWU7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ2YsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFDWCxL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LEVBQUU7Z0JBQ0wsOERBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUE7QUFBSiIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi5tYWluLWxheW91dCB7XFxuXFx0d2lkdGg6IDI0O1xcblxcdGhlaWdodDogMjQ7XFxuXFx0cGFkZGluZzogNCAyO1xcbn1cXG5cXG4ubGluZSB7XFxuICAgIGhlaWdodDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0bWFyZ2luOiA1IDE7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgKHRhcCk9XFxcIm9uVGFwKCRldmVudClcXFwiIHJvd3M9XFxcIiosKiwqXFxcIiBjbGFzcz1cXFwibWFpbi1sYXlvdXRcXFwiPlxcblxcdDxTdGFja0xheW91dCAjbGluZVRvcCByb3c9XFxcIjBcXFwiIChsb2FkZWQpPVxcXCJ1cGRhdGVUb3AobGluZVRvcCx0cnVlKVxcXCIgY2xhc3M9XFxcImxpbmVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrTGF5b3V0ICNsaW5lQ2VudGVyIHJvdz1cXFwiMVxcXCIgKGxvYWRlZCk9XFxcInVwZGF0ZUNlbnRlcihsaW5lQ2VudGVyLHRydWUpXFxcIiBjbGFzcz1cXFwibGluZVxcXCI+PC9TdGFja0xheW91dD5cXG5cXHQ8U3RhY2tMYXlvdXQgI2xpbmVCb3R0b20gcm93PVxcXCIyXFxcIiAobG9hZGVkKT1cXFwidXBkYXRlQm90dG9tKGxpbmVCb3R0b20sdHJ1ZSlcXFwiIGNsYXNzPVxcXCJsaW5lXFxcIj48L1N0YWNrTGF5b3V0PlxcbjwvR3JpZExheW91dD5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogXCJBY3Rpb25CdXR0b25cIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2FjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB7XG5cblx0QElucHV0KCdpc0Fycm93JykgaXNBcnJvdzogYm9vbGVhbjtcblxuXHRAT3V0cHV0KFwidGFwXCIpIHRhcDogRXZlbnRFbWl0dGVyPEdlc3R1cmVFdmVudERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPigpO1xuXG5cdEBWaWV3Q2hpbGQoXCJsaW5lVG9wXCIsIHtzdGF0aWM6IHRydWV9KSBfbGluZVRvcFJlZjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImxpbmVDZW50ZXJcIix7c3RhdGljOiB0cnVlfSkgX2xpbmVDZW50ZXJSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJsaW5lQm90dG9tXCIse3N0YXRpYzogdHJ1ZX0pIF9saW5lQm90dG9tUmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuXHRcdHRoaXMudGFwLm5leHQoYXJncyk7XG5cdH1cblxuXHR1cGRhdGVUb3AoZWxlbWVudDogVmlldyxhbmltYXRlOmJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogLTQ1LFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuNDUsIHk6IDEgfSxcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogLTUsIHk6IDMgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSAtNDU7XG5cdFx0XHRlbGVtZW50LnNjYWxlWCA9IDAuNDU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVggPSAtNTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IDM7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQ2VudGVyKGVsZW1lbnQ6IFZpZXcsYW5pbWF0ZTpib29sZWFuKSB7XG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyb3cpIHtcblx0XHRcdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRyb3RhdGU6IDAsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC45LCB5OiAxIH0sXG5cdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IDEsIHk6IDAgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSAwO1xuXHRcdFx0ZWxlbWVudC5zY2FsZVggPSAwLjk7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVggPSAxO1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gMDtcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVCb3R0b20oZWxlbWVudDogVmlldywgYW5pbWF0ZTpib29sZWFuKSB7XG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyb3cpIHtcblx0XHRcdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRyb3RhdGU6IDQ1LFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuNDUsIHk6IDEgfSxcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogLTUsIHk6IC0zIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gNDU7XG5cdFx0XHRlbGVtZW50LnNjYWxlWCA9IDAuNDU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVggPSAtNTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IC0zO1xuXHRcdH1cblx0fVxuXG5cdGFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50OiBWaWV3KSB7XG5cdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdHJvdGF0ZTogMCxcblx0XHRcdHNjYWxlOiB7IHg6IDEsIHk6IDEgfSxcblx0XHRcdHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sXG5cdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0fVxuXG5cdG1ha2VBcnJvdygpIHtcblx0XHR0aGlzLnVwZGF0ZVRvcCh0aGlzLl9saW5lVG9wUmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcblx0XHR0aGlzLnVwZGF0ZUNlbnRlcih0aGlzLl9saW5lQ2VudGVyUmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcblx0XHR0aGlzLnVwZGF0ZUJvdHRvbSh0aGlzLl9saW5lQm90dG9tUmVmLm5hdGl2ZUVsZW1lbnQsIGZhbHNlKTtcblx0fVxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEFjdGlvbkJ1dHRvbkNvbXBvbmVudFxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0QWN0aW9uQnV0dG9uQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uTW9kdWxlIHsgfSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUyLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZVJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiLm1haW4tbGF5b3V0IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTI7XFxufVxcblxcbi5hbmltYXRpbmctaW1hZ2UtY29udGFpbmVyIHtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLmxpc3QtaXRlbSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICAgIHBhZGRpbmc6IDE2O1xcbiAgICBmb250LXNpemU6IDIwO1xcbn1cXG5cXG4uYWN0aW9uLWJhci1sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMjI7XFxuICAgIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYWN0aW9uLWJhci1pY29uIHtcXG4gICAgd2lkdGg6IDIwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEyO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNmZmVcXFwiPlxcblxcdDxOYXZpZ2F0aW9uQnV0dG9uIHZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcblxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sKixhdXRvXFxcIiBpb3M6cGFkZGluZz1cXFwiMCAxMFxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxuXFx0XFx0PEFjdGlvbkJ1dHRvbiAjYWN0aW9uQnV0dG9uICh0YXApPVxcXCJvbkRyYXdlckJ1dHRvblRhcCgkZXZlbnQpXFxcIiA+PC9BY3Rpb25CdXR0b24+XFxuXFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiV29ya2VkXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCIgY29sb3I9XFxcImJsYWNrXFxcIj48L0xhYmVsPlxcblxcdFxcdDxJbWFnZSAjc2VhcmNoIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L2ljb25zL3NlYXJjaC5wbmdcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWljb25cXFwiIHRpbnRDb2xvcj1cXFwiIzJhMmEyYVxcXCI+PC9JbWFnZT5cXG5cXHQ8L0dyaWRMYXlvdXQ+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG5cXHQ8TGlzdFZpZXcgI2xpc3QgW2l0ZW1zXT1cXFwibGFuZG1hcmtzXFxcIiAoaXRlbVRhcCk9XFxcIm9uTmF2aWdhdGlvbkl0ZW1UYXAoJGV2ZW50KVxcXCI+XFxuXFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG5cXHRcXHRcXHQ8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0PExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwiaXRlbS10aXRsZVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxuXFx0XFx0PC9uZy10ZW1wbGF0ZT5cXG5cXHQ8L0xpc3RWaWV3PlxcblxcdDxBYnNvbHV0ZUxheW91dCAjYW5pbWF0aW5nSW1hZ2VDb250YWluZXIgb3BhY2l0eT1cXFwiMFxcXCIgY2xhc3M9XFxcImFuaW1hdGluZy1pbWFnZS1jb250YWluZXJcXFwiPlxcblxcdFxcdDxJbWFnZSAjYW5pbWF0aW5nSW1hZ2Ugd2lkdGg9XFxcIjEwMCVcXFwiPjwvSW1hZ2U+XFxuXFx0PC9BYnNvbHV0ZUxheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4uL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IGFuZHJvaWQsIGlvcyB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9hbmltYXRpb25zLXNlcnZpY2VcIjtcbmltcG9ydCB7IExhbmRtYXJrc1NlcnZpY2UgfSBmcm9tIFwiLi4vbGFuZG1hcmtzLXNlcnZpY2VcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbkNvbXBvbmVudCB9IGZyb20gXCIuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lMi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9sYW5kbWFya3M6IExhbmRtYXJrW107XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRWaWV3OiBWaWV3O1xuICAgIHByaXZhdGUgX2FkanVzdGVkT2Zmc2V0OiBudW1iZXIgPSAwO1xuXG4gICAgQFZpZXdDaGlsZChcImFjdGlvbkJ1dHRvblwiLHtzdGF0aWM6IHRydWV9KSBfYnV0dG9uUmVmOiBBY3Rpb25CdXR0b25Db21wb25lbnQ7XG4gICAgQFZpZXdDaGlsZChcInNlYXJjaFwiLHtzdGF0aWM6IHRydWV9KSBfc2VhcmNoUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJsaXN0XCIse3N0YXRpYzogdHJ1ZX0pIF9saXN0UmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJhbmltYXRpbmdJbWFnZVwiLHtzdGF0aWM6IHRydWV9KSBfaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImFuaW1hdGluZ0ltYWdlQ29udGFpbmVyXCIse3N0YXRpYzogdHJ1ZX0pIF9pbWFnZUNvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5pbWF0aW9uc1NlcnZpY2U6IEFuaW1hdGlvbnNTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGxhbmRtYXJrc1NlcnZpY2U6IExhbmRtYXJrc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5wYWdlWydzY3JvbGxhYmxlQ29udGVudCddID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbGFuZG1hcmtzID0gdGhpcy5sYW5kbWFya3NTZXJ2aWNlLmdldExhbmRtYXJrcygpO1xuXG4gICAgICAgIGlmIChhbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXNCYXJDb2xvcihcIiMyQjMyMzhcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24ub25Qb3BTdGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbk5hdmlnYXRlZFRvKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpb3MpIHtcbiAgICAgICAgICAgIHRvcG1vc3QoKS5pb3MuY29udHJvbGxlci5uYXZpZ2F0aW9uQmFyLmJhclN0eWxlID0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIGdldCBsYW5kbWFya3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sYW5kbWFya3M7XG4gICAgfVxuXG4gICAgcHVibGljIG9uTmF2aWdhdGlvbkl0ZW1UYXAoYXJnczogYW55KSB7XG4gICAgICAgIHRoaXMubGFuZG1hcmtzU2VydmljZS5zZXRTZWxlY3RlZElkKGFyZ3MuaW5kZXgpO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFZpZXcgPSBhcmdzLnZpZXc7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uc1NlcnZpY2UuYW5pbWF0aW9uT2Zmc2V0ID0gdGhpcy5tZWFzdXJlT2Zmc2V0KGFyZ3MudmlldywgYXJncy5vYmplY3QpO1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvZGV0YWlscyddLCB7IGFuaW1hdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wcmVwYXJlRm9yQmFja05hdmlnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtZWFzdXJlT2Zmc2V0KHZpZXcxOiBWaWV3LCB2aWV3MjogVmlldykge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdmlldzEuZ2V0TG9jYXRpb25SZWxhdGl2ZVRvKHZpZXcyKS55O1xuICAgICAgICBpZiAodmlldzIuaW9zICYmIHZpZXcyLmlvcy5hZGp1c3RlZENvbnRlbnRJbnNldCkge1xuICAgICAgICAgICAgdGhpcy5fYWRqdXN0ZWRPZmZzZXQgPSB2aWV3Mi5pb3MuYWRqdXN0ZWRDb250ZW50SW5zZXQudG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXQgLSB0aGlzLl9hZGp1c3RlZE9mZnNldDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wcmVwYXJlRm9yQmFja05hdmlnYXRpb24oKSB7XG4gICAgICAgIHRoaXMuX2xpc3RSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRWaWV3Lm9wYWNpdHkgPSAwO1xuXG4gICAgICAgIHRoaXMuX2ltYWdlUmVmLm5hdGl2ZUVsZW1lbnQuc3JjID0gdGhpcy5sYW5kbWFya3NTZXJ2aWNlLmdldFNlbGVjdGVkKCkuaW1hZ2U7XG4gICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWSA9IHRoaXMuX2FkanVzdGVkT2Zmc2V0O1xuICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50Lm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIHRoaXMuX2J1dHRvblJlZi5tYWtlQXJyb3coKTtcbiAgICAgICAgdGhpcy5fc2VhcmNoUmVmLm5hdGl2ZUVsZW1lbnQub3BhY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25OYXZpZ2F0ZWRUbygpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuYW5pbWF0aW9uc1NlcnZpY2UuYW5pbWF0aW9uT2Zmc2V0ICsgdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IHsgeDogMCwgeTogb2Zmc2V0IH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZFZpZXcub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gMDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4geyB9KTtcblxuICAgICAgICB0aGlzLl9saXN0UmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgICAgICB0aGlzLl9zZWFyY2hSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlU3RhdHVzQmFyQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgICAgICBpZiAoZGV2aWNlLnNka1ZlcnNpb24gPj0gXCIyMVwiICYmIGFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5KSB7XG4gICAgICAgICAgICB2YXIgbmF0aXZlQ29sb3IgPSBuZXcgQ29sb3IoY29sb3IpLmFuZHJvaWQ7XG4gICAgICAgICAgICB2YXIgd2luZG93ID0gYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0U3RhdHVzQmFyQ29sb3IobmF0aXZlQ29sb3IpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9ob21lMi1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uTW9kdWxlIH0gZnJvbSBcIi4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5tb2R1bGVcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIEFjdGlvbkJ1dHRvbk1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhvbWVDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZTJNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9