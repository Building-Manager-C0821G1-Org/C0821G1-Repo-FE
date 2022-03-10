import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Floors} from '../../model/floor/floors';

@Injectable({
  providedIn: 'root'
})
export class FloorService {
  API_URL = 'http://localhost:8080/floors/list';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Floors[]>{
    return this.httpClient.get<Floors[]>(this.API_URL);
  }
}
