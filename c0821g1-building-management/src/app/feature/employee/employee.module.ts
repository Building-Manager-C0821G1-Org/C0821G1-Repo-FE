import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeEditPasswordComponent} from './employee-edit-password/employee-edit-password.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import { ErrorsEmployeeComponent } from './errors-employee/errors-employee.component';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeDeleteComponent, EmployeeCreateComponent, EmployeeDetailComponent, EmployeeEditComponent, EmployeeEditPasswordComponent, ErrorsEmployeeComponent],
  exports: [
    EmployeeListComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule
  ]
})
export class EmployeeModule {
}
