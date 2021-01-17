import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
@Component({
  selector: 'app-arfile-upload',
  templateUrl: './arfile-upload.component.html',
  styleUrls: ['./arfile-upload.component.scss']
})
export class ArfileUploadComponent implements OnInit {
  @ViewChild('arAudio') arAudio: ElementRef;
  audioFiles:any = [];
  audSrc = '';
  file: File;
  constructor() { }

  ngOnInit(): void {
    this.audioFiles = [
      {name:'audio1',url:'adiourl1'},
      {name:'audio2',url:'adiourl2'},
      {name:'audio3',url:'adiourl3'},
      {name:'audio4',url:'adiourl4'}
    ]
  }
  audFileSelected(event: any) {
    console.log(event.target.files);
    
    if (event.target.files && event.target.files[0]) {
      this.audSrc = URL.createObjectURL(event.target.files[0]);
      this.arAudio.nativeElement.src = this.audSrc;
    }
  }
}
