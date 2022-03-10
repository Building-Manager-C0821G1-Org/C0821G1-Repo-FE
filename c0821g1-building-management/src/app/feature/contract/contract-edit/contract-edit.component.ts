import {Component, Inject, OnInit} from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../service/contract/contract.service';
import {SpaceService} from '../../../service/space/space.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {Spaces} from '../../../model/contract/spaces';
import {Employee} from '../../../model/contract/employee';
import {Customer} from '../../../model/contract/customer';
import {Contract} from '../../../model/contract/contract';


@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contractForm: FormGroup;
  spaces: Spaces[];
  employees: Employee[];
  customers: Customer[];
  id: number;
  dateStart: string;
  dateEnd: string;
  checkCode: boolean;
  private selectedImage: any;
  loading = false;
  contract: Contract;

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private spaceService: SpaceService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private datepipe: DatePipe,
              @Inject(AngularFireStorage) private storage: AngularFireStorage,) {
    this.checkCode = false;

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getContract(this.id);
    });

    this.spaces = spaceService.spaces;
    this.employees = employeeService.employees;
    this.customers = customerService.customers;
  }

  getContract(id: number) {
    return this.contractService.getContractById(id).subscribe(contract => {
      this.dateStart = this.datepipe.transform(contract.contractDateStart, 'yyyy-MM-dd');
      this.dateEnd = this.datepipe.transform(contract.contractDateEnd, 'yyyy-MM-dd');

      // @ts-ignore
      const date1 = new Date(contract.contractDateStart);
      // @ts-ignore
      const date2 = new Date(contract.contractDateEnd);
      const month = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 30);
      // @ts-ignore
      // contract.contractExpired = Math.round(month);
      // console.log('Expired' + contract.contractExpired);

      console.log('Image' + contract.contractImageUrl);

      this.contractForm = this.fb.group({
        contractId: contract.contractId,
        contractCode: [contract.contractCode,[Validators.required, Validators.pattern('^[H][D]-[\\d]{4}$')]],
        contractExpired: [contract.contractExpired, [Validators.required]],
        contractDateStart: [this.dateStart, [Validators.required]],
        contractDateEnd: [this.dateEnd, [Validators.required]],
        price: [contract.price, [Validators.required]],
        contractTotal: [contract.contractTotal, [Validators.required]],
        contractContent: [contract.contractContent, [Validators.required, Validators.minLength(10)]],
        contractDeleteFlag: contract.contractDeleteFlag,
        contractImageUrl: new FormControl(contract.contractImageUrl),
        employeeId: 1,
        contractDeposit: [contract.contractDeposit, [Validators.required]],
        contractTaxCode: [contract.contractTaxCode, [Validators.required]],
        customerId: [1, [Validators.required]],
        spaceId: [1, [Validators.required]],
        checkFlag:0
      });
    });
  }

  ngOnInit(): void {
  }

  get contractImageUrl() {
    return this.contractForm.get('contractImageUrl');
  }

  updateContract(id: number) {
    const contract = this.contractForm.value;
    console.log(id);
    this.contractService.updateContract(id, contract).subscribe(() => {
      this.callToast();
      this.router.navigate(['contract/list']);
    }, e => {
      console.log(e);
      this.checkCode  = true;
    });
  }

  cancel() {
    alert('Thay đổi chưa được lưu !');
    this.router.navigate(['contract/list']);
  }


  private callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Chỉnh sửa thành công',
      showConfirmButton: false,
      timer: 2000
    });
  }



  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
    const nameImg = this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.loading = true;
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.contractForm.patchValue({contractImageUrl: url});
          this.contract.contractImageUrl = url;
          this.loading = false;
        });
      })
    ).subscribe();
  }
}
