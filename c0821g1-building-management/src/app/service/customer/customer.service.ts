import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customers: Customer[] = [
    {
      id: 1,
      name: 'Nguyen Van Dong'
    },
    {
      id: 2,
      name: 'Nam'
    },
    {
      id: 3,
      name: 'Long'
    },
  ];
}
