import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

import {NotifyService} from 'notify-angular';
import {User} from '../user';

@Component({
  selector: 'user-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: User = {
    email: undefined,
    uid: undefined
  };

  password = '';

  constructor(
    private userService: UserService,
    private notifyService: NotifyService,
  ) { }

  doChange() {
    this.userService.updateUser(this.user).subscribe(resp => {
      this.notifyService.success('User updated');
    });
  }

}
