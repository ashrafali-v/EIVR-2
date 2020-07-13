import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.scss']
})
export class DeleteMessageComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @Input() messageKey: string;
  @Output() emitService = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  deleteMessage(msg:any) {
    this.emitService.next(msg);
  }
}
