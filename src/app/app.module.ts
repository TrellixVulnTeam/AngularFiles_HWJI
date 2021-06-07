import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.router';
import { APP_BASE_HREF } from '@angular/common';

import { Home2HomeApiService } from './home2homeapi.service';
import { AppComponent } from './app.component';
import { PropertyComponent } from './property/property.component';
import { BookingComponent } from './booking/booking.component';
import { PropertiesTableComponent } from './property/properties-table/properties-table.component';
import { TravelerProfileComponent } from './travelerProfile/travelerProfile.component';
import { GoogleOauth2Component } from './google-oauth2/google-oauth2.component';
import { AddTravelerPropertyComponent } from './addTravelerProperty/addTravelerProperty.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    BookingComponent,
    PropertiesTableComponent,
    TravelerProfileComponent,
    GoogleOauth2Component,
    AddTravelerPropertyComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'}, Home2HomeApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


