"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TravelerProfileComponent = void 0;
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
//import ITravelerModelAngular from '../share/ITravelerModelAngular';
//import IPropertyModelAngular from '../share/IPropertyModelAngular';
//import Item from '../share/Item';
var TravelerProfileComponent = /** @class */ (function () {
    //datePreferences:
    function TravelerProfileComponent(route, location, user$) {
        var _this = this;
        this.route = route;
        this.location = location;
        this.user$ = user$;
        this.userId = route.snapshot.params['id'];
        user$.getUserInfo(this.userId)
            .subscribe(function (result) {
            _this.firstName = result.fName;
            _this.lastName = result.lName;
            _this.propertyId = result.properties;
            //this.propertyName = user$.getProperties(this.propertyId.toString).result.pro;
            user$.getProperties(_this.propertyId.toString())
                .subscribe(function (result) {
                _this.propertyName = result.propertyName;
                _this.propertyDescription = result.description;
            }, function () { }, function () { });
            //this.propertyDescription = user$.getProperties(this.propertyId).description;
            _this.locationPreferences = result.locationPreferences;
            _this.bookingId = result.bookings;
            user$.getBookingInfo(_this.bookingId.toString())
                .subscribe(function (result) {
                _this.bookingLocation = "Italy";
                _this.tripDates = result.tripDates;
            }, function () { }, function () { });
        }, function () { }, function () { });
        /*
    
        user$.getProperties(this.propertyId.toString())
        .subscribe (
          result => {
            this.propertyName = result.propertyName;
            this.propertyDescription = result.description;
          },
          () => {},
          () => {}
        );*/
    }
    TravelerProfileComponent.prototype.ngOnInit = function () { };
    TravelerProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-travelerProfile',
            templateUrl: './travelerProfile.component.html',
            styleUrls: ['./travelerProfile.component.css']
        })
    ], TravelerProfileComponent);
    return TravelerProfileComponent;
}());
exports.TravelerProfileComponent = TravelerProfileComponent;
