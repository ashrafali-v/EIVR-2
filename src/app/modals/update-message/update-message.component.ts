import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.scss']
})
export class UpdateMessageComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
