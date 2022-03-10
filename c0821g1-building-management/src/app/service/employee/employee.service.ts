import {Injectable} from '@angular/core';
<<<<<<< HEAD
import {Observable} from 'rxjs';
import {Employee} from '../../model/user/employee';
import {HttpClient} from '@angular/common/http';
=======
import {HttpClient} from '@angular/common/http';
import {Employee} from '../../model/employee';
import {Observable} from 'rxjs';
import {EmployeePosition} from '../../model/employee-position';
>>>>>>> employee-create-BaoNHG

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
<<<<<<< HEAD

  API_URL = 'http://localhost:8080';
=======
  API_URL = 'http://localhost:8080/employee';
>>>>>>> employee-create-BaoNHG

  constructor(private httpClient: HttpClient) {
  }

<<<<<<< HEAD
  getEmployee(id: number): Observable<any> {
    return this.httpClient.get(this.API_URL + '/api/employee/detail/' + id);
  }

  search(page: number, employeeName: string, employeeDateOfBirth: string, employeeEmail: string,
         employeeAddress: string): Observable<any> {
    return this.httpClient.get(this.API_URL + '/api/employee/search?employee_name=' + employeeName + '&employee_date_of_birth='
      + employeeDateOfBirth + '&employee_email=' + employeeEmail + '&employee_address=' + employeeAddress
      + '&page=' + page);
  }


  deleteEmployeeById(id: any): Observable<any> {
    return this.httpClient.delete(this.API_URL + '/api/employee/delete/' + id);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL + '/api/employee/getById/' + id);
=======
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
>>>>>>> employee-create-BaoNHG
  }
}
