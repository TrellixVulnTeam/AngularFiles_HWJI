import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
//import ITravelerModelAngular from '../share/ITravelerModelAngular';
//import IPropertyModelAngular from '../share/IPropertyModelAngular';
//import Item from '../share/Item';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingId: string;
  propertyA: number;
  propertyB: number;
  propertyAName: string;
  propertyADescription: string;
  propertyARating: number;
  propertyASqFeet: number;
  propertyABathrooms: number;
  propertyABedrooms: number;
  propertyAAddress: string;
  propertyBName: string;
  propertyBDescription: string;
  propertyBRating: number;
  propertyBSqFeet: number;
  propertyBBathrooms: number;
  propertyBBedrooms: number;
  propertyBAddress: string;
  //datePreferences:
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private booking$: Home2HomeApiService
  ) {
    this.bookingId = route.snapshot.params['booking_id'];
    booking$.getBookingInfo(this.bookingId)
    .subscribe(
      result => {
        this.propertyA = result.propertyA;
        this.propertyB = result.propertyB;

        booking$.getProperties(this.propertyA.toString())
        .subscribe(
          result => {
            this.propertyAName = result.propertyName;
            this.propertyADescription = result.description;
            this.propertyARating = result.averageRating;
            this.propertyASqFeet = result.sqFeet;
            this.propertyABathrooms = result.bathrooms;
            this.propertyABedrooms = result.bedrooms;
            this.propertyAAddress = result.address;
          },
             () => {},
             () => {}
        );
         booking$.getProperties(this.propertyB.toString())
        .subscribe(
          result => {
            this.propertyBName = result.propertyName;
            this.propertyBDescription = result.description;
            this.propertyBRating = result.averageRating;
            this.propertyBSqFeet = result.sqFeet;
            this.propertyBBathrooms = result.bathrooms;
            this.propertyBBedrooms = result.bedrooms;
            this.propertyBAddress = result.address;
          },
             () => {},
             () => {}
         );

      },
      () => {},
      () => {}
    );


}
  ngOnInit():void {}

  }
