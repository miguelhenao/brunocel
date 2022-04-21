import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ProviderPayload } from '../helpers/interfaces/provider-payload';

const URL_API = environment.api;

@Injectable()
export class ProviderService {
  constructor(private http: HttpClient) {}

  list(): Observable<ProviderPayload[]> {
    return this.http.get<ProviderPayload[]>(`/api/providers`);
  }

  read(id: string): Observable<ProviderPayload> {
    return this.http.get<ProviderPayload>(`${URL_API}/providers/${id}`);
  }

  create(payload: ProviderPayload): Observable<ProviderPayload> {
    return this.http.post<ProviderPayload>(`${URL_API}/api/providers`, payload);
  }

  update(payload: ProviderPayload): Observable<ProviderPayload> {
    const id: string = payload.id;
    return this.http.put<ProviderPayload>(`${URL_API}/api/providers/${id}`, payload);
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${URL_API}/api/providers/${id}`);
  }
}
