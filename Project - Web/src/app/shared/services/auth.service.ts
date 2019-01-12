/** This service handles the user authentication functions
 * 
 */ 


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;

  constructor(private http:HttpClient, private jwtHelperService:JwtHelperService) { }


  // Fetch the token from local storage
  fetchToken(){

    const token = localStorage.getItem('tokenid');
    this.token = token;
  }

  // To log an existing user into the system
  login(user){
    
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post('https://localhost:443/get_student', user, {headers:headers}).pipe(map(res => res));
  }

  // For validation
  isLoggedIn(){

    this.fetchToken();
    // Using jwthelperservice to check whether the token is expired or not
    return !this.jwtHelperService.isTokenExpired(this.token);

  }

  // Store the token ID in the local storage of the browser
  storeData(key, value){
    localStorage.setItem(key, value);
  }
}
