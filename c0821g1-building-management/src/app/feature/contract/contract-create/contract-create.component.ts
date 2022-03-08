import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../service/contract/contract.service';
import {Router} from '@angular/router';
import {SpaceService} from '../../../service/space/space.service';
import {Space} from '../../../model/space';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/employee';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {DatePipe} from '@angular/common';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';
import {UploadFileService} from '../../../service/upload-file.service';

// export function confirmPassword(c: AbstractControl) {
//   const today = new Date();
//   const v = c.value;
//   return (v.contractDateStart >= today) ? null : {passwordnotmatch: true};
// }

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  selectedImage: any = null;
  url: string;
  id: string;
  file: string;

  contractsForm: FormGroup = this.fb1.group({
    contractId: '',
    contractExpired: ['', [Validators.required]],
    contractDateStart: ['', [Validators.required]],
    contractDateEnd: ['', [Validators.required]],
    price: ['', [Validators.required]],
    contractTotal: ['', [Validators.required]],
    contractContent: ['', [Validators.required, Validators.minLength(10)]],
    contractTaxCode: ['', [Validators.required]],
    contractDeposit: ['', [Validators.required]],
    contractImageUrl: [this.url, [Validators.required]],
    contractDeleteFlag: false,
    employeeId: 1,
    customerId: ['', [Validators.required]],
    spaceId: ['', [Validators.required]]
  });

  spaces: Space[];
  employees: Employee[];
  customers: Customer[];

  dateStart: string;
  dateEnd: string;
  expiredDate: string;

  total: number;

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


  }

  ngOnInit(): void {
    this.uploadFileService.getImageDetailList();
  }

  submit() {

    const name = this.selectedImage.name;
    const fileRef = this.storage.ref(name);
    this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          console.log('image url ' + this.url);
          this.uploadFileService.insertImageDetails(this.id, this.url);
          alert('Upload Successful');
        });
      })
    ).subscribe();

    const contract = this.contractsForm.value;
    this.dateStart = contract.contractDateStart;
    this.dateEnd = contract.contractDateEnd;
    const date1 = new Date(contract.contractDateStart);
    const date2 = new Date(contract.contractDateEnd);
    const month = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 30);
    // @ts-ignore
    // contract.contractExpired = Math.round(month);

    this.contractService.saveContract(contract).subscribe(() => {
      this.contractsForm.reset();
      alert('Thêm mới thành công');
      this.router.navigate(['contract/list']);
    }, err => {
      console.log(err);
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

  save() {
    // const name = this.selectedImage.name;
    // const fileRef = this.storage.ref(name);
    // this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    //   finalize(() => {
    //     fileRef.getDownloadURL().subscribe((url) => {
    //       this.url = url;
    //       console.log('image url ' + this.url);
    //       this.uploadFileService.insertImageDetails(this.id, this.url);
    //       alert('Upload Successful');
    //     });
    //   })
    // ).subscribe();
  }

  view() {
    this.uploadFileService.getImage(this.file);
  }


}
