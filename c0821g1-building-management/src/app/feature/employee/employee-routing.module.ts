import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


const routes: Routes = [
  {path: 'detail/:id', component: EmployeeDetailComponent},
  {path: 'list', component: EmployeeListComponent}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
