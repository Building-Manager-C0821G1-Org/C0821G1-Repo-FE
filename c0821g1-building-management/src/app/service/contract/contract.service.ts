import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  API_URL = 'http://localhost:8080/api/contract/';
  private API = 'http://localhost:8080/api/contract';

  constructor(private httpClient: HttpClient) { }
  // list
  // findAllContract(): Observable<Contract[]> {
  //   return this.httpClient.get<Contract[]>(this.API_URL + 'list');
  // }

  // list-search-page
  findAllContract(page, name, code, start, end): Observable<any> {
    return this.httpClient.get(this.API + '/contract-list?page=' + page + '&name=' + name
      + '&code=' + code + '&start=' + start  + '&end=' + end);
  }

  getContractById(contractId): Observable<any> {
    return this.httpClient.get(this.API + '/' + contractId);
  }

  deleteContract(contractId): Observable<any> {
    return this.httpClient.delete(this.API + '/delete-contract/' + contractId);
  }
}
