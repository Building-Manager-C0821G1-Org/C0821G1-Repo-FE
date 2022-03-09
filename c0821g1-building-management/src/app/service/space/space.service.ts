import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SpacesList} from '../../feature/space/spaces-list';
import {environment} from '../../../environments/environment';

const API_URL = `${environment.urlApi}`;

@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  constructor(private http: HttpClient) {
  }

  findAllSpace(): Observable<SpacesList[]> {
    return this.http.get<SpacesList[]>(API_URL + '/spaces/list');
  }

  searchSpace(floorName: string,
              spaceCode: string,
              spaceArea: string,
              spaceTypeName: string,
              spaceStatusName: string): Observable<SpacesList[]> {
    return this.http.get<SpacesList[]>(API_URL + '/spaces/search?floorName=' +
      floorName + '&spaceCode=' +
      spaceCode + '&spaceArea=' +
      spaceArea + '&spaceTypeName=' +
      spaceTypeName + '&spaceStatusName=' +
      spaceStatusName);
  }

  deleteSpaceById(spaceId: number): Observable<SpacesList> {
    return this.http.get<SpacesList>(API_URL + `/spaces/${spaceId}`);
  }

  getSpaceById(spaceId: number): Observable<any> {
    return this.http.get(API_URL + `/spaces/detail/${spaceId}`);
  }
}
