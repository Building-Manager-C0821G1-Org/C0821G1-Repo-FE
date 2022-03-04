import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // VyLTT
  private API_URL = 'http://localhost:8080/customer';

  constructor(private httpClient: HttpClient) {
  }

  // VyLTT - get by id
  getCustomerById(customerId: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL + '/' + customerId);
  }

  // VyLTT - get list customer
  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL + '/list');
  }

  // VyLTT - search customer by name, identify number, email, phone
  findCustomer(page, customerName, customerIdentifyNumber, customerPhone, customerEmail): Observable<any> {
    return this.httpClient.get(this.API_URL + '/customer-list?page=' + page +
      '&name=' + customerName +
      '&identify=' + customerIdentifyNumber +
      '&phone=' + customerPhone +
      '&email=' + customerEmail);
  }

  // VyLTT - get delete customer
  deleteCustomer(deleteId: number) {
    return this.httpClient.delete<void>(this.API_URL + '/' + deleteId);
  }
}
