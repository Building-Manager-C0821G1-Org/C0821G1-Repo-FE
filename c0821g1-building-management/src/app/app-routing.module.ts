import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChangePasswordComponent} from './feature/user/change-password/change-password.component';


const routes: Routes = [
  {
    path: 'user/:id',
    component: ChangePasswordComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
