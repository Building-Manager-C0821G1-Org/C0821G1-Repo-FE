
import {Injectable} from '@angular/core';
import {Customer} from '../../model/contract/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customers: Customer[] = [
  ];
}
