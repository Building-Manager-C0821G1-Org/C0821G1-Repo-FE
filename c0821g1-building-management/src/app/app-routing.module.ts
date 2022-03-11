import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {BodyComponent} from './shared/body/body.component';


const routes: Routes = [
  {
    path: 'floors',
    loadChildren: () => import('./feature/floors/floor.module.js').then(module => module.FloorModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./feature/customer/customer.module').then(module => module.CustomerModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./feature/security/security.module').then(module => module.SecurityModule)
  },
  {
    path: 'home',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

