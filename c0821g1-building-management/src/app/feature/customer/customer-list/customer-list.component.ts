import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  idDelete: number;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerService.getAllCustomer().subscribe(value => {
      this.customers = value;
      console.log(value);
    }, error => {
      console.log('error');
    });
  }

  delete(id: number) {
    this.idDelete = id;
  }

  deleteCustomer() {
    this.customerService.deleteCustomer(this.idDelete).subscribe(value => {
      }, error => {
      },
      () => {
        this.customerService.getAllCustomer().subscribe(value => {
          this.customers = value;
        });
      });
  }
}
