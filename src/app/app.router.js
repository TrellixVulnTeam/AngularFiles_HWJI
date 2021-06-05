"use strict";
exports.__esModule = true;
exports.routing = void 0;
var router_1 = require("@angular/router");
//import { WelcomeComponent } from './welcome/welcome.component';
var travelerProfile_component_1 = require("./travelerProfile/travelerProfile.component");
var property_component_1 = require("./property/property.component");
var booking_component_1 = require("./booking/booking.component");
var routes = [
    //{ path: '', component: BookingComponent },
    { path: 'property', component: property_component_1.PropertyComponent },
    { path: 'travelerProfile/:id', component: travelerProfile_component_1.TravelerProfileComponent },
    //{ path: 'travelerProfile', component: TravelerProfileComponent },
    //  { path: 'property/:id', component: PropertyComponent},
    { path: 'booking/:booking_id', component: booking_component_1.BookingComponent },
];
exports.routing = router_1.RouterModule.forRoot(routes);
