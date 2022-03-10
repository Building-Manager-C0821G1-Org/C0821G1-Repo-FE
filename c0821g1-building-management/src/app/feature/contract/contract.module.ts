import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractDeleteComponent } from './contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract-edit/contract-edit.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgxSpinnerModule} from 'ngx-bootstrap-spinner';




@NgModule({
  declarations: [ContractListComponent, ContractCreateComponent, ContractDeleteComponent, ContractEditComponent],
  exports: [
    ContractListComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxSpinnerModule
  ],
  providers: [],
})
export class ContractModule { }

