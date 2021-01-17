import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaigntypeComponent } from './campaigntype.component';

const routes: Routes = [{ path: '', component: CampaigntypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaigntypeRoutingModule { }
