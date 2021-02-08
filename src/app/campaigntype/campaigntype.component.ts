import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CreateNotificationTypeComponent} from '../modals/create-notification-type/create-notification-type.component'
@Component({
  selector: 'app-campaigntype',
  templateUrl: './campaigntype.component.html',
  styleUrls: ['./campaigntype.component.scss']
})
export class CampaigntypeComponent implements OnInit {
  notificationTypes:any = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.notificationTypes = [
      {
        name:"test1",
        defaultMessage:"msg1",
        audioFile:{name:"Audio1",campaignType:"Type1",url:"url1"},
        type:"type1"
      },
      {
        name:"test2",
        defaultMessage:"msg2",
        audioFile:{name:"Audio2",campaignType:"Type2",url:"url2"},
        type:"type2"
      },
      {
        name:"test3",
        defaultMessage:"msg3",
        audioFile:{name:"Audio3",campaignType:"Type3",url:"url3"},
        type:"type3"
      }
    ]
  }
  createNotificationType(){
    const messageInfoModalRef = this.modalService.open(CreateNotificationTypeComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "xl",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "Create Notification Type123";
    messageInfoModalRef.componentInstance.modalDescription = "You can create a notification type";
  }
}
