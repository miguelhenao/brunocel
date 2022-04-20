import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ClientPayload } from '../helpers/interfaces/client-payload';

const URL_API = environment.api;

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  list(): Observable<ClientPayload[]> {
    return this.http.get<ClientPayload[]>(`/api/clients`);
  }

  read(id: string): Observable<ClientPayload> {
    return this.http.get<ClientPayload>(`${URL_API}/clients/${id}`);
  }

  create(payload: ClientPayload): Observable<ClientPayload> {
    return this.http.post<ClientPayload>(`${URL_API}/api/clients`, payload);
  }

  update(payload: ClientPayload): Observable<ClientPayload> {
    const id: string = payload.id;
    return this.http.put<ClientPayload>(`${URL_API}/api/clients/${id}`, payload);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${URL_API}/api/clients/${id}`);
  }
}
