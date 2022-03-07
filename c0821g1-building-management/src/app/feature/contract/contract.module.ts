import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [ContractListComponent, ContractCreateComponent, ContractDeleteComponent, ContractEditComponent],
    exports: [
        ContractListComponent
    ],
    imports: [
        CommonModule,
        ContractRoutingModule,
       FormsModule,
      ReactiveFormsModule
    ]
})
export class ContractModule { }
