"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PropertyComponent = void 0;
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(property$) {
        var _this = this;
        this.propertyService$ = property$;
        property$.getPropertiesIndex()
            .subscribe(function (result) { return _this.properties = result; }, function () { }, function () { return console.log('REST call:' + _this.properties); });
        this.user$.getLoggedInUserInfo()
            .subscribe(function (result) {
            _this.userId = result.userId;
            _this.user$.getUserInfo(_this.userId)
                .subscribe(function (result) {
                _this.user.fName = result.fName;
                _this.propertyId = result.properties[0];
            });
        });
    }
    PropertyComponent.prototype.ngOnInit = function () {
    };
    PropertyComponent.prototype.search = function (location, checkin, checkout, guests) {
        var _this = this;
        console.log("function works");
        console.log(location);
        console.log(checkin);
        console.log(checkout);
        console.log(guests);
        this.propertyService$.getPropertySearchResults(location, guests)
            .subscribe(function (result) { return _this.properties = result; }, function () { }, function () { return console.log("searched propertes"); });
    };
    PropertyComponent.prototype.createBookingRequest = function (userB, propertyB) {
        var _this = this;
        this.user$.createBooking(this.userId, this.propertyId, userB, propertyB, Date.now().toString())
            .subscribe(function (result) {
            _this.newBookingID = result.bookingId;
        });
        this.router.navigateByUrl('#/booking/' + this.newBookingID);
    };
    __decorate([
        core_1.Input()
    ], PropertyComponent.prototype, "propertyNumber");
    PropertyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-property',
            templateUrl: './property.component.html',
            styleUrls: ['./property.component.css']
        })
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
