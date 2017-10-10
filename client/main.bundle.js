webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_input_max_input_max_component__ = __webpack_require__("../../../../../src/app/components/input-max/input-max.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_input_reps_input_reps_component__ = __webpack_require__("../../../../../src/app/components/input-reps/input-reps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_weight_service__ = __webpack_require__("../../../../../src/app/services/weight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'max', component: __WEBPACK_IMPORTED_MODULE_8__components_input_max_input_max_component__["a" /* InputMaxComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'work', component: __WEBPACK_IMPORTED_MODULE_9__components_input_reps_input_reps_component__["a" /* InputRepsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_input_max_input_max_component__["a" /* InputMaxComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_input_reps_input_reps_component__["a" /* InputRepsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__services_weight_service__["a" /* WeightService */],
                __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.main {\n    padding: 5%;\n}\n\na.main {\n  font-size: 400%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">{{username}}'S WORKOUT</h1>\n<div class=\"row\">\n  <div class=\"text-center main\">\n    <a class=\"btn btn-info main\" (click)=deadlift()>Deadlift</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"text-center main\">\n    <a class=\"btn btn-info main\" (click)=bench()>Bench</a>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"text-center main\">\n    <a class=\"btn btn-info main\" (click)=squat()>Squat</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_weight_service__ = __webpack_require__("../../../../../src/app/services/weight.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(router, weightService) {
        this.router = router;
        this.weightService = weightService;
        this.username = JSON.parse(localStorage.getItem('user')).username.toUpperCase();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.deadlift = function () {
        localStorage.setItem('exercise', 'deadlift');
        this.navigate();
    };
    HomeComponent.prototype.bench = function () {
        localStorage.setItem('exercise', 'bench');
        this.navigate();
    };
    HomeComponent.prototype.squat = function () {
        localStorage.setItem('exercise', 'squat');
        this.navigate();
    };
    HomeComponent.prototype.navigate = function () {
        var _this = this;
        var max;
        var currentWeight;
        var currentReps;
        this.weightService.getMax().subscribe(function (data) {
            if (data.success)
                max = data.max;
            else
                max = 0;
            _this.weightService.getCurrent().subscribe(function (datum) {
                console.log(datum.current);
                if (data.success) {
                    currentWeight = datum.current.weight;
                    currentReps = datum.current.reps;
                }
                else {
                    currentWeight = 0;
                    currentReps = 0;
                }
                if (max == 0 || (currentWeight >= max * .8 && currentReps >= 8)) {
                    _this.router.navigate(['/max']);
                }
                else {
                    _this.router.navigate(['/work']);
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_weight_service__["a" /* WeightService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_weight_service__["a" /* WeightService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/input-max/input-max.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.main {\n  max-width: 6ch;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/input-max/input-max.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">{{exercise}}</h1>\n<h3 class=\"text-center\">It's Time to Max</h3>\n<h3><form autocomplete=\"off\">\n  <div class=\"form-group text-center\">\n    <label>Current Max: {{currentMax}}</label>\n  </div>\n  <div class=\"form-group text-center\">\n    <label>New Max: </label>\n    <input type=\"text\" [(ngModel)]=\"newMax\" name=\"newMax\" class=\"main\" maxlength=\"4\">\n  </div>\n  <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-success\" (click)=addMax()>Submit</button>     \n  </div>\n</form></h3>\n"

/***/ }),

/***/ "../../../../../src/app/components/input-max/input-max.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputMaxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weight_service__ = __webpack_require__("../../../../../src/app/services/weight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputMaxComponent = (function () {
    function InputMaxComponent(weightService, flashMessage, router) {
        this.weightService = weightService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.load();
    }
    InputMaxComponent.prototype.ngOnInit = function () { };
    InputMaxComponent.prototype.load = function () {
        var _this = this;
        this.weightService.getMax().subscribe(function (data) {
            if (data.success) {
                _this.currentMax = data.max;
            }
            else {
                _this.currentMax = '0';
            }
        });
        this.exercise = localStorage.getItem('exercise').toUpperCase();
    };
    InputMaxComponent.prototype.addMax = function () {
        var _this = this;
        this.weightService.addMax(this.newMax).subscribe(function (data) {
            if (data.success) {
                _this.weightService.addCurrent((parseInt(_this.newMax) * .7).toString(), '-1').subscribe(function (datum) {
                    //this.flashMessage.show(datum.msg, {cssClass:'alert-success text-center', timeout:3000});
                });
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success text-center', timeout: 3000 });
                _this.router.navigate(['/']);
                return true;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger text-center', timeout: 3000 });
                return false;
            }
        });
    };
    InputMaxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-max',
            template: __webpack_require__("../../../../../src/app/components/input-max/input-max.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/input-max/input-max.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weight_service__["a" /* WeightService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_weight_service__["a" /* WeightService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], InputMaxComponent);
    return InputMaxComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/input-max.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/input-reps/input-reps.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.main {\n  max-width: 6ch;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/input-reps/input-reps.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header text-center\">{{exercise}}</h1>\n<h3 class=\"text-center\">Working Sets: 3x5</h3>\n<h3><form autocomplete=\"off\">\n  <div class=\"form-group text-center\">\n    <label>{{workingWeight}}</label>\n  </div>\n  <div class=\"form-group text-center\">\n    <label>AMAP: </label>\n    <input type=\"text\" [(ngModel)]=\"reps\" name=\"reps\" class=\"main\" maxlength=\"4\">\n  </div>\n  <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-success\" (click)=addCurrent()>Submit</button>     \n  </div>\n</form></h3>\n"

/***/ }),

/***/ "../../../../../src/app/components/input-reps/input-reps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputRepsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weight_service__ = __webpack_require__("../../../../../src/app/services/weight.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputRepsComponent = (function () {
    function InputRepsComponent(weightService, flashMessage, router) {
        var _this = this;
        this.weightService = weightService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.exercise = localStorage.getItem('exercise').toUpperCase();
        this.weightService.getCurrent().subscribe(function (data) {
            _this.calculateWorkingWeight(parseInt(data.current.weight), parseInt(data.current.reps));
        });
    }
    InputRepsComponent.prototype.ngOnInit = function () {
    };
    InputRepsComponent.prototype.calculateWorkingWeight = function (previousWeight, previousReps) {
        if (previousReps >= 0 && previousReps <= 5) {
            this.workingWeight = (previousWeight * .975).toString();
        }
        else if (previousReps >= 8) {
            this.workingWeight = (previousWeight * 1.025).toString();
        }
        else {
            this.workingWeight = previousWeight.toString();
        }
    };
    InputRepsComponent.prototype.addCurrent = function () {
        var _this = this;
        this.weightService.addCurrent(this.workingWeight, this.reps).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-success text-center', timeout: 3000 });
                _this.router.navigate(['/']);
                return true;
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger text-center', timeout: 3000 });
                return false;
            }
        });
    };
    InputRepsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input-reps',
            template: __webpack_require__("../../../../../src/app/components/input-reps/input-reps.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/input-reps/input-reps.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_weight_service__["a" /* WeightService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_weight_service__["a" /* WeightService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], InputRepsComponent);
    return InputRepsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/input-reps.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.main {\n  max-width: 50ch;\n  margin-left: auto;\n  margin-right: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h2 class=\"page-header\">Infinite Off-Season Calculator</h2>\n</div>\n<form autocomplete=\"off\">\n  <div class=\"text-center form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control main\" maxlength=\"46\">\n  </div>\n  <div class=\"text-center form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control main\" maxlength=\"46\">\n  </div>\n  <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-success\" (click)=login()>Login</button>\n    <button type=\"submit\" class=\"btn btn-success\" (click)=register()>Create</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    LoginComponent.prototype.getUser = function () {
        var user = {
            username: this.username,
            password: this.password
        };
        return user;
    };
    LoginComponent.prototype.validate = function (user) {
        if (!this.validateService.validateLogin(user)) {
            this.flashMessage.show('Please fill out all fields', { cssClass: 'alert-danger text-center', timeout: 3000 });
            return false;
        }
        return true;
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        var user = this.getUser();
        if (this.validate(user)) {
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('New User Creation Successful', { cssClass: 'alert-success text-center', timeout: 3000 });
                    _this.login();
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger text-center', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var user = this.getUser();
        if (this.validate(user)) {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.router.navigate(['/']);
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger text-center', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/weight.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeightService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeightService = (function () {
    function WeightService(http) {
        this.http = http;
        this.authToken = localStorage.getItem('token');
        this.user_id = JSON.parse(localStorage.getItem('user')).id;
    }
    WeightService.prototype.getMax = function () {
        this.exercise = localStorage.getItem('exercise');
        var query = { 'user_id': this.user_id, 'exercise': this.exercise };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('weights/getMax', query, { headers: headers }).map(function (res) { return res.json(); });
    };
    WeightService.prototype.addMax = function (weight) {
        this.exercise = localStorage.getItem('exercise');
        var newMax = {
            'user_id': this.user_id,
            'exercise': this.exercise,
            'weight': weight
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('weights/addMax', newMax, { headers: headers }).map(function (res) { return res.json(); });
    };
    WeightService.prototype.getCurrent = function () {
        this.exercise = localStorage.getItem('exercise');
        var query = { 'user_id': this.user_id, 'exercise': this.exercise };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('weights/getCurrent', query, { headers: headers }).map(function (res) { return res.json(); });
    };
    WeightService.prototype.addCurrent = function (weight, reps) {
        this.exercise = localStorage.getItem('exercise');
        var current = {
            'user_id': this.user_id,
            'exercise': this.exercise,
            'weight': weight,
            'reps': reps
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post('weights/addCurrent', current, { headers: headers }).map(function (res) { return res.json(); });
    };
    WeightService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], WeightService);
    return WeightService;
    var _a;
}());
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/weight.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/nikhil/Documents/projects/infinite-off-season-calculator/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map