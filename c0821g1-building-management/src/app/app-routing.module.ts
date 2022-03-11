import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'floors',
    loadChildren: () => import('./feature/floors/floor.module.js').then(module => module.FloorModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./feature/security/security.module').then(module => module.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
