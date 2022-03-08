import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../model/user/employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }
  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/api/employee/getById/' + id);
  }
}
