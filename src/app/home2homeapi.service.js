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
/*
@Injectable({
  providedIn: 'root'
})
*/
var Home2HomeApiService = /** @class */ (function () {
    function Home2HomeApiService(http) {
        this.http = http;
    }
    Home2HomeApiService.prototype.getPropertiesIndex = function () {
        return this.http.get('http://localhost:8080/app/properties')
            //return this.http.get( '/app/properties/')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getProperties = function (index) {
        return this.http.get('http://localhost:8080/app/properties/' + index)
            .map(function (response) { return response.json(); });
        //return this.http.get( '/app/properties/' + index)
    };
    Home2HomeApiService.prototype.getUserInfoIndex = function () {
        return this.http.get('http://localhost:8080/app/users')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getUserInfo = function (index) {
        return this.http.get('http://localhost:8080/app/users/' + index)
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getBookingInfo = function (index) {
        return this.http.get('http://localhost:8080/app/bookings/' + index)
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService.prototype.getBookingsIndex = function () {
        return this.http.get('http://localhost:8080/app/bookings/')
            .map(function (response) { return response.json(); });
    };
    Home2HomeApiService = __decorate([
        core_1.Injectable()
    ], Home2HomeApiService);
    return Home2HomeApiService;
}());
exports.Home2HomeApiService = Home2HomeApiService;
