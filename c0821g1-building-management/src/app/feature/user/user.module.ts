import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { UpdatePasswordComponent } from './update-password/update-password.component';


@NgModule({
  declarations: [ UpdatePasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UserModule { }
