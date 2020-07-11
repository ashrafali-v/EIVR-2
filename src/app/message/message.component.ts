import { Component, OnInit } from '@angular/core';
import {CommonAppService} from '../services/common-app.service';
import { NgbModal, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import {UpdateMessageComponent} from '../modals/update-message/update-message.component'
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messages:any;
  getAllMessagesLoader:boolean = true;
  currentPage: any = 1;
  pageSize: any = 5;
  constructor(private sharedService: CommonAppService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.sharedService.getAllMessages().subscribe(data=>{
      this.getAllMessagesLoader = false;
      this.messages = data;
    });
  }
  editMessage(key:any){
    console.log(key);
    this.sharedService.getMessage(key).subscribe(data=>{
      console.log(data);
      const updateMessageModalRef = this.modalService.open(UpdateMessageComponent, {
        ariaLabelledBy: "modal-basic-title",
        size: "lg",
        scrollable: true,
        backdrop: 'static'
      });
      updateMessageModalRef.componentInstance.modalTitle = "Edit message";
      updateMessageModalRef.componentInstance.modalDescription = "Edit message description";
      updateMessageModalRef.componentInstance.messageKey = data[0].messageKey;
      updateMessageModalRef.componentInstance.messageValue = data[0].messageText;
    });
  }
}
