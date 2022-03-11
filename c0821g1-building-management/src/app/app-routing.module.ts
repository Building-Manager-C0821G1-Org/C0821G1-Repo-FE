import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () => import('./feature/employee/employee.module').then(module => module.EmployeeModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./feature/user/user.module').then(module => module.UserModule)
  }, {
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
    path: 'contract',
    loadChildren: () => import('./feature/contract/contract.module').then(module => module.ContractModule)
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




