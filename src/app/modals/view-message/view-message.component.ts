import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.component.html',
  styleUrls: ['./view-message.component.scss']
})
export class ViewMessageComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @Input() messageKey: string;
  @Input() messageValue: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
