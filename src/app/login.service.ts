import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string, errorDiv: any) {
    if(username.length == 0 || password.length == 0){
      errorDiv.style.color = "red";
      errorDiv.innerHTML = "Data invalid";
      return;
    }

    this.http.post('/auth/google', { username: username, password: password }).subscribe(data => {
      var dataObj = JSON.parse(JSON.stringify(data));
      if(dataObj.success){
        errorDiv.style.color = "green";
        errorDiv.innerHTML = JSON.stringify(dataObj);
      }else{
        errorDiv.style.color = "red";
        errorDiv.innerHTML = dataObj.message;
      }
    });
  }
}
