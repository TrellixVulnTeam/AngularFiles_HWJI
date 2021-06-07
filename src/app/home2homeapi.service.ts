import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class Home2HomeApiService {

  constructor(private http: Http) { }


  getPropertiesIndex() {
    //return this.http.get('http://localhost:8080/app/properties')
    return this.http.get('/app/properties/')
    .map(response => response.json());
  }

  getProperties(index: string) {
    //return this.http.get('http://localhost:8080/app/properties/' + index)
    return this.http.get('/app/properties/' + index)
    .map(response => response.json());
}

  getUserInfoIndex() {
    //return this.http.get('http://localhost:8080/app/users')
    return this.http.get('/app/users/')
      .map(response => response.json());
  }

  getUserInfo(index: string) {
    //return this.http.get('http://localhost:8080/app/users/' + index)
    return this.http.get('/app/users/' + index)
    .map(response => response.json());
  }


 getBookingInfo(index: string) {
   //return this.http.get('http://localhost:8080/app/bookings/' + index)
   return this.http.get('/app/bookings/' + index)
     .map(response => response.json());
  }

 getBookingsIndex() {
  // return this.http.get('http://localhost:8080/app/bookings/')
   return this.http.get('/app/bookings/')
     .map(response => response.json());
 }

 getPropertySearchResults(location: string, guests: string) {
   //return this.http.get('http://localhost:8080/app/searchForHomes/' + location + "-" + guests)
   return this.http.get('/app/searchForHomes/' + location + "-" + guests)
   .map(response => response.json());
 }

 getLoggedInUserInfo() {
   return this.http.get('/api/auth-data')
   .map(response => response.json());
 }

 async createProperty(userId: string, propertyName: string, description: string, bathrooms: number, bedrooms: number, sqFeet: number, address: string) {
    this.http.post('/app/properties/', {propertyName: propertyName, description: description, bathrooms: bathrooms, bedrooms: bedrooms, sqFeet: sqFeet, address: address, owner: userId}).subscribe(data => {
    console.log(data);
    });
    this.router.navigate(['/property/']);
 }

 createBooking(userIdA: string, propertyIdA: string, userIdB: string, propertyIdB: string, dateRequested: string) {
   return this.http.post('/app/bookings/', {userA: userIdA, userB: userIdB, propertyA: propertyIdA, propertyB: propertyIdB, dateRequested: dateRequested}).map(response => response.json());
 }

 
  /*unfavorite(userID: string, toolID: string){
     this.http.post('/api/customer-unbookmark',  { cid: userID, tid: toolID }).subscribe(data => {
       console.log(data);
     });
   }
   */
}