<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Subscription} from "rxjs";
import Swal from 'sweetalert2';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer/customer.service';
>>>>>>> b43654434cbd623089bc9fc54f831185e7789ea7

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  customer: Customer;
  private subscription: Subscription;

  constructor(
    private customerService: CustomerService,
    private matDialogRef: MatDialogRef<CustomerDeleteComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {
    this.customer = this.data;
    console.log(this.customer.customerName);

  }
>>>>>>> b43654434cbd623089bc9fc54f831185e7789ea7

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  deleteCustomer() {
    this.subscription = this.customerService.deleteCustomerById(this.customer.customerId).subscribe(data => {
      this.matDialogRef.close();
      this.callToast();
    });

  }

  onNoClick() {
    this.matDialogRef.close();
  }

  private callToast() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Xóa khách hàng thành công !',
      showConfirmButton: false,
      timer: 2000
    });
  }
>>>>>>> b43654434cbd623089bc9fc54f831185e7789ea7
}
