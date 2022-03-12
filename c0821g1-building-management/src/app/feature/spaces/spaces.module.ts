import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpacesRoutingModule} from './spaces-routing.module';
import {SpaceListComponent} from './space-list/space-list.component';
import {SpaceCreateComponent} from './space-create/space-create.component';
import {SpaceDeleteComponent} from './space-delete/space-delete.component';
import {SpaceEditComponent} from './space-edit/space-edit.component';
import {NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxSpinnerModule} from 'ngx-bootstrap-spinner';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SpaceListComponent, SpaceCreateComponent, SpaceDeleteComponent, SpaceEditComponent],
  imports: [
    CommonModule,
    SpacesRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgxSpinnerModule
  ]
})
export class SpacesModule {
}
