import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';


@NgModule({
<<<<<<< HEAD
  declarations: [CustomerListComponent, CustomerDeleteComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
=======
    declarations: [CustomerListComponent, CustomerDeleteComponent],
    exports: [
        CustomerListComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ]
>>>>>>> 0dc14f8cd3b62530d64eb47081788dc97320edf9
})
export class CustomerModule { }
