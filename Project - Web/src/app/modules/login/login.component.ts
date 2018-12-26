import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Ng form
  @ViewChild('loginForm') form:any;

  constructor() { }

  ngOnInit() {
  }


  // Login function
  login() {

    const user = 2;
  }
}
