import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../../service/contract/contract.service';
import {Router} from '@angular/router';
import {SpaceService} from '../../../service/space/space.service';
import {Space} from '../../../model/space';
import {EmployeeService} from '../../../service/employee/employee.service';
import {Employee} from '../../../model/employee';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {


  contractsForm: FormGroup = this.fb.group({
    contractId: '',
    contractExpired: ['', [Validators.required]],
    contractDateStart: ['', [Validators.required]],
    contractDateEnd: ['', [Validators.required]],
    price: ['', [Validators.required]],
    contractTotal: ['', [Validators.required]],
    contractContent: ['', [Validators.required]],
    contractTaxCode: ['', [Validators.required]],
    contractDeposit: ['', [Validators.required]],
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

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private spaceService: SpaceService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private router: Router,
              private  datepipe: DatePipe
  ) {
    this.spaces = spaceService.spaces;
    this.employees = employeeService.employees;
    this.customers = customerService.customers;
  }

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractsForm.value;

    this.dateStart = contract.contractDateStart;
    this.dateEnd = contract.contractDateEnd;
    const date1 = new Date(contract.contractDateStart);
    const date2 = new Date(contract.contractDateEnd);
    const month = (date2.getTime() - date1.getTime()) / (1000 * 3600 * 24 * 30);
    // @ts-ignore
    contract.contractExpired = Math.round(month) ;
    console.log('Expired' + contract.contractExpired);

    this.contractService.saveContract(contract).subscribe(() => {
      this.contractsForm.reset();
      alert('Thêm mới thành công');
      this.router.navigate(['contract/list']);
    }, err => {
      console.log(err);
    });
  }

}
