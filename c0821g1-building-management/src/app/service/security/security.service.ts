import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Roles} from "../../model/roles";
const AUTH_API = 'http://localhost:8080/api/public/';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  httpOptions: any;
  isLoggedIn: boolean;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }


  API_URL = 'http://localhost:8080/security/list';



  findAll(): Observable<Roles[]> {
    return this.http.get<Roles[]>(this.API_URL);}
  login(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: user.username,
      password: user.password
    }, this.httpOptions);

  }
}
