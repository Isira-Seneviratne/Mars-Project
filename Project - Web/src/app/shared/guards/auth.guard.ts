import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthService, private router: Router) {

  }
  
  // Check if the user is accessing a restricted route that is only valid for logged in users
  // If the user is not logged in, then redirect the user to the login page
  canActivate(): boolean {

    const status = this.auth.isLoggedIn();

    if (status) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  } 
  
}
