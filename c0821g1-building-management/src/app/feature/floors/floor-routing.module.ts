import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FloorsListComponent} from './floors-list/floors-list.component';


const routes: Routes = [
  {path: 'list', component: FloorsListComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloorRoutingModule { }
