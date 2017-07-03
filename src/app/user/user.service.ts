import {Inject, Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {WebUtils} from '@tsmean/utils';
import {Http} from '@angular/http';
import {ApiUrl} from 'app/user/api-url';
import {NotifyService} from 'notify-angular';
import {ResourceService} from '@tsmean/resource/resource.service';


@Injectable()
export class UserService {

  constructor(
    @Inject(ApiUrl) private apiUrl: string,
    private http: Http,
    private notifyService: NotifyService,
    private resourceService: ResourceService
  ) {}

  createUser(user: User, password: string): Observable<User> {
    const $data = this.http.post(this.userApi, {
      user: user,
      password: password
    }).map(resp => resp.json().data);
    return $data.catch(this.handleError);
  }

  getUser(): Observable<User> {
    const $data = this.http.get(this.userApi).map(resp => resp.json().data);
    return $data.catch(this.handleError);
  }

  getUserById(id: string): Observable<User> {
    return this.resourceService.getResource(id, 'users');
  }

  removeUser(id: string): Observable<User> {
    return this.resourceService.deleteResource(id, 'users');
  }

  updateUser(user: User): Observable<User> {
    return this.resourceService.updateResource(user, 'users');
  }


  private get userApi(): string {
    return WebUtils.urlJoin(this.apiUrl, 'users');
  }

  private handleError(errorResp: any): Promise<any> {
    this.notifyService.error(errorResp.statusText);
    return Promise.reject(errorResp.statusText || errorResp);
  }

}
