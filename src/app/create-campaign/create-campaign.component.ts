import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CreateCampaignModalComponent} from '../modals/create-campaign-modal/create-campaign-modal.component'
@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {
  campaigns:any = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.campaigns = [
      {
        name:"test1",
        notificationType:"notif1",
        startDate:'12/01/2020',
        endDate:"12/22/2020",
        defaultMessage:"msg1",
        audioFile:1
      },
      {
        name:"test2",
        notificationType:"notif2",
        startDate:'12/01/2020',
        endDate:"12/22/2020",
        defaultMessage:"msg2",
        audioFile:2
      },
      {
        name:"test3",
        notificationType:"notif3",
        startDate:'12/01/2020',
        endDate:"12/22/2020",
        defaultMessage:"msg3",
        audioFile:3
      }
    ]
  }
  createCampaign(){
    const messageInfoModalRef = this.modalService.open(CreateCampaignModalComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "xl",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "Create Notification Type";
    messageInfoModalRef.componentInstance.modalDescription = "You can create a notification type";
  }

}
