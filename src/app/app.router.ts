import { Routes, RouterModule } from '@angular/router';
import { TravelerProfileComponent } from './travelerProfile/travelerProfile.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';
import { AddTravelerPropertyComponent } from './addTravelerProperty/addTravelerProperty.component';

const routes: Routes = [
  { path: 'property', component: PropertyComponent },
  //{ path: 'travelerProfile/:id', component: TravelerProfileComponent },
  { path: 'booking/:booking_id', component: BookingComponent },
  { path: 'travelerProfile', component: TravelerProfileComponent },
  { path: 'addTravelerProperty', component: AddTravelerPropertyComponent },
];

export const routing = RouterModule.forRoot(routes, {useHash:true});
