import {EmployeePosition} from './employee-position';

export interface Employee {
  employeeId?: number;
  employeeCode?: string;
  employeeName?: string;
  employeeDateOfBirth?: string;
  employeeGender?: string;
  employeeAddress?: string;
  employeePhone?: string;
  employeeEmail?: string;
  employeeStartDate?: string;
  employeeImage?: string;
  employeeDeleteFlag?: string;
  employeePosition?: EmployeePosition;
}
