import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../../model/employee/employee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) {
    const employeeId = this.activatedRoute.snapshot.params.id;
    this.employeeService.findById(Number(employeeId)).subscribe(value => {
      this.employee = value;
    });
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
