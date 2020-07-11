import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss']
})
export class UpdateMessageComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @Input() messageKey: string;
  @Input() messageValue: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
