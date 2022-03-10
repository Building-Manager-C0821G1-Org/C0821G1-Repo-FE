import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Employee} from '../../../model/user/employee';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ActivatedRoute} from '@angular/router';
=======
>>>>>>> employee-create-BaoNHG

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
<<<<<<< HEAD
 employee: Employee ;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) {
    const employeeId = this.activatedRoute.snapshot.params.id;
    this.employeeService.findById(Number(employeeId)).subscribe(value => {
      this.employee = value;
    });
  }
=======

  constructor() { }
>>>>>>> employee-create-BaoNHG

  ngOnInit(): void {
  }

}
