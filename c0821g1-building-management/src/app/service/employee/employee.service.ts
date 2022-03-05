import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public API = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) {
  }

  getEmployee(id: number): Observable<any> {
    return this.http.get(this.API + '/detail/' + id);
  }

  search(page: number, employeeName: string, employeeDateOfBirth: string, employeeEmail: string,
         employeeAddress: string,): Observable<any> {
    return this.http.get(this.API + '/search?employee_name=' + employeeName + '&employee_date_of_birth='
      + employeeDateOfBirth + '&employee_email=' + employeeEmail + '&employee_address=' + employeeAddress
      + '&page=' + page);
  }


  deleteEmployeeById(id: any): Observable<any> {
    return this.http.delete(this.API + '/delete/' + id);
  }
}
