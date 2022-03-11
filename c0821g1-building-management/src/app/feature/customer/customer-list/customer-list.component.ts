<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

=======
// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer/customer.service';
// @ts-ignore
import {Subscription} from 'rxjs';
// @ts-ignore
import {MatDialog} from "@angular/material/dialog";
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';


// @ts-ignore
>>>>>>> b43654434cbd623089bc9fc54f831185e7789ea7
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {
  }

=======
  customers: Customer[] = [];
  customerDelete: Customer;
  private subscription: Subscription | undefined;
  page = 0;
  customer_name = '';
  customer_email = '';
  customer_identify_number = '';
  customer_phone = '';
  totalPages: number;
  pageNumber: number;
  size = 0;
  flag = false;
  message: string;

  constructor(private customerService: CustomerService,
              private dialogDelete: MatDialog) {
  }

  ngOnInit(): void {
    this.customerService.search(this.page, this.customer_name, this.customer_identify_number, this.customer_phone, this.customer_email)
      .subscribe(data => {
          console.log(data);
          if (data !== null) {
            this.customers = data.content;
            this.totalPages = data.totalPages;
            this.size = data.size;
            this.page = data.pageable.pageNumber;
            this.message = '';
          }
        }
      );
  }

  // VyLTT - search customer
  search() {
    if (this.customer_name === '' && this.customer_email === '' && this.customer_identify_number === '' && this.customer_phone === '') {
      this.flag = false;
      this.customerService.search(this.page, this.customer_name, this.customer_identify_number, this.customer_phone, this.customer_email)
        .subscribe(data => {
            console.log(data);
            if (data !== null) {
              this.customers = data.content;
              this.totalPages = data.totalPages;
              this.size = data.size;
              this.page = data.pageable.pageNumber;
              this.message = '';
            } else {
              this.message = 'Không tìm thấy khách hàng cần tìm !!!';
            }
          }
        );
    } else {
      if (this.flag === false) {
        this.page = 0;
        this.customerService.search(this.page, this.customer_name, this.customer_identify_number, this.customer_phone, this.customer_email)
          .subscribe(data => {
            if (data !== null) {
              this.customers = data.content;
              this.totalPages = data.totalPages;
              this.size = data.size;
              this.page = data.pageable.pageNumber;
              this.message = '';
            } else {
              this.message = 'Không tìm thấy khách hàng cần tìm !!!';
            }
            this.flag = true;
          });
      }
    }
  }

  onSubmit() {
    this.flag = false;
    this.search();
  }

  // VyLTT - Pagination
  previousClick(index) {
    this.page = this.page - index;
    this.ngOnInit();
  }

  findPagination(value: number) {
    if (value > this.totalPages) {
      this.message = 'Không tìm thấy trang bạn cần tìm !!!';
    } else {
      this.page = value - 1;
      this.ngOnInit();
    }
  }

  nextClick(index) {
    this.page = this.page + index;
    this.ngOnInit();
  }

  openDialog(customerObjId: number) {
    this.customerService.getCustomerById(customerObjId).subscribe(customerData => {
      const dialogRef = this.dialogDelete.open(CustomerDeleteComponent, {
        width: '500px',
        data: customerData,
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(value => {
        this.ngOnInit();
      });
    });
  }
>>>>>>> b43654434cbd623089bc9fc54f831185e7789ea7
}
