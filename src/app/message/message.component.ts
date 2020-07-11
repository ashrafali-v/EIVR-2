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
  constructor(private sharedService: CommonAppService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.sharedService.getAllMessages().subscribe(data=>{
      this.messages = data;
    });
  }
  editMessage(key:any){
    console.log(key);
    this.sharedService.getMessage(key).subscribe(data=>{
      console.log(data);
      const editPointPlanModalRef = this.modalService.open(UpdateMessageComponent, {
        ariaLabelledBy: "modal-basic-title",
        size: "lg",
        scrollable: true,
        backdrop: 'static'
      });
    });
  }
}
