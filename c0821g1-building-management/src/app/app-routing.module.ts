import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
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


=======

const routes: Routes = [
  {path: 'employee', loadChildren: () => import('./feature/employee/employee.module').then(module => module.EmployeeModule)}
];

>>>>>>> employee-create-BaoNHG
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
<<<<<<< HEAD

export class AppRoutingModule {
}

=======
export class AppRoutingModule { }
>>>>>>> employee-create-BaoNHG
