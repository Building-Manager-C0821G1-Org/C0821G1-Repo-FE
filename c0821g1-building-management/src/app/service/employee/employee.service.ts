import {Injectable} from '@angular/core';
import {Employee} from '../../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
  }

  employees: Employee[] = [
    {
      id: 1,
      name: 'Ly'
    },
    {
      id: 2,
      name: 'Long'
    },
    {
      id: 3,
      name: 'Linh'
    },
    {
      id: 4,
      name: 'Sang'
    },
  ];
}
