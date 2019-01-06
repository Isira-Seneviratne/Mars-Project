import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Ng form
  // @ViewChild('loginForm') form:any;

  loginIndex:String;
  loginPassword:String;

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  // Login function
  login() {

    const user = {
      SID:this.loginIndex,
      password:this.loginPassword
    };

    this.auth.login(user).subscribe((res:any) => {

      if (res) {
        console.log('found');
       }else{
        console.log(' not found');
       }
    });

  }
}
