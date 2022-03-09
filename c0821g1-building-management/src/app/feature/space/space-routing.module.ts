import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import {SpaceListComponent} from './space-list/space-list.component';


const routes: Routes = [{
  path: 'list',
  component: SpaceListComponent
}];
=======
import {SpaceCreateComponent} from './space-create/space-create.component';
import {SpaceListComponent} from './space-list/space-list.component';
import {SpaceEditComponent} from './space-edit/space-edit.component';


const routes: Routes = [
  {path: 'create', component: SpaceCreateComponent},
  {path: 'list', component: SpaceListComponent},
  {path: 'edit/:id', component: SpaceEditComponent}
];
>>>>>>> de364f6cdc1153bea887e03e5de08db910f921c0

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
