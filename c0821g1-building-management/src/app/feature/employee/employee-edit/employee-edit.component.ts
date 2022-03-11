import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeePosition} from '../../../model/employee/employee-position';
import {EmployeeService} from '../../../service/employee/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeePositionService} from '../../../service/employee/employee-position.service';
import {Employee} from '../../../model/employee/employee';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  validateCode: string;
  employeePositionList: Array<EmployeePosition>;
  employeeEdit: Employee;
  employeeEditForm = new FormGroup({
    employeeCode: new FormControl('', [Validators.required, Validators.pattern('[N][V][-]\\d{4}')]),
    employeeName: new FormControl(''),
    employeeDateOfBirth: new FormControl('', [Validators.required, this.checkMinAge]),
    employeeAddress: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    employeeEmail: new FormControl(''),
    employeePhone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
    employeeStartDate: new FormControl('', Validators.required),
    employeeGender: new FormControl(),
    employeePosition: new FormControl('', Validators.required),
    employeeImage: new FormControl('')
  });

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private employeePositionService: EmployeePositionService,
              private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.employeePositionService.findAllEmployeePosition().subscribe(value => {
      this.employeePositionList = value;
      console.log(this.employeePositionList);

      const employeeEditId = this.activatedRoute.snapshot.params.id;
      console.log(employeeEditId);
      this.employeeService.findById(employeeEditId).subscribe(value2 => {
        this.employeeEdit = value2;
        this.employeeEditForm.patchValue(
          this.employeeEdit
        );
      });
    });
  }

  editEmployee() {
    const editEmployee = Object.assign({}, this.employeeEditForm.value);
    editEmployee.employeeId = this.employeeEdit.employeeId;
    editEmployee.appUser = this.employeeEdit.appUser;
    editEmployee.employeeDeleteFlag = this.employeeEdit.employeeDeleteFlag;
    this.employeeService.editEmployee(editEmployee).subscribe(value => {
        alert('Chỉnh sửa thành công');
      },
      error => {
        console.log(error);
        this.validateCode = error.error.code;
        alert(this.validateCode);
      }, () => {
        this.router.navigateByUrl('/employee/list');
      });
  }

  checkMinAge(abstractControl: AbstractControl): any {
    const dateOfBirth = abstractControl.value;
    const yearOfBirth = dateOfBirth.substr(0, 4);
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth >= 18 ? null : {under18: true};
  }
}
