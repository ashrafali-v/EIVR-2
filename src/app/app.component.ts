import { Component,OnInit } from '@angular/core';
import { CommonAppService } from '../app/services/common-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EIVR';
  isHeader:boolean = true;
  isAside:boolean = true;
  isFooter:boolean = true;
  constructor(private sharedService: CommonAppService) { }
  ngOnInit(): void {

    this.sharedService.getComponentStatus().subscribe(
      data => {
        this.isHeader = data.header;
        this.isAside = data.aside;
        this.isFooter = data.footer;
      });
  }
}
