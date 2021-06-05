import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Home2HomeApiService } from '../home2homeapi.service';
import IPropertyModelAngular from '../share/IPropertyModelAngular';

@Component({
  moduleId: module.id,
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {
  @Input() propertyNumber: number[];
  properties: IPropertyModelAngular[];
  propertyService$; 

  constructor(property$: Home2HomeApiService) {
    this.propertyService$ = property$;
    property$.getPropertiesIndex()
    .subscribe(
      result => this.properties = result,
      () => {},
      () => console.log('REST call:' + this.properties)
    );
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

}

