import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaigntypeRoutingModule } from './campaigntype-routing.module';
import { CampaigntypeComponent } from './campaigntype.component';


@NgModule({
  declarations: [CampaigntypeComponent],
  imports: [
    CommonModule,
    CampaigntypeRoutingModule
  ]
})
export class CampaigntypeModule { }
