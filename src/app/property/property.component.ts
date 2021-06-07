import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, RouteReuseStrategy } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
import IPropertyModelAngular from '../share/IPropertyModelAngular';
import ITravelerModelAngular from '../share/ITravelerModelAngular';

@Component({
  moduleId: module.id,
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {
  @Input() propertyNumber: string[];
  properties: IPropertyModelAngular[];
  propertyService$; 
  //user$: Home2HomeApiService;
  userId: string;
  propertyId: string;
  user: ITravelerModelAngular; 
  router: Router; 
  newBookingID: string; 

  constructor(property$: Home2HomeApiService, router: Router) {
    this.propertyService$ = property$;
    this.router = router; 
    property$.getPropertiesIndex()
    .subscribe(
      result => this.properties = result,
      () => {},
      () => console.log('REST call:' + this.properties)
    );

    property$.getLoggedInUserInfo()
    .subscribe(
        result => {
          this.userId = result.userId;
          property$.getUserInfo(this.userId)
          .subscribe(
            result => {
              this.user.fName = result.fName; 
              this.propertyId = result.properties[0];
            }
          )
        }
    )
  }

  ngOnInit() {
  }

  public search(location: string, checkin: string, checkout: string, guests: string) {
    console.log("function works");
    console.log(location);
    console.log(checkin);
    console.log(checkout);
    console.log(guests);
    this.propertyService$.getPropertySearchResults(location, guests)
    .subscribe(
      result => this.properties = result, 
      () => {},
      () => console.log("searched propertes")
    );
  }

  public async createBookingRequest(userB: string, propertyB: string) {
    this.propertyService$.createBooking(this.userId, this.propertyId, userB, propertyB, Date.now().toString())
    .subscribe(
      result => {
        this.newBookingID = result.bookingId;
      }
    )
    console.log(this.newBookingID); 
    this.router.navigateByUrl('booking/' + this.newBookingID); 
  }


}

