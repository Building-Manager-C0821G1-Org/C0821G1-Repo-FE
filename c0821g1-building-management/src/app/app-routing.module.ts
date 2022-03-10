import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./feature/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'floors',
    loadChildren: () => import('./feature/floors/floor.module').then(module => module.FloorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
