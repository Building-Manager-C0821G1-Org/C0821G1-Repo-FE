import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../../service/customer/customer.service';
import {Router} from '@angular/router';
import {Customer} from '../../../model/customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {
  customers: Customer[] = [];
  idDelete: number;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }
}
