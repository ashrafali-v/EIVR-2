import { Component, OnInit,Input,ViewChild,ElementRef,Pipe, PipeTransform } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Pipe({
  name: 'sanitizerUrl'
})
export class SanitizerUrlPipe implements PipeTransform {

  constructor (
    private sanitize: DomSanitizer
  ) {}

  transform(value: string): SafeUrl {
    return this.sanitize.bypassSecurityTrustUrl(value);
  }
}
@Component({
  selector: 'app-create-notification-type',
  templateUrl: './create-notification-type.component.html',
  styleUrls: ['./create-notification-type.component.scss']
})
export class CreateNotificationTypeComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @ViewChild('createNotificationForm') createNotificationForm: NgForm;
  @ViewChild('figAudio') figAudio: ElementRef; // audio tag reference
  audSrc = '';
  audioUrl:any = '';
  file: File;
  audioFiles:any = [];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.audioFiles = [
      {name:'audio1',url:'adiourl1'},
      {name:'audio2',url:'adiourl2'},
      {name:'audio3',url:'adiourl3'},
      {name:'audio4',url:'adiourl4'}
    ]
  }
  createNotification(formData: any){
    console.log(formData);
    var formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append('file', this.file);
    console.log(formdata);
    
    
  }
  handleFileInput(files: FileList){
    console.log(files);
    this.file = files[0];
    console.log(this.file);
    this.audioUrl = "Desktop/"+files[0].name;
  }
  audFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.audSrc = URL.createObjectURL(event.target.files[0]);
      this.file = event.target.files[0];
      this.figAudio.nativeElement.src = this.audSrc;
    }
  }
}
