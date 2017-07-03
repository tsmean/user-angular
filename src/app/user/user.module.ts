import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './user.service';
import {ApiUrl} from './api-url';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login/login.component';
import {MdButtonModule, MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NotifyModule} from 'notify-angular';
import { EmptyComponent } from './empty/empty.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    HttpModule,
    NotifyModule.forRoot()
  ],
  declarations: [
    SignUpComponent,
    LoginComponent,
    EmptyComponent
  ],
  exports: [
    SignUpComponent,
    LoginComponent
  ]
})
export class UserModule {
  static forRoot(apiUrl: string) {
    return {
      ngModule: UserModule,
      providers: [
        { provide: ApiUrl, useValue: apiUrl },
        UserService
      ]
    };
  }
}
