import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceCreateComponent } from './space-create/space-create.component';
import { SpaceEditComponent } from './space-edit/space-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [SpaceListComponent, SpaceCreateComponent, SpaceEditComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    ReactiveFormsModule
  ]
})
export class SpaceModule { }
