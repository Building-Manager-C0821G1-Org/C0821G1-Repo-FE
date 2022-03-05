import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDeleteComponent} from "./employee-delete/employee-delete.component";


const routes: Routes = [{
  path: 'list',
  component: EmployeeListComponent
}, {
  path: 'delete/:id',
  component: EmployeeDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}
