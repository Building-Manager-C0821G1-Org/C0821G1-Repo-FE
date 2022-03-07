import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contract} from '../../model/contract';
import {Observable} from 'rxjs';

const apiUrl = 'http://localhost:8080/contract';

@Injectable({
  providedIn: 'root'
})

export class ContractService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(apiUrl + '/list');
  }

  saveContract(contract): Observable<Contract> {
    return this.http.post<Contract>(apiUrl + '/add', contract);
  }

  findById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`${apiUrl}/find/${id}`);
  }

  deleteContract(id: number): Observable<Contract> {
    return this.http.delete<Contract>(`${apiUrl}/delete/${id}`);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(`${apiUrl}/update/${id}`, contract);
  }
}
