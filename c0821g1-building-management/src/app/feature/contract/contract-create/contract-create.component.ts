import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../service/contract/contract.service';
import {Router} from '@angular/router';
import {SpaceService} from '../../../service/space/space.service';
import {EmployeeService} from '../../../service/employee/employee.service';

import {CustomerService} from '../../../service/customer/customer.service';
import {DatePipe} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {UploadFileService} from '../../../service/upload-file.service';
import Swal from 'sweetalert2';
import {Spaces} from '../../../model/contract/spaces';
import {Employee} from '../../../model/contract/employee';
import {Customer} from '../../../model/contract/customer';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  selectedImage: any = null;
  url: '';
  id: string;
  file: string;
  checkCode: boolean;

  contractsForm: FormGroup = this.fb1.group({
    contractId: '',
    contractCode: ['', [Validators.required, Validators.pattern('^[H][D]-[\\d]{4}$')]],
    contractExpired: ['', [Validators.required]],
    contractDateStart: ['', [Validators.required]],
    contractDateEnd: ['', [Validators.required]],
    price: ['', [Validators.required]],
    contractTotal: ['', [Validators.required]],
    contractContent: ['', [Validators.required, Validators.minLength(10)]],
    contractTaxCode: ['', [Validators.required, Validators.pattern('^[\\d]+$')]],
    contractDeposit: ['', [Validators.required]],
    contractImageUrl: ['', [Validators.required]],
    contractDeleteFlag: false,
    employeeId: 1,
    customerId: [1, [Validators.required]],
    spaceId: [1, [Validators.required]],
    checkFlag: 0
  });

  spaces: Spaces[];
  employees: Employee[];
  customers: Customer[];

  dateStart: string;
  dateEnd: string;


  constructor(private fb1: FormBuilder,
              private contractService: ContractService,
              private spaceService: SpaceService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private router: Router,
              private  datepipe: DatePipe,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,
              @Inject(UploadFileService) private uploadFileService: UploadFileService
  ) {
    this.spaces = spaceService.spaces;
    this.employees = employeeService.employees;
    this.customers = customerService.customers;
    this.checkCode = false;

  }

  ngOnInit(): void {
    this.uploadFileService.getImageDetailList();
  }

  callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Thêm mới thành công',
      showConfirmButton: false,
      timer: 2000
    });
  }

  uploadFirebase() {
    const name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          console.log(url);
          this.contractsForm.patchValue({contractImageUrl: url});
        });
      })
    ).subscribe();
  }

  submit() {

    this.uploadFirebase();

    const contract = this.contractsForm.value;
    this.dateStart = contract.contractDateStart;
    this.dateEnd = contract.contractDateEnd;
    // @ts-ignore
    const date1 = new Date(contract.contractDateStart);
    // @ts-ignore
    const date2 = new Date(contract.contractDateEnd);
    const month = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 30);
    // @ts-ignore
    contract.contractExpired = Math.round(month);

    this.contractService.saveContract(contract).subscribe(() => {
      this.contractsForm.reset();
      this.callToast();
      this.router.navigate(['contract/list']);
    }, err => {
      console.log(err);
      // this.validateErrorCode = err.error.code;
      // alert('Mã hợp đồng đã tồn tại');
      this.checkCode  = true;
    });
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    if (event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    }
  }
}
