import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../model/employee/employee';
import {Observable} from 'rxjs';
import {EmployeePosition} from '../../model/employee/employee-position';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  API_URL = 'http://localhost:8080/employee';


  constructor(private httpClient: HttpClient) {
  }


  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/detail/' + id);
  }

  search(page: number, employeeName: string, employeeDateOfBirth: string, employeeEmail: string,
         employeeAddress: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/search?employee_name=' + employeeName + '&employee_date_of_birth='
      + employeeDateOfBirth + '&employee_email=' + employeeEmail + '&employee_address=' + employeeAddress
      + '&page=' + page);
  }


  deleteEmployeeById(id: any): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/delete/' + id);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/getById/' + id);
  }

  saveNewEmployee(newEmployee: Employee): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + '/create', newEmployee);
  }

  editEmployee(employeeEdit: Employee): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/update/' + employeeEdit.employeeId, employeeEdit);
  }

  findAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL + '/list');
  }
}
