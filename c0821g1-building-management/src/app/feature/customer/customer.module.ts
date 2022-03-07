import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';


@NgModule({
    declarations: [CustomerListComponent, CustomerDeleteComponent],
    exports: [
        CustomerListComponent
    ],
    imports: [
        CommonModule,
        CustomerRoutingModule
    ]
})
export class CustomerModule { }
