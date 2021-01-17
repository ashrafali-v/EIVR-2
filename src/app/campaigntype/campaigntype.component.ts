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
        audioFile:1
      },
      {
        name:"test2",
        defaultMessage:"msg2",
        audioFile:1
      },
      {
        name:"test3",
        defaultMessage:"msg3",
        audioFile:1
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
