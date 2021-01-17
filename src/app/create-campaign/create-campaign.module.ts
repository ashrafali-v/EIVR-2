import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCampaignRoutingModule } from './create-campaign-routing.module';
import { CreateCampaignComponent } from './create-campaign.component';


@NgModule({
  declarations: [CreateCampaignComponent],
  imports: [
    CommonModule,
    CreateCampaignRoutingModule
  ]
})
export class CreateCampaignModule { }
