import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../model/employee/employee";
import {Subscription} from "rxjs";
import {EmployeeService} from "../../../service/employee/employee.service";
import {EmployeeDeleteComponent} from "../employee-delete/employee-delete.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  private subscription: Subscription | undefined;
  page = 0;
  employee_name= '';
  employee_date_of_birth='';
  employee_email='';
  employee_address='';
  totalPages: number;
  pageNumber: number;
  size = 0;
  flag = false;
  message: string;

  constructor(private employeeService: EmployeeService,
              private dialogDelete: MatDialog) {
  }

  ngOnInit(): void {
    this.search();
    console.log(this.employees)
  }

  search() {
    console.log("aaaaa")
    console.log(this.employee_name)
    if (this.employee_name === '' && this.employee_date_of_birth === '' && this.employee_email === '' && this.employee_address === '') {
      this.flag = false;
      this.employeeService.search(this.page, this.employee_name, this.employee_date_of_birth, this.employee_email, this.employee_address)
        .subscribe(data => {
            console.log(data);
            if (data !== null) {
              this.employees = data.content;
              console.log(this.employees)
              this.totalPages = data.totalPages;
              this.size = data.size;
              this.page = data.pageable.pageNumber;
              this.message = '';
            } else {
              this.message = 'không tìm thấy !!!'
            }
          }
        );
    } else {
      console.log("2");
      console.log(this.employee_name)
      if (this.flag === false) {
        this.page = 0;
        this.employeeService.search(this.page, this.employee_name, this.employee_date_of_birth, this.employee_email, this.employee_address)
          .subscribe(data => {
            if (data !== null) {
              this.employees = data.content;
              this.totalPages = data.totalPages;
              this.size = data.size;
              this.page = data.pageable.pageNumber;
              this.message = '';
            } else {
              this.message = 'không tìm thấy !!!';
            }
            this.flag = true;
          })
      } else {
        this.employeeService.search(this.page, this.employee_name, this.employee_date_of_birth, this.employee_email, this.employee_address)
          .subscribe(data => {
            if (data !== null) {
              this.employees = data.content;
              this.totalPages = data.totalPages;
              this.size = data.size;
              this.page = data.pageable.pageNumber;
              this.message = '';
              console.log(this.message);
            } else {
              console.log("3")
              this.message = 'không tìm thấy !!!';
            }
            this.flag = true;
          })
      }
    }
  }

  onSubmit() {
    this.flag = false;
    console.log(this.employee_name)
    this.search();
  }

  previousClick(index) {
    this.page = this.page - index;
    this.ngOnInit();
  }

  findPaginnation(value: number) {
    this.page = value - 1;
    this.ngOnInit();
  }

  nextClick(index) {
    this.page = this.page + index;
    console.log('next pay ' + this.page);
    this.ngOnInit();
  }

  openDialog(employeeId: number) {
    this.employeeService.getEmployee(employeeId).subscribe(employeeData => {
      const dialogRef = this.dialogDelete.open(EmployeeDeleteComponent,{
        width: '500px',
        data: {employeeData},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(value => {
        console.log('Hộp thoại đã được đóng');
        this.ngOnInit();
      })
    })
  }
}
