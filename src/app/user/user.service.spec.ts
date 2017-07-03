import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import {ApiUrl} from './api-url';
import {HttpModule, XHRBackend, Response, ResponseOptions} from '@angular/http';

import {MockBackend, MockConnection} from '@angular/http/testing';
import {NotifyService} from 'notify-angular';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {AuthGuardService} from '../user/auth-guard.service';
import {EmptyComponent} from './empty/empty.component';

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        NotifyService,
        {provide: ApiUrl, useValue: 'bla'},
        { provide: XHRBackend, useClass: MockBackend },
        AuthGuardService,
        UserService,
      ],
      imports: [
        HttpModule,
        RouterModule.forRoot([
          { path: '', component: EmptyComponent, canActivate: [AuthGuardService]},
          { path: 'dashboard', component: EmptyComponent, canActivate: [AuthGuardService]}
        ])
      ],
      declarations: [
        EmptyComponent
      ]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should able to log out and check loggedIn status', inject([UserService], (service: UserService) => {
   service.logOut();
    expect(service.loggedIn()).toBeFalsy();
  }));

  it('should be able to login without throwing an exception',
    inject([UserService, XHRBackend],
      (userService: UserService, mockBackend: MockBackend) => {

        mockBackend.connections.subscribe((connection: MockConnection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: {
              email: 'hans@gmail.com'
            }
          })));
        });

        /* this works because the mock backend is synchronous! */
        userService.logIn('hans@gmail.com', '1234');
        expect(userService.loggedIn()).toBeTruthy();

      })
  );


});
