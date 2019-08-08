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

/***/ "./details/details-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRoutingModule", function() { return DetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./details/details.component.ts");



var routes = [
    { path: "", component: _details_component__WEBPACK_IMPORTED_MODULE_2__["DetailsComponent"] }
];
var DetailsRoutingModule = /** @class */ (function () {
    function DetailsRoutingModule() {
    }
    DetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], DetailsRoutingModule);
    return DetailsRoutingModule;
}());



/***/ }),

/***/ "./details/details.component.css":
/***/ (function(module, exports) {

module.exports = ".landmark-name {\n\tvertical-align: center;\n\tfont-size: 22;\n\tcolor: black;\n\tmargin: 16 0;\n}\n\n.landmark-content {\n\tpadding: 0 16;\n\tbackground-color: #ffffff;\n}\n\n.landmark-stat-icon {\n\theight: 24;\n}\n\n.landmark-stat-label {\n\tmargin-left: 6;\n\tmargin-right: 14;\n\tfont-size: 12;\n\tcolor: #909090;\n\tvertical-align: center;\n}\n\n.landmark-description {\n\tvertical-align: center;\n\tfont-size: 15;\n\tcolor: black;\n\tmargin: 16 0;\n}\n\n.landmark-footer {\n\tvertical-align: center;\n\tfont-size: 10;\n\tcolor: #909090;\n\tmargin: 4 0 16 0;\n}\n\n.docked-label-container {\n\tbackground-color: #000000;\n}\n\n.docked-label-text {\n\tmargin: 0 16;\n\tfont-size: 18;\n\tcolor: #909090;\n\tvertical-align: center;\n}\n\n.action-bar-label {\n    font-size: 22;\n    horizontal-align: center;\n    vertical-align: center;\n    color: white;\n}\n\n.action-bar-icon {\n    height: 20;\n    vertical-align: center;\n    margin: 12;\n}"

/***/ }),

/***/ "./details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\" backgroundColor=\"#ffe\">\n\t<NavigationButton visibility=\"collapsed\"></NavigationButton>\n\t<GridLayout columns=\"auto,*,auto\" ios:padding=\"0 10\" height=\"100%\" width=\"100%\">\n\t\t<ActionButton (tap)=\"onTap($event)\" isArrow=\"true\"></ActionButton>\n\t\t<Label col=\"1\" text=\"Discounts\" class=\"action-bar-label\" color=\"black\"></Label>\n\t\t<Image col=\"2\" #search src=\"~/icons/search.png\" tintColor=\"#ffffff\" (loaded)=\"animateOut(search)\" class=\"action-bar-icon\"></Image>\n\t</GridLayout>\n</ActionBar>\n\n<GridLayout>\n\t<ScrollView (scroll)=\"onScroll($event)\">\n\t\t<StackLayout *ngIf=\"landmark\" [minHeight]=\"minHeight\">\n\t\t\t<GridLayout #imageContainer [translateY]=\"offset\" backgroundColor=\"#000000\" class=\"header-background-view\" (loaded)=\"animateIn(imageContainer,300,0)\"\n\t\t\t class=\"landmark-header\">\n\t\t\t\t<Image #image [opacity]=\"imageOpacity\" [src]=\"landmark.image\" stretch=\"aspectFit\"></Image>\n\t\t\t</GridLayout>\n\n\t\t\t<GridLayout #landmarkLayout rows=\"auto,auto,auto,auto\" columns=\"auto,auto,*\" translateY=\"500\" (loaded)=\"animateIn(landmarkLayout,300,150)\"\n\t\t\t class=\"landmark-content\">\n\n\t\t\t\t<Label #title colSpan=\"3\" textWrap=\"true\" [text]=\"landmark.name\" scaleX=\"0.7\" scaleY=\"0.7\" translateX=\"-30\" (loaded)=\"animateIn(title,250,150)\"\n\t\t\t\t class=\"landmark-name\"></Label>\n\n\t\t\t\t<StackLayout #landmarkStat1 row=\"1\" translateY=\"500\" (loaded)=\"animateIn(landmarkStat1,250,350)\" orientation=\"horizontal\">\n\t\t\t\t\t<Image src=\"~/icons/location.png\" class=\"landmark-stat-icon\"></Image>\n\t\t\t\t\t<Label [text]=\"landmark.location\" class=\"landmark-stat-label\"></Label>\n\t\t\t\t</StackLayout>\n\n\t\t\t\t<Label #landmarkDescription row=\"2\" colSpan=\"3\" translateY=\"500\" textWrap=\"true\" [text]=\"landmark.description\" (loaded)=\"animateIn(landmarkDescription,250,500)\"\n\t\t\t\t class=\"landmark-description\"></Label>\n\n\t\t\t\t<Label #landmarkFooter row=\"3\" colSpan=\"3\" translateY=\"500\" textWrap=\"true\" text=\"nationalparktripsmedia.com\" (loaded)=\"animateIn(landmarkFooter,250,500)\"\n\t\t\t\t\tclass=\"landmark-footer\"></Label>\n\n\t\t\t</GridLayout>\n\n\t\t</StackLayout>\n\t</ScrollView>\n\t<GridLayout #dockedLabelContainer verticalAlignment=\"top\" height=\"48\" [opacity]=\"dockedLabelOpacity\" class=\"docked-label-container\">\n\t\t<Label [text]=\"landmark.name\" [opacity]=\"dockedLabelTextOpacity\" class=\"docked-label-text\"></Label>\n\t</GridLayout>\n</GridLayout>"

/***/ }),

/***/ "./details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/enums");
/* harmony import */ var tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/platform");
/* harmony import */ var tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _landmark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./landmark.ts");
/* harmony import */ var _landmarks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./landmarks-service.ts");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./animations-service.ts");







var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(animationsService, landmarksService, routerExtensions) {
        this.animationsService = animationsService;
        this.landmarksService = landmarksService;
        this.routerExtensions = routerExtensions;
        this.imageOpacity = 1;
        this.dockedLabelOpacity = 0;
        this.dockedLabelTextOpacity = 0;
        this.offset = this.animationsService.animationOffset;
        this.landmark = this.landmarksService.getSelected();
    }
    DetailsComponent_1 = DetailsComponent;
    Object.defineProperty(DetailsComponent.prototype, "minHeight", {
        get: function () {
            return tns_core_modules_platform__WEBPACK_IMPORTED_MODULE_3__["screen"].mainScreen.heightDIPs + 2 * DetailsComponent_1.IMAGE_MIN_HEIGHT;
        },
        enumerable: true,
        configurable: true
    });
    DetailsComponent.prototype.animateIn = function (view, duration, delay) {
        view.animate({
            scale: { x: 1, y: 1 },
            translate: { x: 0, y: 0 },
            duration: duration,
            delay: delay,
            curve: tns_core_modules_ui_enums__WEBPACK_IMPORTED_MODULE_2__["AnimationCurve"].easeOut
        }).catch(function () { });
    };
    DetailsComponent.prototype.animateOut = function (view) {
        view.animate({
            opacity: 0,
            duration: 200
        }).catch(function () { });
    };
    DetailsComponent.prototype.onScroll = function (args) {
        var imageContainer = this.imageContainerRef.nativeElement;
        var offset = args.scrollY < 0 ? 0 : args.scrollY;
        var imageHeight = imageContainer.getActualSize().height;
        this.applyImageTransition(offset, imageHeight);
        this.applyTitleTransition(offset, imageHeight);
        this.applyDockHeaderTransition(offset, imageHeight);
    };
    DetailsComponent.prototype.onTap = function (args) {
        this.routerExtensions.back();
    };
    DetailsComponent.prototype.applyImageTransition = function (scrollOffset, imageHeight) {
        var imageContainer = this.imageContainerRef.nativeElement;
        var image = this.imageRef.nativeElement;
        var imageHeightMaxChange = imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT;
        imageContainer.translateY = scrollOffset / 1.5;
        image.scaleX = 1 + scrollOffset / imageHeightMaxChange;
        image.scaleY = 1 + scrollOffset / imageHeightMaxChange;
        this.imageOpacity = 1 - scrollOffset / imageHeightMaxChange;
    };
    DetailsComponent.prototype.applyTitleTransition = function (scrollOffset, imageHeight) {
        var imageHeightMaxChange = imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT;
        var title = this.titleRef.nativeElement;
        if (imageHeightMaxChange < scrollOffset) {
            title.translateX = -(scrollOffset - imageHeightMaxChange) / 1.2;
            title.translateY = -(scrollOffset - imageHeightMaxChange) * 2;
            title.scaleX = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
            title.scaleY = 1 - (scrollOffset - imageHeightMaxChange) / imageHeight;
        }
        else {
            title.translateX = 0;
            title.translateY = 0;
            title.scaleX = 1;
            title.scaleY = 1;
        }
    };
    DetailsComponent.prototype.applyDockHeaderTransition = function (scrollOffset, imageHeight) {
        this.dockedLabelOpacity = this.imageOpacity <= 0 ? 1 : 0;
        this.dockedLabelTextOpacity = (scrollOffset - (imageHeight - DetailsComponent_1.IMAGE_MIN_HEIGHT)) / DetailsComponent_1.IMAGE_MIN_HEIGHT - 0.2;
    };
    var DetailsComponent_1;
    DetailsComponent.IMAGE_MIN_HEIGHT = 48;
    DetailsComponent.ctorParameters = function () { return [
        { type: _animations_service__WEBPACK_IMPORTED_MODULE_6__["AnimationsService"] },
        { type: _landmarks_service__WEBPACK_IMPORTED_MODULE_5__["LandmarksService"] },
        { type: nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _landmark__WEBPACK_IMPORTED_MODULE_4__["Landmark"])
    ], DetailsComponent.prototype, "landmark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "offset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "imageOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "dockedLabelOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DetailsComponent.prototype, "dockedLabelTextOpacity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("imageContainer", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DetailsComponent.prototype, "imageContainerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("image", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DetailsComponent.prototype, "imageRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("title", { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DetailsComponent.prototype, "titleRef", void 0);
    DetailsComponent = DetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Details",
            template: __webpack_require__("./details/details.component.html"),
            styles: [__webpack_require__("./details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_animations_service__WEBPACK_IMPORTED_MODULE_6__["AnimationsService"],
            _landmarks_service__WEBPACK_IMPORTED_MODULE_5__["LandmarksService"],
            nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./details/details.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
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
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./details/details-routing.module.ts");
/* harmony import */ var _details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./details/details.component.ts");
/* harmony import */ var _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./action-button/action-button.module.ts");













var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
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
                _details_routing_module__WEBPACK_IMPORTED_MODULE_10__["DetailsRoutingModule"],
                nativescript_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NativeScriptFormsModule"],
                _action_button_action_button_module__WEBPACK_IMPORTED_MODULE_12__["ActionButtonModule"]
            ],
            declarations: [
                _details_component__WEBPACK_IMPORTED_MODULE_11__["DetailsComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], DetailsModule);
    return DetailsModule;
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

/***/ "./landmark.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landmark", function() { return Landmark; });
var Landmark = /** @class */ (function () {
    function Landmark() {
    }
    return Landmark;
}());



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2RldGFpbHMvZGV0YWlscy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2xhbmRtYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0NBQWdDLGNBQWMsZUFBZSxpQkFBaUIsR0FBRyxXQUFXLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLEM7Ozs7Ozs7QUNBbEwsK2E7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEY7QUFVOUY7SUFVQztRQU5lLFFBQUcsR0FBbUMsSUFBSSwwREFBWSxFQUFvQixDQUFDO0lBTzFGLENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sSUFBc0I7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxPQUFhLEVBQUMsT0FBZTtRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZixNQUFNLEVBQUUsQ0FBQyxFQUFFO29CQUNYLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDeEIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQzFCLFFBQVEsRUFBRSxHQUFHO2lCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakM7U0FDRDthQUFNO1lBQ04sT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNyQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN0QixPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0YsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBYSxPQUFhLEVBQUMsT0FBZTtRQUN6QyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQztvQkFDZixNQUFNLEVBQUUsQ0FBQztvQkFDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ3ZCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDekIsUUFBUSxFQUFFLEdBQUc7aUJBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQztTQUNEO2FBQU07WUFDTixPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNyQixPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNGLENBQUM7SUFFRCw0Q0FBWSxHQUFaLFVBQWEsT0FBYSxFQUFFLE9BQWU7UUFDMUMsSUFBSSxPQUFPLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLENBQUM7b0JBQ2YsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO29CQUN4QixTQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO29CQUMzQixRQUFRLEVBQUUsR0FBRztpQkFDYixDQUFDLENBQUMsS0FBSyxDQUFDLGNBQVEsQ0FBQyxDQUFDLENBQUM7YUFDcEI7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Q7YUFBTTtZQUNOLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRCxrREFBa0IsR0FBbEIsVUFBbUIsT0FBYTtRQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2YsTUFBTSxFQUFFLENBQUM7WUFDVCxLQUFLLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDckIsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxHQUFHO1NBQ2IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQXhGaUI7UUFBakIsMkRBQUssQ0FBQyxTQUFTLENBQUM7OzBEQUFrQjtJQUVwQjtRQUFkLDREQUFNLENBQUMsS0FBSyxDQUFDO2tDQUFNLDBEQUFZO3NEQUEwRDtJQUVwRDtRQUFyQywrREFBUyxDQUFDLFNBQVMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBYyx3REFBVTs4REFBQztJQUN0QjtRQUF2QywrREFBUyxDQUFDLFlBQVksRUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBaUIsd0RBQVU7aUVBQUM7SUFDM0I7UUFBdkMsK0RBQVMsQ0FBQyxZQUFZLEVBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQWlCLHdEQUFVO2lFQUFDO0lBUnZELHFCQUFxQjtRQU5qQywrREFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFFeEIsNkVBQTZDOztTQUU3QyxDQUFDOztPQUNXLHFCQUFxQixDQTJGakM7SUFBRCw0QkFBQztDQUFBO0FBM0ZpQzs7Ozs7Ozs7O0FDVmxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDWTtBQUNhO0FBQ0o7QUFDQTtBQUNOO0FBQ007QUFDZ0I7QUFDdEI7QUFDTDtBQUNIO0FBd0JsRTtJQUFBO0lBQWtDLENBQUM7SUFBdEIsa0JBQWtCO1FBdEI5Qiw4REFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFO2dCQUNSLGlHQUE4QjtnQkFDOUIsNkZBQTRCO2dCQUM1Qiw2RkFBNEI7Z0JBQzVCLHVGQUF5QjtnQkFDekIsNkZBQTRCO2dCQUM1Qiw2R0FBd0M7Z0JBQ3hDLHVGQUF5QjtnQkFDekIsb0ZBQXdCO2dCQUN4QixrRkFBdUI7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsK0VBQXFCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNSLCtFQUFxQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDUiw4REFBZ0I7YUFDaEI7U0FDRCxDQUFDO09BQ1csa0JBQWtCLENBQUk7SUFBRCx5QkFBQztDQUFBO0FBQUo7Ozs7Ozs7OztBQ2xDL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFFOEI7QUFFaEI7QUFFdkQsSUFBTSxNQUFNLEdBQVc7SUFDdEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxtRUFBZ0IsRUFBRTtDQUN6QyxDQUFDO0FBTUY7SUFBQTtJQUFvQyxDQUFDO0lBQXhCLG9CQUFvQjtRQUpoQyw4REFBUSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUMsb0ZBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BELE9BQU8sRUFBRSxDQUFDLG9GQUF3QixDQUFDO1NBQ25DLENBQUM7T0FDVyxvQkFBb0IsQ0FBSTtJQUFELDJCQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7QUNkakMsa0NBQWtDLDJCQUEyQixrQkFBa0IsaUJBQWlCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsOEJBQThCLEdBQUcseUJBQXlCLGVBQWUsR0FBRywwQkFBMEIsbUJBQW1CLHFCQUFxQixrQkFBa0IsbUJBQW1CLDJCQUEyQixHQUFHLDJCQUEyQiwyQkFBMkIsa0JBQWtCLGlCQUFpQixpQkFBaUIsR0FBRyxzQkFBc0IsMkJBQTJCLGtCQUFrQixtQkFBbUIscUJBQXFCLEdBQUcsNkJBQTZCLDhCQUE4QixHQUFHLHdCQUF3QixpQkFBaUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsR0FBRyx1QkFBdUIsb0JBQW9CLCtCQUErQiw2QkFBNkIsbUJBQW1CLEdBQUcsc0JBQXNCLGlCQUFpQiw2QkFBNkIsaUJBQWlCLEdBQUcsQzs7Ozs7OztBQ0F4OEIscWhGOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdFO0FBQ0U7QUFFZjtBQUdSO0FBQ1o7QUFDaUI7QUFDRTtBQVExRDtJQVdDLDBCQUFvQixpQkFBb0MsRUFDL0MsZ0JBQWtDLEVBQ2xDLGdCQUFrQztRQUZ2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQy9DLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVZsQyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUN6Qix1QkFBa0IsR0FBVyxDQUFDLENBQUM7UUFDL0IsMkJBQXNCLEdBQVcsQ0FBQyxDQUFDO1FBVTNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDO3lCQWpCVyxnQkFBZ0I7SUFtQjVCLHNCQUFJLHVDQUFTO2FBQWI7WUFDQyxPQUFPLGdFQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsa0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDN0UsQ0FBQzs7O09BQUE7SUFFRCxvQ0FBUyxHQUFULFVBQVUsSUFBVSxFQUFFLFFBQWdCLEVBQUUsS0FBYTtRQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3JCLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN6QixRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsS0FBSztZQUNaLEtBQUssRUFBRSx3RUFBYyxDQUFDLE9BQU87U0FDN0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxxQ0FBVSxHQUFWLFVBQVcsSUFBVTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osT0FBTyxFQUFFLENBQUM7WUFDVixRQUFRLEVBQUUsR0FBRztTQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsbUNBQVEsR0FBUixVQUFTLElBQXFCO1FBQzdCLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUM7UUFFMUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNqRCxJQUFJLFdBQVcsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRXhELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sSUFBc0I7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTywrQ0FBb0IsR0FBNUIsVUFBNkIsWUFBb0IsRUFBRSxXQUFtQjtRQUNyRSxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDO1FBQzFELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksb0JBQW9CLEdBQUcsV0FBVyxHQUFHLGtCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBRTNFLGNBQWMsQ0FBQyxVQUFVLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUMvQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxZQUFZLEdBQUcsb0JBQW9CLENBQUM7UUFDdkQsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUFHLG9CQUFvQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLFlBQVksR0FBRyxvQkFBb0IsQ0FBQztJQUM3RCxDQUFDO0lBRU8sK0NBQW9CLEdBQTVCLFVBQTZCLFlBQW9CLEVBQUUsV0FBbUI7UUFDckUsSUFBSSxvQkFBb0IsR0FBRyxXQUFXLEdBQUcsa0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7UUFFeEMsSUFBSSxvQkFBb0IsR0FBRyxZQUFZLEVBQUU7WUFDeEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFHLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2hFLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RCxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLFdBQVcsQ0FBQztZQUN2RSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUN2RTthQUFNO1lBQ04sS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDckIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDakIsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDRixDQUFDO0lBRU8sb0RBQXlCLEdBQWpDLFVBQWtDLFlBQW9CLEVBQUUsV0FBbUI7UUFDMUUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxXQUFXLEdBQUcsa0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLGtCQUFnQixDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUM1SSxDQUFDOztJQTdFTSxpQ0FBZ0IsR0FBRyxFQUFFLENBQUM7O2dCQUVVLHFFQUFpQjtnQkFDN0IsbUVBQWdCO2dCQUNoQiw0RUFBZ0I7O0lBWmxDO1FBQVIsMkRBQUssRUFBRTtrQ0FBVyxrREFBUTtzREFBQztJQUNuQjtRQUFSLDJEQUFLLEVBQUU7O29EQUFnQjtJQUNmO1FBQVIsMkRBQUssRUFBRTs7MERBQTBCO0lBQ3pCO1FBQVIsMkRBQUssRUFBRTs7Z0VBQWdDO0lBQy9CO1FBQVIsMkRBQUssRUFBRTs7b0VBQW9DO0lBQ0E7UUFBM0MsK0RBQVMsQ0FBQyxnQkFBZ0IsRUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBb0Isd0RBQVU7K0RBQUM7SUFDdkM7UUFBbEMsK0RBQVMsQ0FBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQVcsd0RBQVU7c0RBQUM7SUFDckI7UUFBbEMsK0RBQVMsQ0FBQyxPQUFPLEVBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7a0NBQVcsd0RBQVU7c0RBQUM7SUFSNUMsZ0JBQWdCO1FBTjVCLCtEQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUVuQixpRUFBdUM7O1NBRXZDLENBQUM7eUNBWXNDLHFFQUFpQjtZQUM3QixtRUFBZ0I7WUFDaEIsNEVBQWdCO09BYi9CLGdCQUFnQixDQXVGNUI7SUFBRCx1QkFBQztDQUFBO0FBdkY0Qjs7Ozs7Ozs7O0FDakI3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRDtBQUNZO0FBQ2E7QUFDSjtBQUNBO0FBQ047QUFDTTtBQUNnQjtBQUN0QjtBQUNMO0FBRUw7QUFDVDtBQUNvQjtBQXVCM0U7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFyQnpCLDhEQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsaUdBQThCO2dCQUM5Qiw2RkFBNEI7Z0JBQzVCLDZGQUE0QjtnQkFDNUIsdUZBQXlCO2dCQUN6Qiw2RkFBNEI7Z0JBQzVCLDZHQUF3QztnQkFDeEMsdUZBQXlCO2dCQUN6QixvRkFBd0I7Z0JBQ3hCLDZFQUFvQjtnQkFDcEIsa0ZBQXVCO2dCQUN2Qix1RkFBa0I7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ2Isb0VBQWdCO2FBQ2hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNSLDhEQUFnQjthQUNoQjtTQUNELENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBO0FBQUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQzFCO0FBQUE7QUFBQTtJQUFBO0lBUUEsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUFDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiLm1haW4tbGF5b3V0IHtcXG5cXHR3aWR0aDogMjQ7XFxuXFx0aGVpZ2h0OiAyNDtcXG5cXHRwYWRkaW5nOiA0IDI7XFxufVxcblxcbi5saW5lIHtcXG4gICAgaGVpZ2h0OiAyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXHRtYXJnaW46IDUgMTtcXG5cXHRib3JkZXItcmFkaXVzOiAxO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCAodGFwKT1cXFwib25UYXAoJGV2ZW50KVxcXCIgcm93cz1cXFwiKiwqLCpcXFwiIGNsYXNzPVxcXCJtYWluLWxheW91dFxcXCI+XFxuXFx0PFN0YWNrTGF5b3V0ICNsaW5lVG9wIHJvdz1cXFwiMFxcXCIgKGxvYWRlZCk9XFxcInVwZGF0ZVRvcChsaW5lVG9wLHRydWUpXFxcIiBjbGFzcz1cXFwibGluZVxcXCI+PC9TdGFja0xheW91dD5cXG5cXHQ8U3RhY2tMYXlvdXQgI2xpbmVDZW50ZXIgcm93PVxcXCIxXFxcIiAobG9hZGVkKT1cXFwidXBkYXRlQ2VudGVyKGxpbmVDZW50ZXIsdHJ1ZSlcXFwiIGNsYXNzPVxcXCJsaW5lXFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdDxTdGFja0xheW91dCAjbGluZUJvdHRvbSByb3c9XFxcIjJcXFwiIChsb2FkZWQpPVxcXCJ1cGRhdGVCb3R0b20obGluZUJvdHRvbSx0cnVlKVxcXCIgY2xhc3M9XFxcImxpbmVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuPC9HcmlkTGF5b3V0PlwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBHZXN0dXJlRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkFjdGlvbkJ1dHRvblwiLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uQ29tcG9uZW50IHtcblxuXHRASW5wdXQoJ2lzQXJyb3cnKSBpc0Fycm93OiBib29sZWFuO1xuXG5cdEBPdXRwdXQoXCJ0YXBcIikgdGFwOiBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPEdlc3R1cmVFdmVudERhdGE+KCk7XG5cblx0QFZpZXdDaGlsZChcImxpbmVUb3BcIiwge3N0YXRpYzogdHJ1ZX0pIF9saW5lVG9wUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwibGluZUNlbnRlclwiLHtzdGF0aWM6IHRydWV9KSBfbGluZUNlbnRlclJlZjogRWxlbWVudFJlZjtcblx0QFZpZXdDaGlsZChcImxpbmVCb3R0b21cIix7c3RhdGljOiB0cnVlfSkgX2xpbmVCb3R0b21SZWY6IEVsZW1lbnRSZWY7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRvblRhcChhcmdzOiBHZXN0dXJlRXZlbnREYXRhKSB7XG5cdFx0dGhpcy50YXAubmV4dChhcmdzKTtcblx0fVxuXG5cdHVwZGF0ZVRvcChlbGVtZW50OiBWaWV3LGFuaW1hdGU6Ym9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiAtNDUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC40NSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogMyB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IC00NTtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC40NTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IC01O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gMztcblx0XHR9XG5cdH1cblxuXHR1cGRhdGVDZW50ZXIoZWxlbWVudDogVmlldyxhbmltYXRlOmJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogMCxcblx0XHRcdFx0XHRzY2FsZTogeyB4OiAwLjksIHk6IDEgfSxcblx0XHRcdFx0XHR0cmFuc2xhdGU6IHsgeDogMSwgeTogMCB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IDA7XG5cdFx0XHRlbGVtZW50LnNjYWxlWCA9IDAuOTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IDE7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVkgPSAwO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUJvdHRvbShlbGVtZW50OiBWaWV3LCBhbmltYXRlOmJvb2xlYW4pIHtcblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0aWYgKHRoaXMuaXNBcnJvdykge1xuXHRcdFx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0XHRcdHJvdGF0ZTogNDUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgeDogMC40NSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAtNSwgeTogLTMgfSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwXG5cdFx0XHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVUb0hhbWJ1cmdlcihlbGVtZW50KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5yb3RhdGUgPSA0NTtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC40NTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWCA9IC01O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVZID0gLTM7XG5cdFx0fVxuXHR9XG5cblx0YW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQ6IFZpZXcpIHtcblx0XHRlbGVtZW50LmFuaW1hdGUoe1xuXHRcdFx0cm90YXRlOiAwLFxuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcblx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHR9XG5cblx0bWFrZUFycm93KCkge1xuXHRcdHRoaXMudXBkYXRlVG9wKHRoaXMuX2xpbmVUb3BSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlQ2VudGVyKHRoaXMuX2xpbmVDZW50ZXJSZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHRcdHRoaXMudXBkYXRlQm90dG9tKHRoaXMuX2xpbmVCb3R0b21SZWYubmF0aXZlRWxlbWVudCwgZmFsc2UpO1xuXHR9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQWN0aW9uQnV0dG9uQ29tcG9uZW50IH0gZnJvbSBcIi4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0QWN0aW9uQnV0dG9uQ29tcG9uZW50XG5cdF0sXG5cdGV4cG9ydHM6IFtcblx0XHRBY3Rpb25CdXR0b25Db21wb25lbnRcblx0XSxcblx0c2NoZW1hczogW1xuXHRcdE5PX0VSUk9SU19TQ0hFTUFcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25Nb2R1bGUgeyB9IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG5cdHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBEZXRhaWxzQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG5cdGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNSb3V0aW5nTW9kdWxlIHsgfSIsIm1vZHVsZS5leHBvcnRzID0gXCIubGFuZG1hcmstbmFtZSB7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDIyO1xcblxcdGNvbG9yOiBibGFjaztcXG5cXHRtYXJnaW46IDE2IDA7XFxufVxcblxcbi5sYW5kbWFyay1jb250ZW50IHtcXG5cXHRwYWRkaW5nOiAwIDE2O1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5sYW5kbWFyay1zdGF0LWljb24ge1xcblxcdGhlaWdodDogMjQ7XFxufVxcblxcbi5sYW5kbWFyay1zdGF0LWxhYmVsIHtcXG5cXHRtYXJnaW4tbGVmdDogNjtcXG5cXHRtYXJnaW4tcmlnaHQ6IDE0O1xcblxcdGZvbnQtc2l6ZTogMTI7XFxuXFx0Y29sb3I6ICM5MDkwOTA7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmxhbmRtYXJrLWRlc2NyaXB0aW9uIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTU7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdG1hcmdpbjogMTYgMDtcXG59XFxuXFxuLmxhbmRtYXJrLWZvb3RlciB7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEwO1xcblxcdGNvbG9yOiAjOTA5MDkwO1xcblxcdG1hcmdpbjogNCAwIDE2IDA7XFxufVxcblxcbi5kb2NrZWQtbGFiZWwtY29udGFpbmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xcbn1cXG5cXG4uZG9ja2VkLWxhYmVsLXRleHQge1xcblxcdG1hcmdpbjogMCAxNjtcXG5cXHRmb250LXNpemU6IDE4O1xcblxcdGNvbG9yOiAjOTA5MDkwO1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hY3Rpb24tYmFyLWxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAyMjtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hY3Rpb24tYmFyLWljb24ge1xcbiAgICBoZWlnaHQ6IDIwO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IDEyO1xcbn1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiNmZmVcXFwiPlxcblxcdDxOYXZpZ2F0aW9uQnV0dG9uIHZpc2liaWxpdHk9XFxcImNvbGxhcHNlZFxcXCI+PC9OYXZpZ2F0aW9uQnV0dG9uPlxcblxcdDxHcmlkTGF5b3V0IGNvbHVtbnM9XFxcImF1dG8sKixhdXRvXFxcIiBpb3M6cGFkZGluZz1cXFwiMCAxMFxcXCIgaGVpZ2h0PVxcXCIxMDAlXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCI+XFxuXFx0XFx0PEFjdGlvbkJ1dHRvbiAodGFwKT1cXFwib25UYXAoJGV2ZW50KVxcXCIgaXNBcnJvdz1cXFwidHJ1ZVxcXCI+PC9BY3Rpb25CdXR0b24+XFxuXFx0XFx0PExhYmVsIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiRGlzY291bnRzXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1sYWJlbFxcXCIgY29sb3I9XFxcImJsYWNrXFxcIj48L0xhYmVsPlxcblxcdFxcdDxJbWFnZSBjb2w9XFxcIjJcXFwiICNzZWFyY2ggc3JjPVxcXCJ+L2ljb25zL3NlYXJjaC5wbmdcXFwiIHRpbnRDb2xvcj1cXFwiI2ZmZmZmZlxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVPdXQoc2VhcmNoKVxcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXItaWNvblxcXCI+PC9JbWFnZT5cXG5cXHQ8L0dyaWRMYXlvdXQ+XFxuPC9BY3Rpb25CYXI+XFxuXFxuPEdyaWRMYXlvdXQ+XFxuXFx0PFNjcm9sbFZpZXcgKHNjcm9sbCk9XFxcIm9uU2Nyb2xsKCRldmVudClcXFwiPlxcblxcdFxcdDxTdGFja0xheW91dCAqbmdJZj1cXFwibGFuZG1hcmtcXFwiIFttaW5IZWlnaHRdPVxcXCJtaW5IZWlnaHRcXFwiPlxcblxcdFxcdFxcdDxHcmlkTGF5b3V0ICNpbWFnZUNvbnRhaW5lciBbdHJhbnNsYXRlWV09XFxcIm9mZnNldFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjMDAwMDAwXFxcIiBjbGFzcz1cXFwiaGVhZGVyLWJhY2tncm91bmQtdmlld1xcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbihpbWFnZUNvbnRhaW5lciwzMDAsMClcXFwiXFxuXFx0XFx0XFx0IGNsYXNzPVxcXCJsYW5kbWFyay1oZWFkZXJcXFwiPlxcblxcdFxcdFxcdFxcdDxJbWFnZSAjaW1hZ2UgW29wYWNpdHldPVxcXCJpbWFnZU9wYWNpdHlcXFwiIFtzcmNdPVxcXCJsYW5kbWFyay5pbWFnZVxcXCIgc3RyZXRjaD1cXFwiYXNwZWN0Rml0XFxcIj48L0ltYWdlPlxcblxcdFxcdFxcdDwvR3JpZExheW91dD5cXG5cXG5cXHRcXHRcXHQ8R3JpZExheW91dCAjbGFuZG1hcmtMYXlvdXQgcm93cz1cXFwiYXV0byxhdXRvLGF1dG8sYXV0b1xcXCIgY29sdW1ucz1cXFwiYXV0byxhdXRvLCpcXFwiIHRyYW5zbGF0ZVk9XFxcIjUwMFxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbihsYW5kbWFya0xheW91dCwzMDAsMTUwKVxcXCJcXG5cXHRcXHRcXHQgY2xhc3M9XFxcImxhbmRtYXJrLWNvbnRlbnRcXFwiPlxcblxcblxcdFxcdFxcdFxcdDxMYWJlbCAjdGl0bGUgY29sU3Bhbj1cXFwiM1xcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIFt0ZXh0XT1cXFwibGFuZG1hcmsubmFtZVxcXCIgc2NhbGVYPVxcXCIwLjdcXFwiIHNjYWxlWT1cXFwiMC43XFxcIiB0cmFuc2xhdGVYPVxcXCItMzBcXFwiIChsb2FkZWQpPVxcXCJhbmltYXRlSW4odGl0bGUsMjUwLDE1MClcXFwiXFxuXFx0XFx0XFx0XFx0IGNsYXNzPVxcXCJsYW5kbWFyay1uYW1lXFxcIj48L0xhYmVsPlxcblxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCAjbGFuZG1hcmtTdGF0MSByb3c9XFxcIjFcXFwiIHRyYW5zbGF0ZVk9XFxcIjUwMFxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbihsYW5kbWFya1N0YXQxLDI1MCwzNTApXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwifi9pY29ucy9sb2NhdGlvbi5wbmdcXFwiIGNsYXNzPVxcXCJsYW5kbWFyay1zdGF0LWljb25cXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIFt0ZXh0XT1cXFwibGFuZG1hcmsubG9jYXRpb25cXFwiIGNsYXNzPVxcXCJsYW5kbWFyay1zdGF0LWxhYmVsXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0XFx0XFx0PExhYmVsICNsYW5kbWFya0Rlc2NyaXB0aW9uIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgdHJhbnNsYXRlWT1cXFwiNTAwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJsYW5kbWFyay5kZXNjcmlwdGlvblxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbihsYW5kbWFya0Rlc2NyaXB0aW9uLDI1MCw1MDApXFxcIlxcblxcdFxcdFxcdFxcdCBjbGFzcz1cXFwibGFuZG1hcmstZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuXFxuXFx0XFx0XFx0XFx0PExhYmVsICNsYW5kbWFya0Zvb3RlciByb3c9XFxcIjNcXFwiIGNvbFNwYW49XFxcIjNcXFwiIHRyYW5zbGF0ZVk9XFxcIjUwMFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIm5hdGlvbmFscGFya3RyaXBzbWVkaWEuY29tXFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZUluKGxhbmRtYXJrRm9vdGVyLDI1MCw1MDApXFxcIlxcblxcdFxcdFxcdFxcdFxcdGNsYXNzPVxcXCJsYW5kbWFyay1mb290ZXJcXFwiPjwvTGFiZWw+XFxuXFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFx0PC9TY3JvbGxWaWV3PlxcblxcdDxHcmlkTGF5b3V0ICNkb2NrZWRMYWJlbENvbnRhaW5lciB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiBoZWlnaHQ9XFxcIjQ4XFxcIiBbb3BhY2l0eV09XFxcImRvY2tlZExhYmVsT3BhY2l0eVxcXCIgY2xhc3M9XFxcImRvY2tlZC1sYWJlbC1jb250YWluZXJcXFwiPlxcblxcdFxcdDxMYWJlbCBbdGV4dF09XFxcImxhbmRtYXJrLm5hbWVcXFwiIFtvcGFjaXR5XT1cXFwiZG9ja2VkTGFiZWxUZXh0T3BhY2l0eVxcXCIgY2xhc3M9XFxcImRvY2tlZC1sYWJlbC10ZXh0XFxcIj48L0xhYmVsPlxcblxcdDwvR3JpZExheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4uL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2xhbmRtYXJrcy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9hbmltYXRpb25zLXNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRldGFpbHNcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQge1xuXHRASW5wdXQoKSBsYW5kbWFyazogTGFuZG1hcms7XG5cdEBJbnB1dCgpIG9mZnNldDogbnVtYmVyO1xuXHRASW5wdXQoKSBpbWFnZU9wYWNpdHk6IG51bWJlciA9IDE7XG5cdEBJbnB1dCgpIGRvY2tlZExhYmVsT3BhY2l0eTogbnVtYmVyID0gMDtcblx0QElucHV0KCkgZG9ja2VkTGFiZWxUZXh0T3BhY2l0eTogbnVtYmVyID0gMDtcblx0QFZpZXdDaGlsZChcImltYWdlQ29udGFpbmVyXCIse3N0YXRpYzogdHJ1ZX0pIGltYWdlQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiaW1hZ2VcIix7c3RhdGljOiB0cnVlfSkgaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJ0aXRsZVwiLHtzdGF0aWM6IHRydWV9KSB0aXRsZVJlZjogRWxlbWVudFJlZjtcblx0c3RhdGljIElNQUdFX01JTl9IRUlHSFQgPSA0ODtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1hdGlvbnNTZXJ2aWNlOiBBbmltYXRpb25zU2VydmljZSxcblx0XHRwcml2YXRlIGxhbmRtYXJrc1NlcnZpY2U6IExhbmRtYXJrc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cdFx0XHRcblx0XHR0aGlzLm9mZnNldCA9IHRoaXMuYW5pbWF0aW9uc1NlcnZpY2UuYW5pbWF0aW9uT2Zmc2V0O1xuXHRcdHRoaXMubGFuZG1hcmsgPSB0aGlzLmxhbmRtYXJrc1NlcnZpY2UuZ2V0U2VsZWN0ZWQoKTtcblx0fVxuXG5cdGdldCBtaW5IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgKyAyICogRGV0YWlsc0NvbXBvbmVudC5JTUFHRV9NSU5fSEVJR0hUO1xuXHR9XG5cblx0YW5pbWF0ZUluKHZpZXc6IFZpZXcsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpIHtcblx0XHR2aWV3LmFuaW1hdGUoe1xuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdGRlbGF5OiBkZWxheSxcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG5cdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0fVxuXG5cdGFuaW1hdGVPdXQodmlldzogVmlldykge1xuXHRcdHZpZXcuYW5pbWF0ZSh7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdH1cblxuXHRvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcblx0XHRsZXQgaW1hZ2VDb250YWluZXIgPSB0aGlzLmltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XG5cdFx0bGV0IG9mZnNldCA9IGFyZ3Muc2Nyb2xsWSA8IDAgPyAwIDogYXJncy5zY3JvbGxZO1xuXHRcdGxldCBpbWFnZUhlaWdodCA9IGltYWdlQ29udGFpbmVyLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG5cblx0XHR0aGlzLmFwcGx5SW1hZ2VUcmFuc2l0aW9uKG9mZnNldCwgaW1hZ2VIZWlnaHQpO1xuXHRcdHRoaXMuYXBwbHlUaXRsZVRyYW5zaXRpb24ob2Zmc2V0LCBpbWFnZUhlaWdodCk7XG5cdFx0dGhpcy5hcHBseURvY2tIZWFkZXJUcmFuc2l0aW9uKG9mZnNldCwgaW1hZ2VIZWlnaHQpO1xuXHR9XG5cblx0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGx5SW1hZ2VUcmFuc2l0aW9uKHNjcm9sbE9mZnNldDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyKSB7XG5cdFx0bGV0IGltYWdlQ29udGFpbmVyID0gdGhpcy5pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGxldCBpbWFnZSA9IHRoaXMuaW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblxuXHRcdGltYWdlQ29udGFpbmVyLnRyYW5zbGF0ZVkgPSBzY3JvbGxPZmZzZXQgLyAxLjU7XG5cdFx0aW1hZ2Uuc2NhbGVYID0gMSArIHNjcm9sbE9mZnNldCAvIGltYWdlSGVpZ2h0TWF4Q2hhbmdlO1xuXHRcdGltYWdlLnNjYWxlWSA9IDEgKyBzY3JvbGxPZmZzZXQgLyBpbWFnZUhlaWdodE1heENoYW5nZTtcblx0XHR0aGlzLmltYWdlT3BhY2l0eSA9IDEgLSBzY3JvbGxPZmZzZXQgLyBpbWFnZUhlaWdodE1heENoYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgYXBwbHlUaXRsZVRyYW5zaXRpb24oc2Nyb2xsT2Zmc2V0OiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpIHtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLnRpdGxlUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHRpZiAoaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPCBzY3JvbGxPZmZzZXQpIHtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVggPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIDEuMjtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVkgPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAqIDI7XG5cdFx0XHR0aXRsZS5zY2FsZVggPSAxIC0gKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIGltYWdlSGVpZ2h0O1xuXHRcdFx0dGl0bGUuc2NhbGVZID0gMSAtIChzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgLyBpbWFnZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGl0bGUudHJhbnNsYXRlWCA9IDA7XG5cdFx0XHR0aXRsZS50cmFuc2xhdGVZID0gMDtcblx0XHRcdHRpdGxlLnNjYWxlWCA9IDE7XG5cdFx0XHR0aXRsZS5zY2FsZVkgPSAxO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXBwbHlEb2NrSGVhZGVyVHJhbnNpdGlvbihzY3JvbGxPZmZzZXQ6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxPcGFjaXR5ID0gdGhpcy5pbWFnZU9wYWNpdHkgPD0gMCA/IDEgOiAwO1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxUZXh0T3BhY2l0eSA9IChzY3JvbGxPZmZzZXQgLSAoaW1hZ2VIZWlnaHQgLSBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQpKSAvIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVCAtIDAuMjtcblx0fVxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgRGV0YWlsc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kZXRhaWxzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdERldGFpbHNSb3V0aW5nTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdEFjdGlvbkJ1dHRvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREZXRhaWxzQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc01vZHVsZSB7IH0iLCJleHBvcnQgY2xhc3MgTGFuZG1hcmsge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIGxpa2VzOiBudW1iZXI7XG4gICAgY29tbWVudHM6IG51bWJlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9