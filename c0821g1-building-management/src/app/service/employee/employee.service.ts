
import {Injectable} from '@angular/core';
import {Employee} from '../../model/contract/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor() {
  }

  employees: Employee[] = [];
}
