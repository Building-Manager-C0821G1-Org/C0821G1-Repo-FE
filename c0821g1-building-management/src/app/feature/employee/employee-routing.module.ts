import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDeleteComponent} from "./employee-delete/employee-delete.component";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeDetailComponent} from './employee-detail/employee-detail.component'


const routes: Routes = [{
  path: 'list',
  component: EmployeeListComponent
}, {
  path: 'delete/:id',
  component: EmployeeDeleteComponent
},
  {path: 'detail/:id', component: EmployeeDetailComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeeRoutingModule {
}

