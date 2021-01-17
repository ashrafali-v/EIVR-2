import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArfileUploadComponent } from './arfile-upload.component';

const routes: Routes = [{ path: '', component: ArfileUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArfileUploadRoutingModule { }
