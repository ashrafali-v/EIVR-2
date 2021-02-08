import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CreateArfileComponent} from '../modals/create-arfile/create-arfile.component'
@Component({
  selector: 'app-arfile-upload',
  templateUrl: './arfile-upload.component.html',
  styleUrls: ['./arfile-upload.component.scss']
})
export class ArfileUploadComponent implements OnInit {
  audioFiles:any = [];
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.audioFiles = [
      {name:'audio1',campaignType:"Type1",url:'adiourl1'},
      {name:'audio2',campaignType:"Type3",url:'adiourl2'},
      {name:'audio3',campaignType:"Type1",url:'adiourl3'},
      {name:'audio4',campaignType:"Type2",url:'adiourl4'}
    ]
  }
  createARFile(){
    const messageInfoModalRef = this.modalService.open(CreateArfileComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "xl",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "Create Notification Type";
    messageInfoModalRef.componentInstance.modalDescription = "You can create a notification type";
  }
}
