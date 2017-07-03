import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: {
    email: string;
    password: string;
  } = {
    email: '',
    password: ''
  };

  doLogin() {
    this.userService.logIn(this.user.email, this.user.password);
  }

  constructor(
      private userService: UserService
  ) { }

  ngOnInit() {
  }

}
