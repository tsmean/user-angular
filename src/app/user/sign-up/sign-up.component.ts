import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {NotifyService} from 'notify-angular';
import {Router} from '@angular/router';

import 'rxjs/operator/catch';
import {UserService} from '../user.service';

@Component({
  selector: 'user-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  newUser = {
    email: undefined,
    uid: undefined
  };

  password = '';

  constructor(
      private userService: UserService,
      private notifyService: NotifyService,
      private router: Router,
      private loginService: LoginService
  ) { }

  doSignUp() {
    this.userService.createUser(this.newUser, this.password).subscribe(resp => {
      this.notifyService.success('User created');
      this.loginService.logInAfterSignUp(this.newUser.email);
      this.router.navigate(['/dashboard']);
    });
  }

}
