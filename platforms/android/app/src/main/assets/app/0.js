(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

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

/***/ "./home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
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

/***/ "./home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".main-layout {\n    margin-top: 0;\n    margin-bottom: -2;\n}\n\n.animating-image-container {\n    vertical-align: top;\n}\n\n.list-item {\n    margin-bottom: 2;\n}\n\n.item-title {\n    background-color: rgba(0,0,0,0.4);\n    color: white;\n    vertical-align: bottom;\n    padding: 16;\n    font-size: 20;\n}\n\n.action-bar-label {\n    font-size: 22;\n    horizontal-align: center;\n    vertical-align: center;\n    color: white;\n}\n\n.action-bar-icon {\n    width: 20;\n    vertical-align: center;\n    margin: 12;\n}"

/***/ }),

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\" backgroundColor=\"#ffe\">\n\t<NavigationButton visibility=\"collapsed\"></NavigationButton>\n\t<GridLayout columns=\"auto,*,auto\" ios:padding=\"0 10\" height=\"100%\" width=\"100%\">\n\t\t<ActionButton #actionButton ></ActionButton>\n\t\t<Label col=\"1\" text=\"Discounts\" class=\"action-bar-label\" color=\"black\"></Label>\n\t\t<Image #search col=\"2\" src=\"~/icons/search.png\" class=\"action-bar-icon\" tintColor=\"#2a2a2a\"></Image>\n\t</GridLayout>\n</ActionBar>\n\n<GridLayout height=\"100%\">\n\t<ListView #list [items]=\"landmarks\" (itemTap)=\"onNavigationItemTap($event)\">\n\t\t<ng-template let-item=\"item\">\n\t\t\t<GridLayout class=\"list-item\">\n\t\t\t\t<Image [src]=\"item.image\"></Image>\n\t\t\t\t<Label [text]=\"item.name\" class=\"item-title\"></Label>\n\t\t\t</GridLayout>\n\t\t</ng-template>\n\t</ListView>\n\t<AbsoluteLayout #animatingImageContainer opacity=\"0\" class=\"animating-image-container\">\n\t\t<Image #animatingImage width=\"100%\"></Image>\n\t</AbsoluteLayout>\n</GridLayout>"

/***/ }),

/***/ "./home/home.component.ts":
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
            template: __webpack_require__("./home/home.component.html"),
            styles: [__webpack_require__("./home/home.component.css")]
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

/***/ "./home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
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
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./home/home.component.ts");
/* harmony import */ var _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./action-button/action-button.module.ts");













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
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
                _home_routing_module__WEBPACK_IMPORTED_MODULE_10__["HomeRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"],
                _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_12__["ActionButtonModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUvaG9tZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZS9ob21lLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0NBQWdDLGNBQWMsZUFBZSxpQkFBaUIsR0FBRyxXQUFXLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLEM7Ozs7Ozs7QUNBbEwsK2E7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEY7QUFVOUY7SUFVQztRQU5lLFFBQUcsR0FBbUMsSUFBSSwwREFBWSxFQUFvQixDQUFDO0lBTzFGLENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sSUFBc0I7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxPQUFhLEVBQUMsT0FBZTtRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZixNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUNYLEtBQUssRUFBRSxF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Lm1haW4tbGF5b3V0IHtcXG5cXHR3aWR0aDogMjQ7XFxuXFx0aGVpZ2h0OiAyNDtcXG5cXHRwYWRkaW5nOiA0IDI7XFxufVxcblxcbi5saW5lIHtcXG4gICAgaGVpZ2h0OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW46IDUgMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCAodGFwKT1cXFwib25UYXAoJGV2ZW50KVxcXCIgcm93cz1cXFwiKiwqLCpcXFwiIGNsYXNzPVxcXCJtYWluLWxheW91dFxcXCI+XFxuXFx0PFN0YWNrTGF5b3V0ICNsaW5lVG9wIHJvdz1cXFwiMFxcXCIgKGxvYWRlZCk9XFxcInVwZGF0ZVRvcChsaW5lVG9wLHRydWUpXFxcIiBjbGFzcz1cXFwibGluZVxcXCI+PC9TdGFja0xheW91dD5cXG5cXHQ8U3RhY2tMYXlvdXQgI2xpbmVDZW50ZXIgcm93PVxcXCIxXFxcIiAobG9hZGVkKT1cXFwidXBkYXRlQ2VudGVyKGxpbmVDZW50ZXIsdHJ1ZSlcXFwiIGNsYXNzPVxcXCJsaW5lXFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdDxTdGFja0xheW91dCAjbGluZUJvdHRvbSByb3c9XFxcIjJcXFwiIChsb2FkZWQpPVxcXCJ1cGRhdGVCb3R0b20obGluZUJvdHRvbSx0cnVlKVxcXCIgY2xhc3M9XFxcImxpbmVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkFjdGlvbkJ1dHRvblwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uQ29tcG9uZW50IHtcblxuXHRASW5wdXQoJ2lzQXJyb3cnKSBpc0Fycm93OiBib29sZWFuO1xuXG5cdEBPdXRwdXQoXCJ0YXBcIikgdGFwOiBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPEdlc3R1cmVFdmVudERhdGE+KCk7XG5cblx0QFZpZXdDaGlsZChcImxpbmVUb3BcIiwge3N0YXRpYzogdHJ1ZX0pIF9saW5lVG9wUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwibGluZUNlbnRlclwiLHtzdGF0aWM6IHRydWV9KSBfbGluZUNlbnRlclJlZjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImxpbmVCb3R0b21cIix7c3RhdGljOiB0cnVlfSkgX2xpbmVCb3R0b21SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG5cdFx0dGhpcy50YXAubmV4dChhcmdzKTtcblx0fVxuXG5cdHVwZGF0ZVRvcChlbGVtZW50OiBWaWV3LGFuaW1hdGU6Ym9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiAtNDUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC40NSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogMyB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IC00NTtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC40NTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IC01O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gMztcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVDZW50ZXIoZWxlbWVudDogVmlldyxhbmltYXRlOmJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogMCxcblx0XHRcdFx0XHRzY2FsZTogeyB4OiAwLjksIHk6IDEgfSxcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogMSwgeTogMCB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IDA7XG5cdFx0XHRlbGVtZW50LnNjYWxlWCA9IDAuOTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IDE7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVkgPSAwO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUJvdHRvbShlbGVtZW50OiBWaWV3LCBhbmltYXRlOmJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogNDUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC40NSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogLTMgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSA0NTtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC40NTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IC01O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gLTM7XG5cdFx0fVxuXHR9XG5cblx0YW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQ6IFZpZXcpIHtcblx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0cm90YXRlOiAwLFxuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcblx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHR9XG5cblx0bWFrZUFycm93KCkge1xuXHRcdHRoaXMudXBkYXRlVG9wKHRoaXMuX2xpbmVUb3BSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlQ2VudGVyKHRoaXMuX2xpbmVDZW50ZXJSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlQm90dG9tKHRoaXMuX2xpbmVCb3R0b21SZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHR9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWN0aW9uQnV0dG9uQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3Rpb25CdXR0b25Db21wb25lbnRcblx0XSxcblx0c2NoZW1hczogW1xuXHRcdE5PX0VSUk9SU19TQ0hFTUFcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25Nb2R1bGUgeyB9IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5tYWluLWxheW91dCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yO1xcbn1cXG5cXG4uYW5pbWF0aW5nLWltYWdlLWNvbnRhaW5lciB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBwYWRkaW5nOiAxNjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG59XFxuXFxuLmFjdGlvbi1iYXItbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIyO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGlvbi1iYXItaWNvbiB7XFxuICAgIHdpZHRoOiAyMDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciBjbGFzcz1cXFwiYWN0aW9uLWJhclxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjZmZlXFxcIj5cXG5cXHQ8TmF2aWdhdGlvbkJ1dHRvbiB2aXNpYmlsaXR5PVxcXCJjb2xsYXBzZWRcXFwiPjwvTmF2aWdhdGlvbkJ1dHRvbj5cXG5cXHQ8R3JpZExheW91dCBjb2x1bW5zPVxcXCJhdXRvLCosYXV0b1xcXCIgaW9zOnBhZGRpbmc9XFxcIjAgMTBcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiPlxcblxcdFxcdDxBY3Rpb25CdXR0b24gI2FjdGlvbkJ1dHRvbiA+PC9BY3Rpb25CdXR0b24+XFxuXFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiRGlzY291bnRzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCIgY29sb3I9XFxcImJsYWNrXFxcIj48L0xhYmVsPlxcblxcdFxcdDxJbWFnZSAjc2VhcmNoIGNvbD1cXFwiMlxcXCIgc3JjPVxcXCJ+L2ljb25zL3NlYXJjaC5wbmdcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWljb25cXFwiIHRpbnRDb2xvcj1cXFwiIzJhMmEyYVxcXCI+PC9JbWFnZT5cXG5cXHQ8L0dyaWRMYXlvdXQ+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG5cXHQ8TGlzdFZpZXcgI2xpc3QgW2l0ZW1zXT1cXFwibGFuZG1hcmtzXFxcIiAoaXRlbVRhcCk9XFxcIm9uTmF2aWdhdGlvbkl0ZW1UYXAoJGV2ZW50KVxcXCI+XFxuXFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG5cXHRcXHRcXHQ8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0PExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwiaXRlbS10aXRsZVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxuXFx0XFx0PC9uZy10ZW1wbGF0ZT5cXG5cXHQ8L0xpc3RWaWV3PlxcblxcdDxBYnNvbHV0ZUxheW91dCAjYW5pbWF0aW5nSW1hZ2VDb250YWluZXIgb3BhY2l0eT1cXFwiMFxcXCIgY2xhc3M9XFxcImFuaW1hdGluZy1pbWFnZS1jb250YWluZXJcXFwiPlxcblxcdFxcdDxJbWFnZSAjYW5pbWF0aW5nSW1hZ2Ugd2lkdGg9XFxcIjEwMCVcXFwiPjwvSW1hZ2U+XFxuXFx0PC9BYnNvbHV0ZUxheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQbGF0Zm9ybUxvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTGFuZG1hcmsgfSBmcm9tIFwiLi4vbGFuZG1hcmtcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgYW5kcm9pZCwgaW9zIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBkZXZpY2UgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IEFuaW1hdGlvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL2FuaW1hdGlvbnMtc2VydmljZVwiO1xuaW1wb3J0IHsgTGFuZG1hcmtzU2VydmljZSB9IGZyb20gXCIuLi9sYW5kbWFya3Mtc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfbGFuZG1hcmtzOiBMYW5kbWFya1tdO1xuICAgIHByaXZhdGUgX3NlbGVjdGVkVmlldzogVmlldztcbiAgICBwcml2YXRlIF9hZGp1c3RlZE9mZnNldDogbnVtYmVyID0gMDtcblxuICAgIEBWaWV3Q2hpbGQoXCJhY3Rpb25CdXR0b25cIix7c3RhdGljOiB0cnVlfSkgX2J1dHRvblJlZjogQWN0aW9uQnV0dG9uQ29tcG9uZW50O1xuICAgIEBWaWV3Q2hpbGQoXCJzZWFyY2hcIix7c3RhdGljOiB0cnVlfSkgX3NlYXJjaFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwibGlzdFwiLHtzdGF0aWM6IHRydWV9KSBfbGlzdFJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYW5pbWF0aW5nSW1hZ2VcIix7c3RhdGljOiB0cnVlfSkgX2ltYWdlUmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJhbmltYXRpbmdJbWFnZUNvbnRhaW5lclwiLHtzdGF0aWM6IHRydWV9KSBfaW1hZ2VDb250YWluZXJSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1hdGlvbnNTZXJ2aWNlOiBBbmltYXRpb25zU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBsYW5kbWFya3NTZXJ2aWNlOiBMYW5kbWFya3NTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogUGxhdGZvcm1Mb2NhdGlvbikge1xuXG4gICAgICAgIHRoaXMucGFnZVsnc2Nyb2xsYWJsZUNvbnRlbnQnXSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2xhbmRtYXJrcyA9IHRoaXMubGFuZG1hcmtzU2VydmljZS5nZXRMYW5kbWFya3MoKTtcblxuICAgICAgICBpZiAoYW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdHVzQmFyQ29sb3IoXCIjMkIzMjM4XCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLm9uUG9wU3RhdGUoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fb25OYXZpZ2F0ZWRUbygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaW9zKSB7XG4gICAgICAgICAgICB0b3Btb3N0KCkuaW9zLmNvbnRyb2xsZXIubmF2aWdhdGlvbkJhci5iYXJTdHlsZSA9IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgbGFuZG1hcmtzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGFuZG1hcmtzO1xuICAgIH1cblxuICAgIHB1YmxpYyBvbk5hdmlnYXRpb25JdGVtVGFwKGFyZ3M6IGFueSkge1xuICAgICAgICB0aGlzLmxhbmRtYXJrc1NlcnZpY2Uuc2V0U2VsZWN0ZWRJZChhcmdzLmluZGV4KTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRWaWV3ID0gYXJncy52aWV3O1xuICAgICAgICB0aGlzLmFuaW1hdGlvbnNTZXJ2aWNlLmFuaW1hdGlvbk9mZnNldCA9IHRoaXMubWVhc3VyZU9mZnNldChhcmdzLnZpZXcsIGFyZ3Mub2JqZWN0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2RldGFpbHMnXSwgeyBhbmltYXRlZDogZmFsc2UgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcHJlcGFyZUZvckJhY2tOYXZpZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWVhc3VyZU9mZnNldCh2aWV3MTogVmlldywgdmlldzI6IFZpZXcpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHZpZXcxLmdldExvY2F0aW9uUmVsYXRpdmVUbyh2aWV3MikueTtcbiAgICAgICAgaWYgKHZpZXcyLmlvcyAmJiB2aWV3Mi5pb3MuYWRqdXN0ZWRDb250ZW50SW5zZXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkanVzdGVkT2Zmc2V0ID0gdmlldzIuaW9zLmFkanVzdGVkQ29udGVudEluc2V0LnRvcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0IC0gdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcHJlcGFyZUZvckJhY2tOYXZpZ2F0aW9uKCkge1xuICAgICAgICB0aGlzLl9saXN0UmVmLm5hdGl2ZUVsZW1lbnQub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVmlldy5vcGFjaXR5ID0gMDtcblxuICAgICAgICB0aGlzLl9pbWFnZVJlZi5uYXRpdmVFbGVtZW50LnNyYyA9IHRoaXMubGFuZG1hcmtzU2VydmljZS5nZXRTZWxlY3RlZCgpLmltYWdlO1xuICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSB0aGlzLl9hZGp1c3RlZE9mZnNldDtcbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMTtcblxuICAgICAgICB0aGlzLl9idXR0b25SZWYubWFrZUFycm93KCk7XG4gICAgICAgIHRoaXMuX3NlYXJjaFJlZi5uYXRpdmVFbGVtZW50Lm9wYWNpdHkgPSAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uTmF2aWdhdGVkVG8oKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmFuaW1hdGlvbnNTZXJ2aWNlLmFuaW1hdGlvbk9mZnNldCArIHRoaXMuX2FkanVzdGVkT2Zmc2V0O1xuICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IG9mZnNldCB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWRWaWV3Lm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmVhc2VPdXRcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQudHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cbiAgICAgICAgdGhpcy5fbGlzdFJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgdGhpcy5fc2VhcmNoUmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZVN0YXR1c0JhckNvbG9yKGNvbG9yOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGRldmljZS5zZGtWZXJzaW9uID49IFwiMjFcIiAmJiBhbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eSkge1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUNvbG9yID0gbmV3IENvbG9yKGNvbG9yKS5hbmRyb2lkO1xuICAgICAgICAgICAgdmFyIHdpbmRvdyA9IGFuZHJvaWQuZm9yZWdyb3VuZEFjdGl2aXR5LmdldFdpbmRvdygpO1xuICAgICAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKG5hdGl2ZUNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IEhvbWVSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vaG9tZS1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQWN0aW9uQnV0dG9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==