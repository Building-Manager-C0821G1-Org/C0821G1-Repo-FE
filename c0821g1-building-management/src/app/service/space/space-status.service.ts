import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpacesStatus} from '../../feature/space/spaces-status';

@Injectable({
  providedIn: 'root'
})
export class SpaceStatusService {
  API_URL = 'http://localhost:8080/spaceStatus/list';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<SpacesStatus[]>{
    return this.httpClient.get<SpacesStatus[]>(this.API_URL);
  }
}
