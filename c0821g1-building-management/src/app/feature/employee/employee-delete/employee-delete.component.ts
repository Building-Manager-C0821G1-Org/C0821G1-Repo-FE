import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from "../../../model/employee/employee";
import {Subscription} from "rxjs";
import {EmployeeService} from "../../../service/employee/employee.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employee: Employee;
  private subscription: Subscription;

  constructor(
    private employeeService : EmployeeService,
    public dialogRef: MatDialogRef<EmployeeDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
    this.employee = this.data.employeeData;
  }
  deleteEmployee() {
    this.subscription = this.employeeService.deleteEmployeeById(this.employee.employeeId).subscribe(data => {
      this.dialogRef.close();

    });

  }

  onNoClick() {
    this.dialogRef.close();
  }
}
