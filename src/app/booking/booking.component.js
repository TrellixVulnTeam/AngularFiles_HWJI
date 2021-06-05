"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookingComponent = void 0;
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
//import ITravelerModelAngular from '../share/ITravelerModelAngular';
//import IPropertyModelAngular from '../share/IPropertyModelAngular';
//import Item from '../share/Item';
var BookingComponent = /** @class */ (function () {
    //datePreferences:
    function BookingComponent(route, location, booking$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.booking$ = booking$;
        this.bookingId = route.snapshot.params['booking_id'];
        booking$.getBookingInfo(this.bookingId)
            .subscribe(function (result) {
            _this.propertyA = result.propertyA;
            _this.propertyB = result.propertyB;
            booking$.getProperties(_this.propertyA.toString())
                .subscribe(function (result) {
                _this.propertyAName = result.propertyName;
                _this.propertyADescription = result.description;
                _this.propertyARating = result.averageRating;
                _this.propertyASqFeet = result.sqFeet;
                _this.propertyABathrooms = result.bathrooms;
                _this.propertyABedrooms = result.bedrooms;
                _this.propertyAAddress = result.address;
            }, function () { }, function () { });
            booking$.getProperties(_this.propertyB.toString())
                .subscribe(function (result) {
                _this.propertyBName = result.propertyName;
                _this.propertyBDescription = result.description;
                _this.propertyBRating = result.averageRating;
                _this.propertyBSqFeet = result.sqFeet;
                _this.propertyBBathrooms = result.bathrooms;
                _this.propertyBBedrooms = result.bedrooms;
                _this.propertyBAddress = result.address;
            }, function () { }, function () { });
        }, function () { }, function () { });
    }
    BookingComponent.prototype.ngOnInit = function () { };
    BookingComponent = __decorate([
        core_1.Component({
            selector: 'app-booking',
            templateUrl: './booking.component.html',
            styleUrls: ['./booking.component.css']
        })
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
