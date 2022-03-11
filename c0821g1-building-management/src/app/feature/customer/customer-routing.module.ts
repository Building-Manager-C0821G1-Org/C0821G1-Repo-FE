
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {AuthGuard} from '../../helpers/auth.guard';


const routes: Routes = [
  {
    path: 'list', component: CustomerListComponent , canActivate: [AuthGuard],
    data: {
      roles: {expectedRole: ['ADMIN', 'EMPLOYEE']}
    }
  },
  {
    path: 'delete/:id', component: CustomerDeleteComponent , canActivate: [AuthGuard],
    data: {
      roles: {expectedRole: ['ADMIN']}
    }
  },
  {path: 'create', component: CustomerCreateComponent , canActivate: [AuthGuard],
    data: {
      roles: {expectedRole:  ['ADMIN', 'EMPLOYEE']}
    }
  },
  {path: 'edit/:id', component: CustomerEditComponent , canActivate: [AuthGuard],
    data: {
      roles: {expectedRole:  ['ADMIN', 'EMPLOYEE']}
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

