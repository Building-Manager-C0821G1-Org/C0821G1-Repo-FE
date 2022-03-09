import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer/customer.service";
import {Subscription} from "rxjs";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {
  customer: Customer;
  private subscription: Subscription;

  constructor(
    private customerService: CustomerService,
    private matDialogRef: MatDialogRef<DeleteCustomerComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {
    this.customer = this.data;
    console.log(this.customer.customerName)

  }

  ngOnInit(): void {
  }

  deleteEmployee() {
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
}
