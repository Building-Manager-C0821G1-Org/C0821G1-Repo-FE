import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../model/user/employee';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  API_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {
  }

  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/api/employee/detail/' + id);
  }

  search(page: number, employeeName: string, employeeDateOfBirth: string, employeeEmail: string,
         employeeAddress: string,): Observable<any> {
    return this.httpClient.get(this.API_URL + '/api/employee/search?employee_name=' + employeeName + '&employee_date_of_birth='
      + employeeDateOfBirth + '&employee_email=' + employeeEmail + '&employee_address=' + employeeAddress
      + '&page=' + page);
  }


  deleteEmployeeById(id: any): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/api/employee/delete/' + id);
  }

  findById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(this.API_URL + '/api/employee/getById/' + id);
  }
}
