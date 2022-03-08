import {Component, OnInit} from '@angular/core';
import {Space} from '../../../model/space';
import {Employee} from '../../../model/employee';
import {Customer} from '../../../model/customer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../service/contract/contract.service';
import {SpaceService} from '../../../service/space/space.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css']
})
export class ContractEditComponent implements OnInit {

  contractForm: FormGroup;
  spaces: Space[];
  employees: Employee[];
  customers: Customer[];
  id: number;
  dateStart: string;
  dateEnd: string;


  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private spaceService: SpaceService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private  datepipe: DatePipe) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getContract(this.id);
    });

    this.spaces = spaceService.spaces;
    this.employees = employeeService.employees;
    this.customers = customerService.customers;


  }


  getContract(id: number) {
    return this.contractService.findById(id).subscribe(contract => {
      this.dateStart = this.datepipe.transform(contract.contractDateStart, 'yyyy-MM-dd');
      this.dateEnd = this.datepipe.transform(contract.contractDateEnd, 'yyyy-MM-dd');

      // @ts-ignore
      const date1 = new Date(contract.contractDateStart);
      // @ts-ignore
      const date2 = new Date(contract.contractDateEnd);
      const month = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 30);
      // @ts-ignore
      contract.contractExpired = Math.round(month) ;
      // console.log('Expired' + contract.contractExpired);

      console.log('Image' + contract.contractImageUrl);


      this.contractForm = this.fb.group({
        contractId: contract.contractId,
        contractExpired: [contract.contractExpired, [Validators.required]],
        contractDateStart: [this.dateStart, [Validators.required]],
        contractDateEnd: [this.dateEnd, [Validators.required]],
        price: [contract.price, [Validators.required]],
        contractTotal: [contract.contractTotal, [Validators.required]],
        contractContent: [contract.contractContent, [Validators.required, Validators.minLength(10)]],
        contractDeleteFlag: contract.contractDeleteFlag,
        contractImageUrl: contract.contractImageUrl,
        employeeId: 1,
        contractDeposit: [contract.contractDeposit, [Validators.required]],
        contractTaxCode: [contract.contractTaxCode, [Validators.required]],
        customerId: [contract.customerId, [Validators.required]],
        spaceId: [contract.spaceId, [Validators.required]]
      });
    });
  }

  ngOnInit(): void {
  }

  updateContract(id: number) {
    const contract = this.contractForm.value;
    console.log(id);
    this.contractService.updateContract(id, contract).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigate(['contract/list']);
    }, e => {
      console.log(e);
    });
  }

  cancel() {
    alert('Thay đổi chưa được lưu !');
    this.router.navigate(['contract/list']);
  }
}
