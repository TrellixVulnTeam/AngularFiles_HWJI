import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travelerProfile',
  templateUrl: './addTravelerProperty.component.html',
  styleUrls: ['./addTravelerProperty.component.css']
})
export class AddTravelerPropertyComponent implements OnInit {
    userId: string;
    propertyName: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    sqFeet: number;
    address: number;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private user$: Home2HomeApiService,
    private router: Router
  ) {
    //this.userId = route.snapshot.params['id'];
    //user$.getUserInfo(this.userId)
    user$.getLoggedInUserInfo()
    .subscribe(
      result => {
        this.userId = result.userId;
      },
    );
    }

getFormValues(val:any) {
    console.log(this.userId);
    this.user$.createProperty(this.userId, val.propertyName, val.description, val.bedrooms, val.bathrooms, val.sqFeet, val.address);
    //this.router.navigate(['/travelerProfile']);
    //window.location.href="https://home2hometravel.azurewebsites.net/#/property/"
    window.location.href="https://home2hometest2.azurewebsites.net/#/property/"

}

ngOnInit():void {}
}



