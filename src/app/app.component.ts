import { Component,OnInit } from '@angular/core';
import { CommonAppService } from '../app/services/common-app.service';
import { Router }  from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'EIVR';
  isHeader:boolean = false;
  isAside:boolean = false;
  isFooter:boolean = false;
  toggleClass:boolean = true;
  constructor(private sharedService: CommonAppService,public router: Router) { 
    this.sharedService.getComponentStatus().subscribe(
      data => {
        this.isHeader = data.header;
        this.isAside = data.aside;
        this.isFooter = data.footer;
      });
      this.sharedService.getMenuToggle().subscribe(
        data => {
          this.toggleClass = data;
        });
  }
  ngOnInit(): void {
  }
}
