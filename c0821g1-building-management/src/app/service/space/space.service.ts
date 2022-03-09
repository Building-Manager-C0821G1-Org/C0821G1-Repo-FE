import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Spaces} from "../../model/space/spaces";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  API_URL = `${environment.urlApi}`;
  constructor(private httpClient: HttpClient) { }
  saveNewSpace(newSpace: Spaces): Observable<void>{
  return this.httpClient.post<void>(this.API_URL + '/spaces/register', newSpace);
  }
  findByID(id: number): Observable<Spaces>{
  return this.httpClient.get<Spaces>(this.API_URL + '/spaces/' + id);
  }

  editSpace(spaceEdit: Spaces): Observable<void>{
    return this.httpClient.patch<void>(this.API_URL + '/spaces/edit/' + spaceEdit.spaceId, spaceEdit);
  }
}
