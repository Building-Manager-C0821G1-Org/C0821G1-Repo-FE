import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from '../../model/contract/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private API = 'http://localhost:8080/api/contract';

  constructor(private httpClient: HttpClient) { }
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
  // errorContract(): Observable<any>{
  //   return this.httpClient.get(this.API + '/error-contract/');
  // }
}
