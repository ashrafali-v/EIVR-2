import { Component, OnInit,Input,ViewChild,ElementRef} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-arfile',
  templateUrl: './create-arfile.component.html',
  styleUrls: ['./create-arfile.component.scss']
})
export class CreateArfileComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @ViewChild('arAudio') arAudio: ElementRef;
  audioFiles:any = [];
  audSrc = '';
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  createARFileAction(formData: any){
    console.log(formData);
    
  }
  audFileSelected(event: any) {
    console.log(event.target.files);
    
    if (event.target.files && event.target.files[0]) {
      this.audSrc = URL.createObjectURL(event.target.files[0]);
      this.arAudio.nativeElement.src = this.audSrc;
    }
  }

}
