import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserPayload } from '../helpers/interfaces/user-payload';
import { environment } from '../../environments/environment';

const URL_API = environment.api;

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  list(): Observable<UserPayload[]> {
    return this.http.get<UserPayload[]>(`/api/users`);
  }

  read(id: string): Observable<UserPayload> {
    return this.http.get<UserPayload>(`${URL_API}/users/${id}`);
  }

  create(payload: UserPayload): Observable<UserPayload> {
    return this.http.post<UserPayload>(`${URL_API}/api/users`, payload);
  }

  update(payload: UserPayload): Observable<UserPayload> {
    const id: string = payload.id;
    return this.http.put<UserPayload>(`${URL_API}/api/users/${id}`, payload);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${URL_API}/api/users/${id}`);
  }
}
