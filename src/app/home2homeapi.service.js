"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Home2HomeApiService = void 0;
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Home2HomeApiService = /** @class */ (function () {
    function Home2HomeApiService(http) {
        this.http = http;
    }
    Home2HomeApiService.prototype.getPropertiesIndex = function () {
        //return this.http.get('http://localhost:8080/app/properties')
        return this.http.get('/app/properties/')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getProperties = function (index) {
        //return this.http.get('http://localhost:8080/app/properties/' + index)
        return this.http.get('/app/properties/' + index)
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getUserInfoIndex = function () {
        //return this.http.get('http://localhost:8080/app/users')
        return this.http.get('/app/users/')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getUserInfo = function (index) {
        //return this.http.get('http://localhost:8080/app/users/' + index)
        return this.http.get('/app/users/' + index)
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getBookingInfo = function (index) {
        //return this.http.get('http://localhost:8080/app/bookings/' + index)
        return this.http.get('/app/bookings/' + index)
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getBookingsIndex = function () {
        // return this.http.get('http://localhost:8080/app/bookings/')
        return this.http.get('/app/bookings/')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getPropertySearchResults = function (location, guests) {
        //return this.http.get('http://localhost:8080/app/searchForHomes/' + location + "-" + guests)
        return this.http.get('/app/searchForHomes/' + location + "-" + guests)
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getLoggedInUserInfo = function () {
        return this.http.get('/api/auth-data')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.createProperty = function (userId, propertyName, description, bathrooms, bedrooms, sqFeet, address) {
        this.http.post('/app/properties/', { propertyName: propertyName, description: description, bathrooms: bathrooms, bedrooms: bedrooms, sqFeet: sqFeet, address: address, owner: userId }).subscribe(function (data) {
            console.log(data);
        });
    };
    Home2HomeApiService.prototype.createBooking = function (userIdA, propertyIdA, userIdB, propertyIdB, dateRequested) {
        return this.http.post('/app/bookings/', { userA: userIdA, userB: userIdB, propertyA: propertyIdA, propertyB: propertyIdB, dateRequested: dateRequested }).map(function (response) { return response.json(); });
    };
    Home2HomeApiService = __decorate([
        core_1.Injectable()
    ], Home2HomeApiService);
    return Home2HomeApiService;
}());
exports.Home2HomeApiService = Home2HomeApiService;
