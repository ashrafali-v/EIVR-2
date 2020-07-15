import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { CommonAppService } from '../services/common-app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isCollapsed :any;
  menuToggleStatus:boolean = true;
  constructor(private router: Router,private sharedService: CommonAppService) { }

  ngOnInit(): void {
  }
  signOut(){
    this.sharedService.setComponentStatus(false,false,false);
    this.router.navigate(['/login'])
  }
  toggleMenu(){
    this.menuToggleStatus = !this.menuToggleStatus;
    this.sharedService.setMenuToggle(this.menuToggleStatus);
  }
}
