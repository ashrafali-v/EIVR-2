import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private sharedService: CommonAppService) { }

  ngOnInit(): void {
    this.sharedService.setComponentStatus(true,true,true);
  }

}
