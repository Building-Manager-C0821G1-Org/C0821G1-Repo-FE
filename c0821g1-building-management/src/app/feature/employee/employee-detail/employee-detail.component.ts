import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../../model/employee/employee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
 employee: Employee ;
  urlImg: any;
  username: string;
  email: string;
  name: string;
  phone: string;
  address: string;
  gender: string;
  dateOfBirth: string;
  id: any;

  constructor(private employeeService: EmployeeService,
              private activatedRoute: ActivatedRoute) {
    const employeeId = this.activatedRoute.snapshot.params.id;
    this.employeeService.findById(Number(employeeId)).subscribe(value => {
      this.employee = value;
    });
  }

  ngOnInit(): void {
    // this.urlImg =  this.tokenStorageService.getUser().urlImg;
    // this.id =  this.tokenStorageService.getUser().idEmployee;
    // this.username = this.tokenStorageService.getUser().username;
    // this.email = this.tokenStorageService.getUser().email;
    // this.name = this.tokenStorageService.getUser().name;
    // this.phone = this.tokenStorageService.getUser().phone;
    // this.address = this.tokenStorageService.getUser().address;
    // this.gender = this.tokenStorageService.getUser().gender;
    // this.dateOfBirth = this.tokenStorageService.getUser().dayOfBirth;
    throw new Error('Method not implemented.');
  }

}
