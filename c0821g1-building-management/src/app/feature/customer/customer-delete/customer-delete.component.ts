import {Component, Inject, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Customer} from '../../../model/customer';
import {Subscription} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customers: Customer;
  private subscription: Subscription;
  customerCode: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
              private customerService: CustomerService,
              public dialogRef: MatDialogRef<CustomerDeleteComponent>
  ) {
    console.log("1a")
    }

  ngOnInit(): void {
    console.log("1a")
    this.customerService.getCustomerById(this.data).subscribe(value => {
      this.customers = value;
      this.customerCode = this.customers.customerCode;
      console.log(this.customers);
    }, error1 => console.log("a"));
    // this.customerForm = this.fb.group({
    //   customerId: '',
    //   customerCode: '',
    //   customerName: '',
    //   customerIdentifyNumber: '',
    //   customerEmail: '',
    //   customerPhone: '',
    //   customerDateOfBirth: '',
    //   customerAddress: '',
    //   customerStatus: '',
    //   customerDeleteFlag: ''
    // });
    // if (this.data) {
    //   this.customerForm.controls.customerId.setValue(this.data.customerId);
    //   this.customerForm.controls.customerCode.setValue(this.data.customerCode);
    // }
  }

  deleteCustomer(customerId) {
    this.subscription = this.customerService.getCustomerById(customerId).subscribe(data => {
      this.dialogRef.close();
      this.dialogRef.close('delete');
    });
  }

  onNoClick() {
    this.dialogRef.close('delete');
  }
}
