import { Component,OnInit,HostListener } from '@angular/core';
import { CommonAppService } from '../app/services/common-app.service';
import { Router }  from "@angular/router";
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
  toggleClass:boolean = true;
  screenWidth: number;
  responsiveStatus:boolean = true;
  isLoggedIn:boolean = false;
  constructor(private sharedService: CommonAppService,public router: Router) { 
    // this.sharedService.getComponentStatus().subscribe(
    //   data => {
    //     this.isHeader = data.header;
    //     this.isAside = data.aside;
    //     this.isFooter = data.footer;
    //   });
    //   this.sharedService.getMenuToggle().subscribe(data => {
    //     this.toggleClass = data;
    //   });
    //   this.sharedService.getLoggedInStatus().subscribe(data => {
    //     this.isLoggedIn = data;
    //   });
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 970) {
      this.responsiveStatus = false;
    }else{
      this.responsiveStatus = true;
    }
  }
  ngOnInit(): void {
  }
}
