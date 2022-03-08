import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Router} from '@angular/router';
import {EmployeePositionService} from '../../../service/employee/employee-position.service';
import {EmployeePosition} from '../../../model/employee-position';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {UploadFileService} from '../../../service/employee/upload-file.service';
import {Employee} from '../../../model/employee';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeCreateForm: FormGroup;
  employeePositionList: Array<EmployeePosition>;
  selectedImage: any = null;
  url: string;
  id: string;
  file: string;
  employeeList: Array<Employee>;
  emailList: string[];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private employeePositionService: EmployeePositionService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              @Inject(UploadFileService) private uploadFileService: UploadFileService
  ) {
    this.employeeCreateForm = new FormGroup({
      employeeCode: new FormControl('', [Validators.required, Validators.pattern('[N][V][-]\\d{4}')]),
      employeeName: new FormControl('', Validators.required),
      employeeDateOfBirth: new FormControl('', [Validators.required, this.checkMinAge]),
      employeeAddress: new FormControl('', Validators.required),
      employeeEmail: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9_!#$%&\'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+.[a-z]{2,6}$')
      ]),
      employeePhone: new FormControl('', [Validators.required, Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]),
      employeeStartDate: new FormControl('', Validators.required),
      employeeGender: new FormControl(),
      employeePosition: new FormControl('', Validators.required),
      employeeImage: new FormControl('')
    });
    this.employeePositionService.findAllEmployeePosition().subscribe(value => {
      this.employeePositionList = value;
      console.log(this.employeePositionList);
    });
    this.employeeService.findAllEmployee().subscribe(value => {
      this.employeeList = value;
      console.log(this.employeeList);
    });

  }

  validateErrorEmail: string;

  ngOnInit(): void {
    this.uploadFileService.getImageDetailList();
  }

  saveNewEmployee() {
    const newEmployee = Object.assign({}, this.employeeCreateForm.value);
    console.log(newEmployee);
    this.employeeService.saveNewEmployee(newEmployee).subscribe(value => {
      alert('Thêm mới thành công');
      console.log('them moi thanh cong');
      console.log(value);
      this.router.navigateByUrl('/employee/list');
    }, error => {
    });
  }


  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }

  save() {
    const name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          this.uploadFileService.insertImageDetails(this.id, this.url);
          alert('Upload Successful');
        });
      })
    ).subscribe();
  }

  view() {
    this.uploadFileService.getImage(this.file);
  }


  checkMinAge(abstractControl: AbstractControl): any {
    const dateOfBirth = abstractControl.value;
    const yearOfBirth = dateOfBirth.substr(0, 4);
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth >= 18 ? null : {under18: true};
  }

  // checkUniqueEmail(abstractControl: AbstractControl): any {
  //   const emailCreate = abstractControl.value;
  //   // const employeeList=
  //   // for (let i = 0; i <= this.employeeList.length; i++) {
  //   //   if (emailCreate === this.employeeList[i].employeeEmail) {
  //   //     return null;
  //   //   } else {
  //   //     return {exist: true};
  //   //   }
  //   }


}
