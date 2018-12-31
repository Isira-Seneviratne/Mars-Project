import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Ng form
  @ViewChild('loginForm') form:any;

  loginIndex:String;
  loginPassword:String;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  // Login function
  login() {

    const user = {
      id:this.loginIndex,
      password:this.loginPassword
    };
  }
}
