import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.scss']
})
export class ViewLogComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @Input() logs: any;
  constructor(public activeModal: NgbActiveModal) { }
  ngOnInit(): void {
  }

}
