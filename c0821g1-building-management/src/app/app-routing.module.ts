import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {BodyComponent} from './shared/body/body.component';


const routes: Routes = [
  {
    path: 'security',
    loadChildren: () => import('./feature/security/security.module').then(module => module.SecurityModule)
  },
  {
    path: 'floor',
    loadChildren: () => import('./feature/floor/floor.module').then(module => module.FloorModule)
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
