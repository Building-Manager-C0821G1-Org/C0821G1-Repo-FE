<<<<<<< HEAD
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

=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';


const routes: Routes = [
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: 'update/:id', component: EmployeeEditComponent}
];
>>>>>>> employee-create-BaoNHG

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD

export class EmployeeRoutingModule {
}

=======
export class EmployeeRoutingModule { }
>>>>>>> employee-create-BaoNHG
