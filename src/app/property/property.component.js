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
//import Item from '../share/Item';
var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(property$) {
        var _this = this;
        this.propertyNumber = [123, 222];
        property$.getPropertiesIndex()
            .subscribe(function (result) { return _this.properties = result; }, function () { }, function () { return console.log('REST call:' + _this.properties); });
    }
    PropertyComponent.prototype.ngOnInit = function () {
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
        /*
        export class PropertyComponent implements OnInit {
           propertyId: string;
           propertyName: string;
           description: string;
           bedrooms: number;
           bathrooms: number;
           sqFeet: number;
           address: string;
           averageRating: number;
        
          constructor(
            private route: ActivatedRoute,
            private location: Location,
            private property$: Home2homeapiService
          ) {
            this.propertyId = route.snapshot.params['id'];
            property$.getProperties(this.propertyId)
            .subscribe(
              result => {
                this.propertyName = result.propertyName;
                this.description = result.description;
                this.bedrooms = result.bedrooms;
                this.bathrooms = result.bathrooms;
                this.sqFeet = result.sqFeet;
                this.address = result.address;
                this.averageRating = result.averageRating;
              },
              () => {},
              () => {}
            );
          }
        
          ngOnInit():void {}
        
        }
        */
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
