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


  // To log an existing user into the system
  login(user){
    
    return this.http.post('https://localhost:443/get_student', user);
  }

  // For validation
  isLoggedIn(){

    // Using jwthelperservice to check whether the token is expired or not
    return !this.jwtHelperService.isTokenExpired();

  }
}
