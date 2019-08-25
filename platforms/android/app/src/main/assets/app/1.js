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

module.exports = "<GridLayout height=\"100%\">\n\t<ListView #list [items]=\"landmarks\" (itemTap)=\"onNavigationItemTap($event)\">\n\t\t<ng-template let-item=\"item\">\n\t\t\t<GridLayout class=\"list-item\">\n\t\t\t\t<Image [src]=\"item.image\"></Image>\n\t\t\t\t<Label [text]=\"item.name\" class=\"item-title\"></Label>\n\t\t\t</GridLayout>\n\t\t</ng-template>\n\t</ListView>\n\t<AbsoluteLayout #animatingImageContainer opacity=\"0\" class=\"animating-image-container\">\n\t\t<Image #animatingImage width=\"100%\"></Image>\n\t</AbsoluteLayout>\n</GridLayout>"

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
/* harmony import */ var _landmarks2_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./landmarks2-service.ts");
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
        this.page.actionBarHidden = true;
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
        { type: _landmarks2_service__WEBPACK_IMPORTED_MODULE_10__["Landmarks2Service"] },
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
            _landmarks2_service__WEBPACK_IMPORTED_MODULE_10__["Landmarks2Service"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUyL2hvbWUyLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2hvbWUyL2hvbWUyLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vaG9tZTIvaG9tZTIuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vaG9tZTIvaG9tZTIuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL2hvbWUyL2hvbWUyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdDQUFnQyxjQUFjLGVBQWUsaUJBQWlCLEdBQUcsV0FBVyxnQkFBZ0IsOEJBQThCLGdCQUFnQixxQkFBcUIsR0FBRyxDOzs7Ozs7O0FDQWxMLCthOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQThGO0FBVTlGO0lBVUM7UUFOZSxRQUFHLEdBQW1DLElBQUksMERBQVksRUFBb0IsQ0FBQztJQU8xRixDQUFDO0lBRUQscUNBQUssR0FBTCxVQUFNLElBQXNCO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsT0FBYSxFQUFDLE9BQWU7UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ2YsTUFBTSxFQUFFLENBQUMsRUFBRTtvQkFDWCxL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Q3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLCtEQUFhO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLDhEQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxXQUFXLENBQUk7SUFBRCxrQkFBQztDQUFBO0FBQUoiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIubWFpbi1sYXlvdXQge1xcblxcdHdpZHRoOiAyNDtcXG5cXHRoZWlnaHQ6IDI0O1xcblxcdHBhZGRpbmc6IDQgMjtcXG59XFxuXFxuLmxpbmUge1xcbiAgICBoZWlnaHQ6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbjogNSAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDE7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0ICh0YXApPVxcXCJvblRhcCgkZXZlbnQpXFxcIiByb3dzPVxcXCIqLCosKlxcXCIgY2xhc3M9XFxcIm1haW4tbGF5b3V0XFxcIj5cXG5cXHQ8U3RhY2tMYXlvdXQgI2xpbmVUb3Agcm93PVxcXCIwXFxcIiAobG9hZGVkKT1cXFwidXBkYXRlVG9wKGxpbmVUb3AsdHJ1ZSlcXFwiIGNsYXNzPVxcXCJsaW5lXFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdDxTdGFja0xheW91dCAjbGluZUNlbnRlciByb3c9XFxcIjFcXFwiIChsb2FkZWQpPVxcXCJ1cGRhdGVDZW50ZXIobGluZUNlbnRlcix0cnVlKVxcXCIgY2xhc3M9XFxcImxpbmVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrTGF5b3V0ICNsaW5lQm90dG9tIHJvdz1cXFwiMlxcXCIgKGxvYWRlZCk9XFxcInVwZGF0ZUJvdHRvbShsaW5lQm90dG9tLHRydWUpXFxcIiBjbGFzcz1cXFwibGluZVxcXCI+PC9TdGFja0xheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQWN0aW9uQnV0dG9uXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25Db21wb25lbnQge1xuXG5cdEBJbnB1dCgnaXNBcnJvdycpIGlzQXJyb3c6IGJvb2xlYW47XG5cblx0QE91dHB1dChcInRhcFwiKSB0YXA6IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4oKTtcblxuXHRAVmlld0NoaWxkKFwibGluZVRvcFwiLCB7c3RhdGljOiB0cnVlfSkgX2xpbmVUb3BSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJsaW5lQ2VudGVyXCIse3N0YXRpYzogdHJ1ZX0pIF9saW5lQ2VudGVyUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwibGluZUJvdHRvbVwiLHtzdGF0aWM6IHRydWV9KSBfbGluZUJvdHRvbVJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG9uVGFwKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcblx0XHR0aGlzLnRhcC5uZXh0KGFyZ3MpO1xuXHR9XG5cblx0dXBkYXRlVG9wKGVsZW1lbnQ6IFZpZXcsYW5pbWF0ZTpib29sZWFuKSB7XG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyb3cpIHtcblx0XHRcdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRyb3RhdGU6IC00NSxcblx0XHRcdFx0XHRzY2FsZTogeyB4OiAwLjQ1LCB5OiAxIH0sXG5cdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IC01LCB5OiAzIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gLTQ1O1xuXHRcdFx0ZWxlbWVudC5zY2FsZVggPSAwLjQ1O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gLTU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVkgPSAzO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUNlbnRlcihlbGVtZW50OiBWaWV3LGFuaW1hdGU6Ym9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiAwLFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuOSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAxLCB5OiAwIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gMDtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC45O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gMTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQm90dG9tKGVsZW1lbnQ6IFZpZXcsIGFuaW1hdGU6Ym9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiA0NSxcblx0XHRcdFx0XHRzY2FsZTogeyB4OiAwLjQ1LCB5OiAxIH0sXG5cdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IC01LCB5OiAtMyB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IDQ1O1xuXHRcdFx0ZWxlbWVudC5zY2FsZVggPSAwLjQ1O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gLTU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVkgPSAtMztcblx0XHR9XG5cdH1cblxuXHRhbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudDogVmlldykge1xuXHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRyb3RhdGU6IDAsXG5cdFx0XHRzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG5cdFx0XHR0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuXHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdH1cblxuXHRtYWtlQXJyb3coKSB7XG5cdFx0dGhpcy51cGRhdGVUb3AodGhpcy5fbGluZVRvcFJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG5cdFx0dGhpcy51cGRhdGVDZW50ZXIodGhpcy5fbGluZUNlbnRlclJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG5cdFx0dGhpcy51cGRhdGVCb3R0b20odGhpcy5fbGluZUJvdHRvbVJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3Rpb25CdXR0b25Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGlvbkJ1dHRvbkNvbXBvbmVudFxuXHRdLFxuXHRzY2hlbWFzOiBbXG5cdFx0Tk9fRVJST1JTX1NDSEVNQVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbk1vZHVsZSB7IH0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lMi5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVSb3V0aW5nTW9kdWxlIHsgfVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi5tYWluLWxheW91dCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IC0yO1xcbn1cXG5cXG4uYW5pbWF0aW5nLWltYWdlLWNvbnRhaW5lciB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5saXN0LWl0ZW0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgICBwYWRkaW5nOiAxNjtcXG4gICAgZm9udC1zaXplOiAyMDtcXG59XFxuXFxuLmFjdGlvbi1iYXItbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIyO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGlvbi1iYXItaWNvbiB7XFxuICAgIHdpZHRoOiAyMDtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMjtcXG59XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEdyaWRMYXlvdXQgaGVpZ2h0PVxcXCIxMDAlXFxcIj5cXG5cXHQ8TGlzdFZpZXcgI2xpc3QgW2l0ZW1zXT1cXFwibGFuZG1hcmtzXFxcIiAoaXRlbVRhcCk9XFxcIm9uTmF2aWdhdGlvbkl0ZW1UYXAoJGV2ZW50KVxcXCI+XFxuXFx0XFx0PG5nLXRlbXBsYXRlIGxldC1pdGVtPVxcXCJpdGVtXFxcIj5cXG5cXHRcXHRcXHQ8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1pdGVtXFxcIj5cXG5cXHRcXHRcXHRcXHQ8SW1hZ2UgW3NyY109XFxcIml0ZW0uaW1hZ2VcXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0PExhYmVsIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIiBjbGFzcz1cXFwiaXRlbS10aXRsZVxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHQ8L0dyaWRMYXlvdXQ+XFxuXFx0XFx0PC9uZy10ZW1wbGF0ZT5cXG5cXHQ8L0xpc3RWaWV3PlxcblxcdDxBYnNvbHV0ZUxheW91dCAjYW5pbWF0aW5nSW1hZ2VDb250YWluZXIgb3BhY2l0eT1cXFwiMFxcXCIgY2xhc3M9XFxcImFuaW1hdGluZy1pbWFnZS1jb250YWluZXJcXFwiPlxcblxcdFxcdDxJbWFnZSAjYW5pbWF0aW5nSW1hZ2Ugd2lkdGg9XFxcIjEwMCVcXFwiPjwvSW1hZ2U+XFxuXFx0PC9BYnNvbHV0ZUxheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGxhdGZvcm1Mb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4uL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IGFuZHJvaWQsIGlvcyB9IGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9hbmltYXRpb25zLXNlcnZpY2VcIjtcbmltcG9ydCB7IExhbmRtYXJrczJTZXJ2aWNlIH0gZnJvbSBcIi4uL2xhbmRtYXJrczItc2VydmljZVwiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vaG9tZTIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2xhbmRtYXJrczogTGFuZG1hcmtbXTtcbiAgICBwcml2YXRlIF9zZWxlY3RlZFZpZXc6IFZpZXc7XG4gICAgcHJpdmF0ZSBfYWRqdXN0ZWRPZmZzZXQ6IG51bWJlciA9IDA7XG5cbiAgICBAVmlld0NoaWxkKFwiYWN0aW9uQnV0dG9uXCIse3N0YXRpYzogdHJ1ZX0pIF9idXR0b25SZWY6IEFjdGlvbkJ1dHRvbkNvbXBvbmVudDtcbiAgICBAVmlld0NoaWxkKFwic2VhcmNoXCIse3N0YXRpYzogdHJ1ZX0pIF9zZWFyY2hSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImxpc3RcIix7c3RhdGljOiB0cnVlfSkgX2xpc3RSZWY6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImFuaW1hdGluZ0ltYWdlXCIse3N0YXRpYzogdHJ1ZX0pIF9pbWFnZVJlZjogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiYW5pbWF0aW5nSW1hZ2VDb250YWluZXJcIix7c3RhdGljOiB0cnVlfSkgX2ltYWdlQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmltYXRpb25zU2VydmljZTogQW5pbWF0aW9uc1NlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgbGFuZG1hcmtzU2VydmljZTogTGFuZG1hcmtzMlNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBQbGF0Zm9ybUxvY2F0aW9uKSB7XG5cbiAgICAgICAgdGhpcy5wYWdlWydzY3JvbGxhYmxlQ29udGVudCddID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbGFuZG1hcmtzID0gdGhpcy5sYW5kbWFya3NTZXJ2aWNlLmdldExhbmRtYXJrcygpO1xuXG4gICAgICAgIGlmIChhbmRyb2lkKSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVTdGF0dXNCYXJDb2xvcihcIiMyQjMyMzhcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24ub25Qb3BTdGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9vbk5hdmlnYXRlZFRvKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgaWYgKGlvcykge1xuICAgICAgICAgICAgdG9wbW9zdCgpLmlvcy5jb250cm9sbGVyLm5hdmlnYXRpb25CYXIuYmFyU3R5bGUgPSAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0IGxhbmRtYXJrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xhbmRtYXJrcztcbiAgICB9XG5cbiAgICBwdWJsaWMgb25OYXZpZ2F0aW9uSXRlbVRhcChhcmdzOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYW5kbWFya3NTZXJ2aWNlLnNldFNlbGVjdGVkSWQoYXJncy5pbmRleCk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVmlldyA9IGFyZ3MudmlldztcbiAgICAgICAgdGhpcy5hbmltYXRpb25zU2VydmljZS5hbmltYXRpb25PZmZzZXQgPSB0aGlzLm1lYXN1cmVPZmZzZXQoYXJncy52aWV3LCBhcmdzLm9iamVjdCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJy9kZXRhaWxzJ10sIHsgYW5pbWF0ZWQ6IGZhbHNlIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXBhcmVGb3JCYWNrTmF2aWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1lYXN1cmVPZmZzZXQodmlldzE6IFZpZXcsIHZpZXcyOiBWaWV3KSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB2aWV3MS5nZXRMb2NhdGlvblJlbGF0aXZlVG8odmlldzIpLnk7XG4gICAgICAgIGlmICh2aWV3Mi5pb3MgJiYgdmlldzIuaW9zLmFkanVzdGVkQ29udGVudEluc2V0KSB7XG4gICAgICAgICAgICB0aGlzLl9hZGp1c3RlZE9mZnNldCA9IHZpZXcyLmlvcy5hZGp1c3RlZENvbnRlbnRJbnNldC50b3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldCAtIHRoaXMuX2FkanVzdGVkT2Zmc2V0O1xuICAgIH1cblxuICAgIHByaXZhdGUgX3ByZXBhcmVGb3JCYWNrTmF2aWdhdGlvbigpIHtcbiAgICAgICAgdGhpcy5fbGlzdFJlZi5uYXRpdmVFbGVtZW50Lm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZFZpZXcub3BhY2l0eSA9IDA7XG5cbiAgICAgICAgdGhpcy5faW1hZ2VSZWYubmF0aXZlRWxlbWVudC5zcmMgPSB0aGlzLmxhbmRtYXJrc1NlcnZpY2UuZ2V0U2VsZWN0ZWQoKS5pbWFnZTtcbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC50cmFuc2xhdGVZID0gdGhpcy5fYWRqdXN0ZWRPZmZzZXQ7XG4gICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQub3BhY2l0eSA9IDE7XG5cbiAgICAgICAgdGhpcy5fYnV0dG9uUmVmLm1ha2VBcnJvdygpO1xuICAgICAgICB0aGlzLl9zZWFyY2hSZWYubmF0aXZlRWxlbWVudC5vcGFjaXR5ID0gMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9vbk5hdmlnYXRlZFRvKCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5hbmltYXRpb25zU2VydmljZS5hbmltYXRpb25PZmZzZXQgKyB0aGlzLl9hZGp1c3RlZE9mZnNldDtcbiAgICAgICAgdGhpcy5faW1hZ2VDb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiBvZmZzZXQgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuZWFzZU91dFxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkVmlldy5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIHRoaXMuX2ltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LnRyYW5zbGF0ZVkgPSAwO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXG4gICAgICAgIHRoaXMuX2xpc3RSZWYubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIHRoaXMuX3NlYXJjaFJlZi5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4geyB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVTdGF0dXNCYXJDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgICAgIGlmIChkZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIgJiYgYW5kcm9pZC5mb3JlZ3JvdW5kQWN0aXZpdHkpIHtcbiAgICAgICAgICAgIHZhciBuYXRpdmVDb2xvciA9IG5ldyBDb2xvcihjb2xvcikuYW5kcm9pZDtcbiAgICAgICAgICAgIHZhciB3aW5kb3cgPSBhbmRyb2lkLmZvcmVncm91bmRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcihuYXRpdmVDb2xvcik7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUyLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vaG9tZTIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Nb2R1bGUgfSBmcm9tIFwiLi4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLm1vZHVsZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQWN0aW9uQnV0dG9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgSG9tZUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lMk1vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=