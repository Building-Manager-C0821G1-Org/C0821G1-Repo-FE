import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Spaces} from "../../model/space/spaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  API_URL = 'http://localhost:8080/space';
  constructor(private httpClient: HttpClient) { }
  saveNewSpace(newSpace: Spaces): Observable<void>{
  return this.httpClient.post<void>(this.API_URL + '/register', newSpace);
  }
  findByID(id: number): Observable<Spaces>{
  return this.httpClient.get<Spaces>(this.API_URL + '/' + id);
  }

  editSpace(spaceEdit: Spaces): Observable<void>{
    return this.httpClient.patch<void>(this.API_URL + '/edit/' + spaceEdit.spaceId, spaceEdit);
  }
}
