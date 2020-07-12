import { Component, OnInit,OnDestroy } from '@angular/core';
import {CommonAppService} from '../services/common-app.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SubSink } from 'subsink';
import { ToastrService } from 'ngx-toastr';
import {UpdateMessageComponent} from '../modals/update-message/update-message.component'
import { ViewMessageComponent } from '../modals/view-message/view-message.component';
import { DeleteMessageComponent } from '../modals/delete-message/delete-message.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit,OnDestroy {
  messages:any;
  getAllMessagesLoader:boolean = true;
  currentPage: any = 1;
  pageSize: number = 10;
  private observableSubscriptions = new SubSink();
  constructor(private sharedService: CommonAppService,private modalService: NgbModal,public toastr: ToastrService) { }

  ngOnInit(): void {
    this.observableSubscriptions.add(this.sharedService.getAllMessages().subscribe(data=>{
      this.getAllMessagesLoader = false;
      this.messages = data;
    }));
  }
  ngOnDestroy() {
    this.observableSubscriptions.unsubscribe();
  }
  editMessage(message:any,currentPage:number,index:number){
    console.log(message);
    this.observableSubscriptions.add(this.sharedService.getMessage(message.messageKey).subscribe(data=>{
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
      updateMessageModalRef.componentInstance.emitService.subscribe((result) => {
        if (result) {
          message.messageText = result;
          updateMessageModalRef.close();
          this.sharedService.saveMessage(message).subscribe(data=>{
            console.log(data);
            this.toastr.success("Message updated successfully","Success");
          },err=>{
            console.log(err);
            this.toastr.error('Message update failed', 'Error');
          });
        }
      }, (reason) => {
        console.log(reason);
      });
    }));
  }
  messageInfo(data:any){
    console.log(data);
    const messageInfoModalRef = this.modalService.open(ViewMessageComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "View message";
    messageInfoModalRef.componentInstance.modalDescription = "View message description";
    messageInfoModalRef.componentInstance.messageKey = data.messageKey;
    messageInfoModalRef.componentInstance.messageValue = data.messageText;
    
  }
  deleteMessage(key:any){
    console.log(key);
    const deleteMessageModalRef = this.modalService.open(DeleteMessageComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg",
      scrollable: true,
      backdrop: 'static'
    });
    deleteMessageModalRef.componentInstance.modalTitle = "Delete message";
    deleteMessageModalRef.componentInstance.modalDescription = "Delete message description";
    deleteMessageModalRef.componentInstance.messageKey = key;
    deleteMessageModalRef.componentInstance.emitService.subscribe((result) => {
      if (result) {
        console.log(result);
        deleteMessageModalRef.close();
      }
    }, (reason) => {
      console.log(reason);
    });
  }
}
