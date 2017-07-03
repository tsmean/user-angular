import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import {MdButtonModule, MdCardModule, MdInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';
import {ApiUrl} from '../api-url';
import {HttpModule} from '@angular/http';

import {NotifyModule} from 'notify-angular';
import {ResourceModule} from '@tsmean/resource';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        FormsModule,
        BrowserAnimationsModule,
        MdCardModule,
        MdInputModule,
        MdButtonModule,
        HttpModule,
        NotifyModule.forRoot(),
        ResourceModule.forRoot('')
      ],
      providers: [
        {provide: ApiUrl, useValue: ''},
        UserService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

});
