import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../common/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private httpClient: HttpClient) {
  }


  getUserList(): Observable<User[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.users)
    );
  }
}

interface GetResponse {
  _embedded: {
    users: User[];
  };
}
