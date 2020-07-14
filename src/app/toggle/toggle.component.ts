import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  constructor() { }
  togglesArray:any = [];
  currentPage: any = 1;
  pageSize: number = 10;
  ngOnInit(): void {
    this.togglesArray = [{"messageKey":"message key1","messageValue":"message value1","status":true},
    {"messageKey":"message key2","messageValue":"message value2","status":true},
    {"messageKey":"message key3","messageValue":"message value3","status":false},
    {"messageKey":"message key4","messageValue":"message value4","status":true},
    {"messageKey":"message key5","messageValue":"message value5","status":false},
    {"messageKey":"message key6","messageValue":"message value6","status":false}];
  }

}
