import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FloorsListComponent} from './floors-list/floors-list.component';
import {AuthGuard} from '../../helpers/auth.guard';


const routes: Routes = [
  {
    path: 'list', component: FloorsListComponent , canActivate: [AuthGuard],
    data: {
      roles: {expectedRole: ['ADMIN', 'EMPLOYEE']}
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorRoutingModule { }
