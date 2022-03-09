import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

<<<<<<< HEAD
import {SpaceRoutingModule} from './space-routing.module';
import {SpaceListComponent} from './space-list/space-list.component';
import {SpaceCreateComponent} from './space-create/space-create.component';
import {SpaceEditComponent} from './space-edit/space-edit.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-bootstrap-spinner';
import { SpaceDeleteComponent } from './space-delete/space-delete.component';
=======
import { SpaceRoutingModule } from './space-routing.module';
import { SpaceListComponent } from './space-list/space-list.component';
import { SpaceCreateComponent } from './space-create/space-create.component';
import { SpaceEditComponent } from './space-edit/space-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
>>>>>>> de364f6cdc1153bea887e03e5de08db910f921c0


@NgModule({
  declarations: [SpaceListComponent, SpaceCreateComponent, SpaceEditComponent, SpaceDeleteComponent],
  exports: [
    SpaceListComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule,
<<<<<<< HEAD
    NgbPaginationModule,
    NgxSpinnerModule
=======
    ReactiveFormsModule
>>>>>>> de364f6cdc1153bea887e03e5de08db910f921c0
  ]
})
export class SpaceModule {
}
