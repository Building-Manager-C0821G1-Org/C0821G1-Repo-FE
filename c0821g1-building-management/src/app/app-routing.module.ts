import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {
      path: 'employee',
      loadChildren: () => import('./feature/employee/employee.module').then(module => module.EmployeeModule)
    },
    {
      path: 'user',
      loadChildren: () => import('./feature/user/user.module').then(module => module.UserModule)
    },

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



