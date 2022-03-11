import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdatePasswordComponent} from './update-password/update-password.component';




const routes: Routes = [
  {path: 'update/:id', component: UpdatePasswordComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
