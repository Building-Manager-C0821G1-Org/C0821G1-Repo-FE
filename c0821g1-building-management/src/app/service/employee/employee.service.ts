import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../model/employee';
import {Observable} from 'rxjs';
import {EmployeePosition} from '../../model/employee-position';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  API_URL = 'http://localhost:8080/employee';

  constructor(private httpClient: HttpClient) {
  }

  saveNewEmployee(newEmployee: Employee): Observable<void> {
    return this.httpClient.post<void>(this.API_URL + '/create', newEmployee);
  }

  findEmployeeByID(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/' + id);
  }

  editEmployee(employeeEdit: Employee): Observable<void> {
    return this.httpClient.patch<void>(this.API_URL + '/update/' + employeeEdit.employeeId, employeeEdit);
  }

  findAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL + '/list');
  }
}
