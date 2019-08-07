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

module.exports = "<ActionBar class=\"action-bar\" backgroundColor=\"#ffe\">\n\t<NavigationButton visibility=\"collapsed\"></NavigationButton>\n\t<GridLayout columns=\"auto,*,auto\" ios:padding=\"0 10\" height=\"100%\" width=\"100%\">\n\t\t<ActionButton (tap)=\"onTap($event)\" isArrow=\"true\"></ActionButton>\n\t\t<Label col=\"1\" text=\"Discounts\" class=\"action-bar-label\" color=\"black\"></Label>\n\t\t<Image col=\"2\" #search src=\"~/icons/search.png\" tintColor=\"#ffffff\" (loaded)=\"animateOut(search)\" class=\"action-bar-icon\"></Image>\n\t</GridLayout>\n</ActionBar>\n\n<GridLayout>\n\t<ScrollView (scroll)=\"onScroll($event)\">\n\t\t<StackLayout *ngIf=\"landmark\" [minHeight]=\"minHeight\">\n\t\t\t<GridLayout #imageContainer [translateY]=\"offset\" backgroundColor=\"#000000\" class=\"header-background-view\" (loaded)=\"animateIn(imageContainer,300,0)\"\n\t\t\t class=\"landmark-header\">\n\t\t\t\t<Image #image [opacity]=\"imageOpacity\" [src]=\"landmark.image\" stretch=\"aspectFit\"></Image>\n\t\t\t</GridLayout>\n\n\t\t\t<GridLayout #landmarkLayout rows=\"auto,auto,auto,auto\" columns=\"auto,auto,*\" translateY=\"500\" (loaded)=\"animateIn(landmarkLayout,300,150)\"\n\t\t\t class=\"landmark-content\">\n\n\t\t\t\t<Label #title colSpan=\"3\" textWrap=\"true\" [text]=\"landmark.name\" scaleX=\"0.7\" scaleY=\"0.7\" translateX=\"-30\" (loaded)=\"animateIn(title,250,150)\"\n\t\t\t\t class=\"landmark-name\"></Label>\n\n\t\t\t\t<StackLayout #landmarkStat1 row=\"1\" translateY=\"500\" (loaded)=\"animateIn(landmarkStat1,250,350)\" orientation=\"horizontal\">\n\t\t\t\t\t<Image src=\"~/icons/location.png\" class=\"landmark-stat-icon\"></Image>\n\t\t\t\t\t<Label [text]=\"landmark.location\" class=\"landmark-stat-label\"></Label>\n\t\t\t\t</StackLayout>\n\n\t\t\t\t<StackLayout #landmarkStat2 row=\"1\" col=\"1\" translateY=\"500\" (loaded)=\"animateIn(landmarkStat2,250,400)\" orientation=\"horizontal\">\n\t\t\t\t\t<Image src=\"~/icons/likes.png\" class=\"landmark-stat-icon\"></Image>\n\t\t\t\t\t<Label text=\"{{ landmark.likes }} Likes\" class=\"landmark-stat-label\"></Label>\n\t\t\t\t</StackLayout>\n\n\t\t\t\t<StackLayout #landmarkStat3 row=\"1\" col=\"2\" translateY=\"500\" (loaded)=\"animateIn(landmarkStat3,250,450)\" orientation=\"horizontal\">\n\t\t\t\t\t<Image src=\"~/icons/comments.png\" class=\"landmark-stat-icon\"></Image>\n\t\t\t\t\t<Label text=\"{{ landmark.comments }} Comments\" class=\"landmark-stat-label\"></Label>\n\t\t\t\t</StackLayout>\n\n\t\t\t\t<Label #landmarkDescription row=\"2\" colSpan=\"3\" translateY=\"500\" textWrap=\"true\" [text]=\"landmark.description\" (loaded)=\"animateIn(landmarkDescription,250,500)\"\n\t\t\t\t class=\"landmark-description\"></Label>\n\n\t\t\t\t<Label #landmarkFooter row=\"3\" colSpan=\"3\" translateY=\"500\" textWrap=\"true\" text=\"nationalparktripsmedia.com\" (loaded)=\"animateIn(landmarkFooter,250,500)\"\n\t\t\t\t\tclass=\"landmark-footer\"></Label>\n\n\t\t\t</GridLayout>\n\n\t\t</StackLayout>\n\t</ScrollView>\n\t<GridLayout #dockedLabelContainer verticalAlignment=\"top\" height=\"48\" [opacity]=\"dockedLabelOpacity\" class=\"docked-label-container\">\n\t\t<Label [text]=\"landmark.name\" [opacity]=\"dockedLabelTextOpacity\" class=\"docked-label-text\"></Label>\n\t</GridLayout>\n</GridLayout>"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2RldGFpbHMvZGV0YWlscy1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9kZXRhaWxzL2RldGFpbHMubW9kdWxlLnRzIiwid2VicGFjazovLy8uL2xhbmRtYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0NBQWdDLGNBQWMsZUFBZSxpQkFBaUIsR0FBRyxXQUFXLGdCQUFnQiw4QkFBOEIsZ0JBQWdCLHFCQUFxQixHQUFHLEM7Ozs7Ozs7QUNBbEwsK2E7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEY7QUFVOUY7SUFVQztRQU5lLFFBQUcsR0FBbUMsSUFBSSwwREFBWSxFQUFvQixDQUFDO0lBTzFGLENBQUM7SUFFRCxxQ0FBSyxHQUFMLFVBQU0sSUFBc0I7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxPQUFhLEVBQUMsT0FBZTtRQUN0QyxJQUFJLE9BQU8sRUFBRTtZQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDakIsT0FBTyxD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RUFBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztrQ0FBVyx3REFBVTtzREFBQztJQVI1QyxnQkFBZ0I7UUFONUIsK0RBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxTQUFTO1lBRW5CLGlFQUF1Qzs7U0FFdkMsQ0FBQzt5Q0FZc0MscUVBQWlCO1lBQzdCLG1FQUFnQjtZQUNoQiw0RUFBZ0I7T0FiL0IsZ0JBQWdCLENBdUY1QjtJQUFELHVCQUFDO0NBQUE7QUF2RjRCOzs7Ozs7Ozs7QUNqQjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJEO0FBQ1k7QUFDYTtBQUNKO0FBQ0E7QUFDTjtBQUNNO0FBQ2dCO0FBQ3RCO0FBQ0w7QUFFTDtBQUNUO0FBQ29CO0FBdUIzRTtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQXJCekIsOERBQVEsQ0FBQztZQUNULE9BQU8sRUFBRTtnQkFDUixpR0FBOEI7Z0JBQzlCLDZGQUE0QjtnQkFDNUIsNkZBQTRCO2dCQUM1Qix1RkFBeUI7Z0JBQ3pCLDZGQUE0QjtnQkFDNUIsNkdBQXdDO2dCQUN4Qyx1RkFBeUI7Z0JBQ3pCLG9GQUF3QjtnQkFDeEIsNkVBQW9CO2dCQUNwQixrRkFBdUI7Z0JBQ3ZCLHVGQUFrQjthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDYixvRUFBZ0I7YUFDaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1IsOERBQWdCO2FBQ2hCO1NBQ0QsQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUE7QUFBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDMUI7QUFBQTtBQUFBO0lBQUE7SUFRQSxDQUFDO0lBQUQsZUFBQztBQUFELENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIubWFpbi1sYXlvdXQge1xcblxcdHdpZHRoOiAyNDtcXG5cXHRoZWlnaHQ6IDI0O1xcblxcdHBhZGRpbmc6IDQgMjtcXG59XFxuXFxuLmxpbmUge1xcbiAgICBoZWlnaHQ6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdG1hcmdpbjogNSAxO1xcblxcdGJvcmRlci1yYWRpdXM6IDE7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxHcmlkTGF5b3V0ICh0YXApPVxcXCJvblRhcCgkZXZlbnQpXFxcIiByb3dzPVxcXCIqLCosKlxcXCIgY2xhc3M9XFxcIm1haW4tbGF5b3V0XFxcIj5cXG5cXHQ8U3RhY2tMYXlvdXQgI2xpbmVUb3Agcm93PVxcXCIwXFxcIiAobG9hZGVkKT1cXFwidXBkYXRlVG9wKGxpbmVUb3AsdHJ1ZSlcXFwiIGNsYXNzPVxcXCJsaW5lXFxcIj48L1N0YWNrTGF5b3V0PlxcblxcdDxTdGFja0xheW91dCAjbGluZUNlbnRlciByb3c9XFxcIjFcXFwiIChsb2FkZWQpPVxcXCJ1cGRhdGVDZW50ZXIobGluZUNlbnRlcix0cnVlKVxcXCIgY2xhc3M9XFxcImxpbmVcXFwiPjwvU3RhY2tMYXlvdXQ+XFxuXFx0PFN0YWNrTGF5b3V0ICNsaW5lQm90dG9tIHJvdz1cXFwiMlxcXCIgKGxvYWRlZCk9XFxcInVwZGF0ZUJvdHRvbShsaW5lQm90dG9tLHRydWUpXFxcIiBjbGFzcz1cXFwibGluZVxcXCI+PC9TdGFja0xheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEdlc3R1cmVFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6IFwiQWN0aW9uQnV0dG9uXCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWN0aW9uLWJ1dHRvbi5jb21wb25lbnQuaHRtbFwiLFxuXHRzdHlsZVVybHM6IFsnLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXR0b25Db21wb25lbnQge1xuXG5cdEBJbnB1dCgnaXNBcnJvdycpIGlzQXJyb3c6IGJvb2xlYW47XG5cblx0QE91dHB1dChcInRhcFwiKSB0YXA6IEV2ZW50RW1pdHRlcjxHZXN0dXJlRXZlbnREYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8R2VzdHVyZUV2ZW50RGF0YT4oKTtcblxuXHRAVmlld0NoaWxkKFwibGluZVRvcFwiLCB7c3RhdGljOiB0cnVlfSkgX2xpbmVUb3BSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJsaW5lQ2VudGVyXCIse3N0YXRpYzogdHJ1ZX0pIF9saW5lQ2VudGVyUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwibGluZUJvdHRvbVwiLHtzdGF0aWM6IHRydWV9KSBfbGluZUJvdHRvbVJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdG9uVGFwKGFyZ3M6IEdlc3R1cmVFdmVudERhdGEpIHtcblx0XHR0aGlzLnRhcC5uZXh0KGFyZ3MpO1xuXHR9XG5cblx0dXBkYXRlVG9wKGVsZW1lbnQ6IFZpZXcsYW5pbWF0ZTpib29sZWFuKSB7XG5cdFx0aWYgKGFuaW1hdGUpIHtcblx0XHRcdGlmICh0aGlzLmlzQXJyb3cpIHtcblx0XHRcdFx0ZWxlbWVudC5hbmltYXRlKHtcblx0XHRcdFx0XHRyb3RhdGU6IC00NSxcblx0XHRcdFx0XHRzY2FsZTogeyB4OiAwLjQ1LCB5OiAxIH0sXG5cdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IC01LCB5OiAzIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gLTQ1O1xuXHRcdFx0ZWxlbWVudC5zY2FsZVggPSAwLjQ1O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gLTU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVkgPSAzO1xuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZUNlbnRlcihlbGVtZW50OiBWaWV3LGFuaW1hdGU6Ym9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiAwLFxuXHRcdFx0XHRcdHNjYWxlOiB7IHg6IDAuOSwgeTogMSB9LFxuXHRcdFx0XHRcdHRyYW5zbGF0ZTogeyB4OiAxLCB5OiAwIH0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdFx0XHR9KS5jYXRjaCgoKSA9PiB7IH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5hbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW1lbnQucm90YXRlID0gMDtcblx0XHRcdGVsZW1lbnQuc2NhbGVYID0gMC45O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gMTtcblx0XHRcdGVsZW1lbnQudHJhbnNsYXRlWSA9IDA7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlQm90dG9tKGVsZW1lbnQ6IFZpZXcsIGFuaW1hdGU6Ym9vbGVhbikge1xuXHRcdGlmIChhbmltYXRlKSB7XG5cdFx0XHRpZiAodGhpcy5pc0Fycm93KSB7XG5cdFx0XHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRcdFx0cm90YXRlOiA0NSxcblx0XHRcdFx0XHRzY2FsZTogeyB4OiAwLjQ1LCB5OiAxIH0sXG5cdFx0XHRcdFx0dHJhbnNsYXRlOiB7IHg6IC01LCB5OiAtMyB9LFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAyMDBcblx0XHRcdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZVRvSGFtYnVyZ2VyKGVsZW1lbnQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnJvdGF0ZSA9IDQ1O1xuXHRcdFx0ZWxlbWVudC5zY2FsZVggPSAwLjQ1O1xuXHRcdFx0ZWxlbWVudC50cmFuc2xhdGVYID0gLTU7XG5cdFx0XHRlbGVtZW50LnRyYW5zbGF0ZVkgPSAtMztcblx0XHR9XG5cdH1cblxuXHRhbmltYXRlVG9IYW1idXJnZXIoZWxlbWVudDogVmlldykge1xuXHRcdGVsZW1lbnQuYW5pbWF0ZSh7XG5cdFx0XHRyb3RhdGU6IDAsXG5cdFx0XHRzY2FsZTogeyB4OiAxLCB5OiAxIH0sXG5cdFx0XHR0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LFxuXHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdH1cblxuXHRtYWtlQXJyb3coKSB7XG5cdFx0dGhpcy51cGRhdGVUb3AodGhpcy5fbGluZVRvcFJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG5cdFx0dGhpcy51cGRhdGVDZW50ZXIodGhpcy5fbGluZUNlbnRlclJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG5cdFx0dGhpcy51cGRhdGVCb3R0b20odGhpcy5fbGluZUJvdHRvbVJlZi5uYXRpdmVFbGVtZW50LCBmYWxzZSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBBY3Rpb25CdXR0b25Db21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpb24tYnV0dG9uLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRBY3Rpb25CdXR0b25Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEFjdGlvbkJ1dHRvbkNvbXBvbmVudFxuXHRdLFxuXHRzY2hlbWFzOiBbXG5cdFx0Tk9fRVJST1JTX1NDSEVNQVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1dHRvbk1vZHVsZSB7IH0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWxzLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcblx0eyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IERldGFpbHNDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcblx0ZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc1JvdXRpbmdNb2R1bGUgeyB9IiwibW9kdWxlLmV4cG9ydHMgPSBcIi5sYW5kbWFyay1uYW1lIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMjI7XFxuXFx0Y29sb3I6IGJsYWNrO1xcblxcdG1hcmdpbjogMTYgMDtcXG59XFxuXFxuLmxhbmRtYXJrLWNvbnRlbnQge1xcblxcdHBhZGRpbmc6IDAgMTY7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLmxhbmRtYXJrLXN0YXQtaWNvbiB7XFxuXFx0aGVpZ2h0OiAyNDtcXG59XFxuXFxuLmxhbmRtYXJrLXN0YXQtbGFiZWwge1xcblxcdG1hcmdpbi1sZWZ0OiA2O1xcblxcdG1hcmdpbi1yaWdodDogMTQ7XFxuXFx0Zm9udC1zaXplOiAxMjtcXG5cXHRjb2xvcjogIzkwOTA5MDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGFuZG1hcmstZGVzY3JpcHRpb24ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxNTtcXG5cXHRjb2xvcjogYmxhY2s7XFxuXFx0bWFyZ2luOiAxNiAwO1xcbn1cXG5cXG4ubGFuZG1hcmstZm9vdGVyIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMTA7XFxuXFx0Y29sb3I6ICM5MDkwOTA7XFxuXFx0bWFyZ2luOiA0IDAgMTYgMDtcXG59XFxuXFxuLmRvY2tlZC1sYWJlbC1jb250YWluZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi5kb2NrZWQtbGFiZWwtdGV4dCB7XFxuXFx0bWFyZ2luOiAwIDE2O1xcblxcdGZvbnQtc2l6ZTogMTg7XFxuXFx0Y29sb3I6ICM5MDkwOTA7XFxuXFx0dmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFjdGlvbi1iYXItbGFiZWwge1xcbiAgICBmb250LXNpemU6IDIyO1xcbiAgICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFjdGlvbi1iYXItaWNvbiB7XFxuICAgIGhlaWdodDogMjA7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTI7XFxufVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI2ZmZVxcXCI+XFxuXFx0PE5hdmlnYXRpb25CdXR0b24gdmlzaWJpbGl0eT1cXFwiY29sbGFwc2VkXFxcIj48L05hdmlnYXRpb25CdXR0b24+XFxuXFx0PEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiYXV0bywqLGF1dG9cXFwiIGlvczpwYWRkaW5nPVxcXCIwIDEwXFxcIiBoZWlnaHQ9XFxcIjEwMCVcXFwiIHdpZHRoPVxcXCIxMDAlXFxcIj5cXG5cXHRcXHQ8QWN0aW9uQnV0dG9uICh0YXApPVxcXCJvblRhcCgkZXZlbnQpXFxcIiBpc0Fycm93PVxcXCJ0cnVlXFxcIj48L0FjdGlvbkJ1dHRvbj5cXG5cXHRcXHQ8TGFiZWwgY29sPVxcXCIxXFxcIiB0ZXh0PVxcXCJEaXNjb3VudHNcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyLWxhYmVsXFxcIiBjb2xvcj1cXFwiYmxhY2tcXFwiPjwvTGFiZWw+XFxuXFx0XFx0PEltYWdlIGNvbD1cXFwiMlxcXCIgI3NlYXJjaCBzcmM9XFxcIn4vaWNvbnMvc2VhcmNoLnBuZ1xcXCIgdGludENvbG9yPVxcXCIjZmZmZmZmXFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZU91dChzZWFyY2gpXFxcIiBjbGFzcz1cXFwiYWN0aW9uLWJhci1pY29uXFxcIj48L0ltYWdlPlxcblxcdDwvR3JpZExheW91dD5cXG48L0FjdGlvbkJhcj5cXG5cXG48R3JpZExheW91dD5cXG5cXHQ8U2Nyb2xsVmlldyAoc2Nyb2xsKT1cXFwib25TY3JvbGwoJGV2ZW50KVxcXCI+XFxuXFx0XFx0PFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCJsYW5kbWFya1xcXCIgW21pbkhlaWdodF09XFxcIm1pbkhlaWdodFxcXCI+XFxuXFx0XFx0XFx0PEdyaWRMYXlvdXQgI2ltYWdlQ29udGFpbmVyIFt0cmFuc2xhdGVZXT1cXFwib2Zmc2V0XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcIiMwMDAwMDBcXFwiIGNsYXNzPVxcXCJoZWFkZXItYmFja2dyb3VuZC12aWV3XFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZUluKGltYWdlQ29udGFpbmVyLDMwMCwwKVxcXCJcXG5cXHRcXHRcXHQgY2xhc3M9XFxcImxhbmRtYXJrLWhlYWRlclxcXCI+XFxuXFx0XFx0XFx0XFx0PEltYWdlICNpbWFnZSBbb3BhY2l0eV09XFxcImltYWdlT3BhY2l0eVxcXCIgW3NyY109XFxcImxhbmRtYXJrLmltYWdlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaXRcXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdFxcdDxHcmlkTGF5b3V0ICNsYW5kbWFya0xheW91dCByb3dzPVxcXCJhdXRvLGF1dG8sYXV0byxhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLGF1dG8sKlxcXCIgdHJhbnNsYXRlWT1cXFwiNTAwXFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZUluKGxhbmRtYXJrTGF5b3V0LDMwMCwxNTApXFxcIlxcblxcdFxcdFxcdCBjbGFzcz1cXFwibGFuZG1hcmstY29udGVudFxcXCI+XFxuXFxuXFx0XFx0XFx0XFx0PExhYmVsICN0aXRsZSBjb2xTcGFuPVxcXCIzXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJsYW5kbWFyay5uYW1lXFxcIiBzY2FsZVg9XFxcIjAuN1xcXCIgc2NhbGVZPVxcXCIwLjdcXFwiIHRyYW5zbGF0ZVg9XFxcIi0zMFxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbih0aXRsZSwyNTAsMTUwKVxcXCJcXG5cXHRcXHRcXHRcXHQgY2xhc3M9XFxcImxhbmRtYXJrLW5hbWVcXFwiPjwvTGFiZWw+XFxuXFxuXFx0XFx0XFx0XFx0PFN0YWNrTGF5b3V0ICNsYW5kbWFya1N0YXQxIHJvdz1cXFwiMVxcXCIgdHJhbnNsYXRlWT1cXFwiNTAwXFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZUluKGxhbmRtYXJrU3RhdDEsMjUwLDM1MClcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2ljb25zL2xvY2F0aW9uLnBuZ1xcXCIgY2xhc3M9XFxcImxhbmRtYXJrLXN0YXQtaWNvblxcXCI+PC9JbWFnZT5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgW3RleHRdPVxcXCJsYW5kbWFyay5sb2NhdGlvblxcXCIgY2xhc3M9XFxcImxhbmRtYXJrLXN0YXQtbGFiZWxcXFwiPjwvTGFiZWw+XFxuXFx0XFx0XFx0XFx0PC9TdGFja0xheW91dD5cXG5cXG5cXHRcXHRcXHRcXHQ8U3RhY2tMYXlvdXQgI2xhbmRtYXJrU3RhdDIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIHRyYW5zbGF0ZVk9XFxcIjUwMFxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbihsYW5kbWFya1N0YXQyLDI1MCw0MDApXFxcIiBvcmllbnRhdGlvbj1cXFwiaG9yaXpvbnRhbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PEltYWdlIHNyYz1cXFwifi9pY29ucy9saWtlcy5wbmdcXFwiIGNsYXNzPVxcXCJsYW5kbWFyay1zdGF0LWljb25cXFwiPjwvSW1hZ2U+XFxuXFx0XFx0XFx0XFx0XFx0PExhYmVsIHRleHQ9XFxcInt7IGxhbmRtYXJrLmxpa2VzIH19IExpa2VzXFxcIiBjbGFzcz1cXFwibGFuZG1hcmstc3RhdC1sYWJlbFxcXCI+PC9MYWJlbD5cXG5cXHRcXHRcXHRcXHQ8L1N0YWNrTGF5b3V0PlxcblxcblxcdFxcdFxcdFxcdDxTdGFja0xheW91dCAjbGFuZG1hcmtTdGF0MyByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgdHJhbnNsYXRlWT1cXFwiNTAwXFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZUluKGxhbmRtYXJrU3RhdDMsMjUwLDQ1MClcXFwiIG9yaWVudGF0aW9uPVxcXCJob3Jpem9udGFsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHQ8SW1hZ2Ugc3JjPVxcXCJ+L2ljb25zL2NvbW1lbnRzLnBuZ1xcXCIgY2xhc3M9XFxcImxhbmRtYXJrLXN0YXQtaWNvblxcXCI+PC9JbWFnZT5cXG5cXHRcXHRcXHRcXHRcXHQ8TGFiZWwgdGV4dD1cXFwie3sgbGFuZG1hcmsuY29tbWVudHMgfX0gQ29tbWVudHNcXFwiIGNsYXNzPVxcXCJsYW5kbWFyay1zdGF0LWxhYmVsXFxcIj48L0xhYmVsPlxcblxcdFxcdFxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFxuXFx0XFx0XFx0XFx0PExhYmVsICNsYW5kbWFya0Rlc2NyaXB0aW9uIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiM1xcXCIgdHJhbnNsYXRlWT1cXFwiNTAwXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgW3RleHRdPVxcXCJsYW5kbWFyay5kZXNjcmlwdGlvblxcXCIgKGxvYWRlZCk9XFxcImFuaW1hdGVJbihsYW5kbWFya0Rlc2NyaXB0aW9uLDI1MCw1MDApXFxcIlxcblxcdFxcdFxcdFxcdCBjbGFzcz1cXFwibGFuZG1hcmstZGVzY3JpcHRpb25cXFwiPjwvTGFiZWw+XFxuXFxuXFx0XFx0XFx0XFx0PExhYmVsICNsYW5kbWFya0Zvb3RlciByb3c9XFxcIjNcXFwiIGNvbFNwYW49XFxcIjNcXFwiIHRyYW5zbGF0ZVk9XFxcIjUwMFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIHRleHQ9XFxcIm5hdGlvbmFscGFya3RyaXBzbWVkaWEuY29tXFxcIiAobG9hZGVkKT1cXFwiYW5pbWF0ZUluKGxhbmRtYXJrRm9vdGVyLDI1MCw1MDApXFxcIlxcblxcdFxcdFxcdFxcdFxcdGNsYXNzPVxcXCJsYW5kbWFyay1mb290ZXJcXFwiPjwvTGFiZWw+XFxuXFxuXFx0XFx0XFx0PC9HcmlkTGF5b3V0PlxcblxcblxcdFxcdDwvU3RhY2tMYXlvdXQ+XFxuXFx0PC9TY3JvbGxWaWV3PlxcblxcdDxHcmlkTGF5b3V0ICNkb2NrZWRMYWJlbENvbnRhaW5lciB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiBoZWlnaHQ9XFxcIjQ4XFxcIiBbb3BhY2l0eV09XFxcImRvY2tlZExhYmVsT3BhY2l0eVxcXCIgY2xhc3M9XFxcImRvY2tlZC1sYWJlbC1jb250YWluZXJcXFwiPlxcblxcdFxcdDxMYWJlbCBbdGV4dF09XFxcImxhbmRtYXJrLm5hbWVcXFwiIFtvcGFjaXR5XT1cXFwiZG9ja2VkTGFiZWxUZXh0T3BhY2l0eVxcXCIgY2xhc3M9XFxcImRvY2tlZC1sYWJlbC10ZXh0XFxcIj48L0xhYmVsPlxcblxcdDwvR3JpZExheW91dD5cXG48L0dyaWRMYXlvdXQ+XCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZVJvdXRlLCBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCI7XG5pbXBvcnQgeyBTY3JvbGxFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IExhbmRtYXJrIH0gZnJvbSBcIi4uL2xhbmRtYXJrXCI7XG5pbXBvcnQgeyBMYW5kbWFya3NTZXJ2aWNlIH0gZnJvbSBcIi4uL2xhbmRtYXJrcy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBbmltYXRpb25zU2VydmljZSB9IGZyb20gXCIuLi9hbmltYXRpb25zLXNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkRldGFpbHNcIixcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6IFwiLi9kZXRhaWxzLmNvbXBvbmVudC5odG1sXCIsXG5cdHN0eWxlVXJsczogWycuL2RldGFpbHMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERldGFpbHNDb21wb25lbnQge1xuXHRASW5wdXQoKSBsYW5kbWFyazogTGFuZG1hcms7XG5cdEBJbnB1dCgpIG9mZnNldDogbnVtYmVyO1xuXHRASW5wdXQoKSBpbWFnZU9wYWNpdHk6IG51bWJlciA9IDE7XG5cdEBJbnB1dCgpIGRvY2tlZExhYmVsT3BhY2l0eTogbnVtYmVyID0gMDtcblx0QElucHV0KCkgZG9ja2VkTGFiZWxUZXh0T3BhY2l0eTogbnVtYmVyID0gMDtcblx0QFZpZXdDaGlsZChcImltYWdlQ29udGFpbmVyXCIse3N0YXRpYzogdHJ1ZX0pIGltYWdlQ29udGFpbmVyUmVmOiBFbGVtZW50UmVmO1xuXHRAVmlld0NoaWxkKFwiaW1hZ2VcIix7c3RhdGljOiB0cnVlfSkgaW1hZ2VSZWY6IEVsZW1lbnRSZWY7XG5cdEBWaWV3Q2hpbGQoXCJ0aXRsZVwiLHtzdGF0aWM6IHRydWV9KSB0aXRsZVJlZjogRWxlbWVudFJlZjtcblx0c3RhdGljIElNQUdFX01JTl9IRUlHSFQgPSA0ODtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFuaW1hdGlvbnNTZXJ2aWNlOiBBbmltYXRpb25zU2VydmljZSxcblx0XHRwcml2YXRlIGxhbmRtYXJrc1NlcnZpY2U6IExhbmRtYXJrc1NlcnZpY2UsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG5cdFx0XHRcblx0XHR0aGlzLm9mZnNldCA9IHRoaXMuYW5pbWF0aW9uc1NlcnZpY2UuYW5pbWF0aW9uT2Zmc2V0O1xuXHRcdHRoaXMubGFuZG1hcmsgPSB0aGlzLmxhbmRtYXJrc1NlcnZpY2UuZ2V0U2VsZWN0ZWQoKTtcblx0fVxuXG5cdGdldCBtaW5IZWlnaHQoKSB7XG5cdFx0cmV0dXJuIHNjcmVlbi5tYWluU2NyZWVuLmhlaWdodERJUHMgKyAyICogRGV0YWlsc0NvbXBvbmVudC5JTUFHRV9NSU5fSEVJR0hUO1xuXHR9XG5cblx0YW5pbWF0ZUluKHZpZXc6IFZpZXcsIGR1cmF0aW9uOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpIHtcblx0XHR2aWV3LmFuaW1hdGUoe1xuXHRcdFx0c2NhbGU6IHsgeDogMSwgeTogMSB9LFxuXHRcdFx0dHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSxcblx0XHRcdGR1cmF0aW9uOiBkdXJhdGlvbixcblx0XHRcdGRlbGF5OiBkZWxheSxcblx0XHRcdGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5lYXNlT3V0XG5cdFx0fSkuY2F0Y2goKCkgPT4geyB9KTtcblx0fVxuXG5cdGFuaW1hdGVPdXQodmlldzogVmlldykge1xuXHRcdHZpZXcuYW5pbWF0ZSh7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0ZHVyYXRpb246IDIwMFxuXHRcdH0pLmNhdGNoKCgpID0+IHsgfSk7XG5cdH1cblxuXHRvblNjcm9sbChhcmdzOiBTY3JvbGxFdmVudERhdGEpIHtcblx0XHRsZXQgaW1hZ2VDb250YWluZXIgPSB0aGlzLmltYWdlQ29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cdFx0XG5cdFx0bGV0IG9mZnNldCA9IGFyZ3Muc2Nyb2xsWSA8IDAgPyAwIDogYXJncy5zY3JvbGxZO1xuXHRcdGxldCBpbWFnZUhlaWdodCA9IGltYWdlQ29udGFpbmVyLmdldEFjdHVhbFNpemUoKS5oZWlnaHQ7XG5cblx0XHR0aGlzLmFwcGx5SW1hZ2VUcmFuc2l0aW9uKG9mZnNldCwgaW1hZ2VIZWlnaHQpO1xuXHRcdHRoaXMuYXBwbHlUaXRsZVRyYW5zaXRpb24ob2Zmc2V0LCBpbWFnZUhlaWdodCk7XG5cdFx0dGhpcy5hcHBseURvY2tIZWFkZXJUcmFuc2l0aW9uKG9mZnNldCwgaW1hZ2VIZWlnaHQpO1xuXHR9XG5cblx0b25UYXAoYXJnczogR2VzdHVyZUV2ZW50RGF0YSkge1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cblxuXHRwcml2YXRlIGFwcGx5SW1hZ2VUcmFuc2l0aW9uKHNjcm9sbE9mZnNldDogbnVtYmVyLCBpbWFnZUhlaWdodDogbnVtYmVyKSB7XG5cdFx0bGV0IGltYWdlQ29udGFpbmVyID0gdGhpcy5pbWFnZUNvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50O1xuXHRcdGxldCBpbWFnZSA9IHRoaXMuaW1hZ2VSZWYubmF0aXZlRWxlbWVudDtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblxuXHRcdGltYWdlQ29udGFpbmVyLnRyYW5zbGF0ZVkgPSBzY3JvbGxPZmZzZXQgLyAxLjU7XG5cdFx0aW1hZ2Uuc2NhbGVYID0gMSArIHNjcm9sbE9mZnNldCAvIGltYWdlSGVpZ2h0TWF4Q2hhbmdlO1xuXHRcdGltYWdlLnNjYWxlWSA9IDEgKyBzY3JvbGxPZmZzZXQgLyBpbWFnZUhlaWdodE1heENoYW5nZTtcblx0XHR0aGlzLmltYWdlT3BhY2l0eSA9IDEgLSBzY3JvbGxPZmZzZXQgLyBpbWFnZUhlaWdodE1heENoYW5nZTtcblx0fVxuXG5cdHByaXZhdGUgYXBwbHlUaXRsZVRyYW5zaXRpb24oc2Nyb2xsT2Zmc2V0OiBudW1iZXIsIGltYWdlSGVpZ2h0OiBudW1iZXIpIHtcblx0XHRsZXQgaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPSBpbWFnZUhlaWdodCAtIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVDtcblx0XHRsZXQgdGl0bGUgPSB0aGlzLnRpdGxlUmVmLm5hdGl2ZUVsZW1lbnQ7XG5cblx0XHRpZiAoaW1hZ2VIZWlnaHRNYXhDaGFuZ2UgPCBzY3JvbGxPZmZzZXQpIHtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVggPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIDEuMjtcblx0XHRcdHRpdGxlLnRyYW5zbGF0ZVkgPSAtKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAqIDI7XG5cdFx0XHR0aXRsZS5zY2FsZVggPSAxIC0gKHNjcm9sbE9mZnNldCAtIGltYWdlSGVpZ2h0TWF4Q2hhbmdlKSAvIGltYWdlSGVpZ2h0O1xuXHRcdFx0dGl0bGUuc2NhbGVZID0gMSAtIChzY3JvbGxPZmZzZXQgLSBpbWFnZUhlaWdodE1heENoYW5nZSkgLyBpbWFnZUhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGl0bGUudHJhbnNsYXRlWCA9IDA7XG5cdFx0XHR0aXRsZS50cmFuc2xhdGVZID0gMDtcblx0XHRcdHRpdGxlLnNjYWxlWCA9IDE7XG5cdFx0XHR0aXRsZS5zY2FsZVkgPSAxO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgYXBwbHlEb2NrSGVhZGVyVHJhbnNpdGlvbihzY3JvbGxPZmZzZXQ6IG51bWJlciwgaW1hZ2VIZWlnaHQ6IG51bWJlcikge1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxPcGFjaXR5ID0gdGhpcy5pbWFnZU9wYWNpdHkgPD0gMCA/IDEgOiAwO1xuXHRcdHRoaXMuZG9ja2VkTGFiZWxUZXh0T3BhY2l0eSA9IChzY3JvbGxPZmZzZXQgLSAoaW1hZ2VIZWlnaHQgLSBEZXRhaWxzQ29tcG9uZW50LklNQUdFX01JTl9IRUlHSFQpKSAvIERldGFpbHNDb21wb25lbnQuSU1BR0VfTUlOX0hFSUdIVCAtIDAuMjtcblx0fVxufSIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jYWxlbmRhci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1jaGFydC9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1hdXRvY29tcGxldGUvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZ2F1Z2UvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHsgRGV0YWlsc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kZXRhaWxzLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFjdGlvbkJ1dHRvbk1vZHVsZSB9IGZyb20gXCIuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24ubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHROYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuXHRcdERldGFpbHNSb3V0aW5nTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdEFjdGlvbkJ1dHRvbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHREZXRhaWxzQ29tcG9uZW50XG5cdF0sXG5cdHNjaGVtYXM6IFtcblx0XHROT19FUlJPUlNfU0NIRU1BXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRGV0YWlsc01vZHVsZSB7IH0iLCJleHBvcnQgY2xhc3MgTGFuZG1hcmsge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW1hZ2U6IHN0cmluZztcbiAgICBsb2NhdGlvbjogc3RyaW5nO1xuICAgIGxpa2VzOiBudW1iZXI7XG4gICAgY29tbWVudHM6IG51bWJlcjtcbn0iXSwic291cmNlUm9vdCI6IiJ9