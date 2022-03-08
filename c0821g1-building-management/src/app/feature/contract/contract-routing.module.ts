import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContractListComponent} from './contract-list/contract-list.component';
import {ContractEditComponent} from './contract-edit/contract-edit.component';
import {ContractCreateComponent} from './contract-create/contract-create.component';
import {UploadFileComponent} from './upload-file/upload-file.component';


const routes: Routes = [
  {
    path: 'list' , component: ContractListComponent
  },
  {
    path: 'edit/:id', component: ContractEditComponent
  },
  {
    path: 'create', component: ContractCreateComponent
  },
  {
    path: 'file', component: UploadFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
