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
    contractTaxCode: ['',[Validators.required]],
    contractDeposit: ['',[Validators.required]],
    contractDeleteFlag: false,
    employeeId: 1,
    customerId: ['', [Validators.required]],
    spaceId: ['', [Validators.required]]
  });

  spaces: Space[];
  employees: Employee[];
  customers: Customer[];

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private spaceService: SpaceService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private router: Router,
              ) {
    this.spaces = spaceService.spaces;
    this.employees = employeeService.employees;
    this.customers = customerService.customers;
  }

  ngOnInit(): void {
  }

  submit() {
    const contract = this.contractsForm.value;
    console.log(contract.customerId);
    console.log(contract.spaceId);
    console.log(contract.employeeId);
    // customer.id = parseInt(customer.id);
    // console.log(customer.ngaySinh);
    this.contractService.saveContract(contract).subscribe(() => {
      this.contractsForm.reset();
      alert('Thêm mới thành công');
      this.router.navigate(['contract/list']);
    }, err => {
      console.log(err);
    });
  }

}
