import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Roles} from '../../model/roles';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  API_URL = 'http://localhost:8080/security/list';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Roles[]> {
    return this.httpClient.get<Roles[]>(this.API_URL);
  }
}
