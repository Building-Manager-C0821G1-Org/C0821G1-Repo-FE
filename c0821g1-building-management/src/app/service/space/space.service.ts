import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Spaces} from '../../feature/space/spaces';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.urlApi}`;

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) {
  }
  findAllSpace(): Observable<Spaces[]>{
    return this.http.get<Spaces[]>(API_URL + '/spaces/list');
  }

  deleteSpaceById(spaceId: number ): Observable<Spaces>{
    return this.http.get<Spaces>(API_URL + `/spaces/${spaceId}`);
  }
}
