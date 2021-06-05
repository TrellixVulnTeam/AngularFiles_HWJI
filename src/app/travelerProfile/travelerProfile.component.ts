import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
@Component({
  selector: 'app-travelerProfile',
  templateUrl: './travelerProfile.component.html',
  styleUrls: ['./travelerProfile.component.css']
})
export class TravelerProfileComponent implements OnInit {
  userId: string;
  firstName: string; //get user by id
  lastName: string;
  propertyId: number;
  propertyName: string; //get property by propertyid
  propertyDescription: string;
  locationPreferences: string[]; //get preferences by id
  bookingId: number;
  bookingLocation: string;
  tripDates: string;
 
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private user$: Home2HomeApiService
  ) {
    this.userId = route.snapshot.params['id'];
    user$.getUserInfo(this.userId)
    .subscribe(
      result => {
        this.firstName = result.fName;
        this.lastName = result.lName;
        this.propertyId = result.properties;
        user$.getProperties(this.propertyId.toString())
        .subscribe (
          result => {
            this.propertyName = result.propertyName;
            this.propertyDescription = result.description;
          },
        
        );
        this.locationPreferences = result.locationPreferences;
        this.bookingId = result.bookings;
        user$.getBookingInfo(this.bookingId.toString())
        .subscribe (
          result => {
            this.bookingLocation = "Italy";
            this.tripDates = result.tripDates;
          },
       
        );

      },
    
    );



}
  ngOnInit():void {}

  }

