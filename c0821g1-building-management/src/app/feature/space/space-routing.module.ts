import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SpaceListComponent} from './space-list/space-list.component';


const routes: Routes = [{
  path: 'list',
  component: SpaceListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
