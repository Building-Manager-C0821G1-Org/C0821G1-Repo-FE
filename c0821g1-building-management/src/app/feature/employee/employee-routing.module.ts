import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDeleteComponent} from "./employee-delete/employee-delete.component";
import {ErrorsEmployeeComponent} from "./errors-employee/errors-employee.component";


const routes: Routes = [{
  path: 'list',
  component: EmployeeListComponent
}, {
  path: 'delete/:id',
  component: EmployeeDeleteComponent
},{
  path:'error',
  component: ErrorsEmployeeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
