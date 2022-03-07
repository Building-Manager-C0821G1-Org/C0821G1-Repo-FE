// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer/customer.service';
// @ts-ignore
import {Subscription} from 'rxjs';
import {CustomerDeleteComponent} from "../customer-delete/customer-delete.component";
// @ts-ignore
import {MatDialog} from "@angular/material/dialog";


// @ts-ignore
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  idDelete: number;
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
    this.search();
    this.customerService.getAllCustomer().subscribe(value => {
      this.customers = value;
      // console.log(value);
    }, error => {
      this.message = 'Không tìm thấy.';
    });
  }

// VyLTT - delete customer
  delete(id: number) {
    this.customerService.getCustomerById(id).subscribe(value => {
        this.customerDelete = value;
        console.log(this.customerDelete);
      }
    );
  }

  // deleteCustomer() {
  //   this.customerService.deleteCustomer(this.idDelete).subscribe(value => {
  //     }, error => {
  //     },
  //     () => {
  //       this.customerService.getAllCustomer().subscribe(value => {
  //         this.customers = value;
  //       });
  //     });
  // }

  // VyLTT - search customer
  search() {
    console.log(this.customer_name);
    if (this.customer_name === '' && this.customer_email === '' && this.customer_identify_number === '' && this.customer_phone === '') {
      this.flag = false;
      this.customerService.search(this.page, this.customer_name, this.customer_identify_number, this.customer_phone, this.customer_email)
        .subscribe(data => {
            console.log(data);
            if (data !== null) {
              // console.log('content 0' + data.content);
              this.customers = data.content;
              // console.log('content 1' + this.customers);
              this.totalPages = data.totalPages;
              this.size = data.size;
              this.page = data.pageable.pageNumber;
              this.message = '';
            } else {
              this.message = 'Không tìm thấy !!!';
            }
          }
        );
    } else {
      console.log(this.customer_name);
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
              this.message = 'Không tìm thấy !!!';
            }
            this.flag = true;
          });
      }
    }
  }

  onSubmit() {
    this.flag = false;
    console.log(this.customer_name);
    this.search();
  }

  // VyLTT - Pagination
  previousClick(index) {
    this.page = this.page - index;
    this.ngOnInit();
  }

  findPagination(value: number) {
    this.page = value - 1;
    this.ngOnInit();
  }

  nextClick(index) {
    this.page = this.page + index;
    // console.log('next pay ' + this.page);
    this.ngOnInit();
  }

  openDialog(customerObjId: number) {
    // this.customerService.getCustomerById(customerId).subscribe(customerData => {
    //   console.log('!array' + customerData);
    // const dialogRef = this.dialogDelete.open(CustomerDeleteComponent, {
    //   width: '500px',
    //   data: customerData,
    //   disableClose: true
    // });
    console.log(customerObjId);
    this.dialogDelete.open(CustomerDeleteComponent, {
      data: customerObjId,
      width: '30%'
    }).afterClosed().subscribe((value) => {
      if (value === 'delete') {
        this.ngOnInit();
      }
    });


    //   dialogRef.afterClosed().subscribe(value => {
    //     console.log('Hộp thoại đã được đóng');
    //     this.ngOnInit();
    //   });
    // });
  }
}

