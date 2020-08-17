import { Component, OnInit,Input,ViewChild,Output,EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { CommonAppService } from '../../services/common-app.service';

@Component({
  selector: 'app-create-toggle',
  templateUrl: './create-toggle.component.html',
  styleUrls: ['./create-toggle.component.scss']
})
export class CreateToggleComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @ViewChild('createToggleForm') loginForm: NgForm;
  @Output() emitService = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,private sharedService: CommonAppService) { }

  ngOnInit(): void {
  }
  createToggle(value:any){
    this.sharedService.saveToggle(value).subscribe(data=>{
      this.emitService.next(value)
    });
  }

}
