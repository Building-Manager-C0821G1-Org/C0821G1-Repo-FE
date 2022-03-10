import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpaceRoutingModule} from './space-routing.module';
import {SpaceListComponent} from './space-list/space-list.component';
import {SpaceCreateComponent} from './space-create/space-create.component';
import {SpaceEditComponent} from './space-edit/space-edit.component';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-bootstrap-spinner';
import { SpaceDeleteComponent } from './space-delete/space-delete.component';
import {ReactiveFormsModule} from '@angular/forms';


// @ts-ignore
@NgModule({
  declarations: [SpaceListComponent, SpaceCreateComponent, SpaceEditComponent, SpaceDeleteComponent],
  exports: [
    SpaceListComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    NgbPaginationModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgbDropdownModule

  ]
})
export class SpaceModule {
}
