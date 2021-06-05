import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-google-oauth2',
  templateUrl: './google-oauth2.component.html',
  styleUrls: ['./google-oauth2.component.css']
})
export class GoogleOauth2Component implements OnInit {

  service: any;
  username: string = "";
  password: string = "";
  constructor(service: LoginService) { 
    this.service = LoginService;
  }

  ngOnInit(): void {
  }

  onUser(value: string) { this.username = value }
  onPassword(value: string) { this.password = value }

  login(){
    var errorDiv = document.getElementById("ErrorMessage");
    this.service.login(this.username, this.password);
  }

}
