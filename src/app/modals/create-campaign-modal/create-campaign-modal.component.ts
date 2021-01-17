import { Component, OnInit,Input,ViewChild} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-campaign-modal',
  templateUrl: './create-campaign-modal.component.html',
  styleUrls: ['./create-campaign-modal.component.scss']
})
export class CreateCampaignModalComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @ViewChild('createCampaign') createCampaign: NgForm;
  audioUrl:any = '';
  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit(): void {
  }
  createCampaignAction(formData: any){
    console.log(formData);
    this.audioUrl = formData.campaignAudioFile;
  }
}
