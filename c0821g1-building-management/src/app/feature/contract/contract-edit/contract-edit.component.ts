import {Component, OnInit} from '@angular/core';
import {Space} from '../../../model/space';
import {Employee} from '../../../model/employee';
import {Customer} from '../../../model/customer';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ContractService} from '../../../service/contract/contract.service';
import {SpaceService} from '../../../service/space/space.service';
import {EmployeeService} from '../../../service/employee/employee.service';
import {CustomerService} from '../../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

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

  constructor(private fb: FormBuilder,
              private contractService: ContractService,
              private spaceService: SpaceService,
              private employeeService: EmployeeService,
              private customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
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
      console.log(contract.customerId);
      console.log(contract.employeeId);
      console.log(contract.spaceId);
      this.contractForm = this.fb.group({
        contractId: contract.contractId,
        contractExpired: contract.contractExpired,
        contractDateStart: contract.contractDateStart,
        contractDateEnd: contract.contractDateEnd,
        price: contract.price,
        contractTotal: contract.contractTotal,
        contractContent: contract.contractContent,
        contractDeleteFlag: contract.contractDeleteFlag,
        employeeId: contract.employeeId,
        customerId: contract.customerId,
        spaceId: contract.spaceId
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
