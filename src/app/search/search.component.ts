import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  callArray:any = [];
  currentPage: any = 1;
  pageSize: number = 10;
  constructor() { }

  ngOnInit(): void {
    this.callArray = [{"PhoneNo":8005,"ContactId":"INV-123","CallDuration":22,"TimeStamp":'12/01/23',"CallHealth":true},
    {"PhoneNo":8006,"ContactId":"INV-123","CallDuration":23,"TimeStamp":'12/01/23',"CallHealth":true},
    {"PhoneNo":8007,"ContactId":"INV-103","CallDuration":12,"TimeStamp":'12/01/23',"CallHealth":true},
    {"PhoneNo":8008,"ContactId":"INV-023","CallDuration":18,"TimeStamp":'12/01/23',"CallHealth":true},
    {"PhoneNo":8009,"ContactId":"INV-153","CallDuration":11,"TimeStamp":'12/01/23',"CallHealth":true},
    {"PhoneNo":8012,"ContactId":"INV-623","CallDuration":34,"TimeStamp":'12/01/23',"CallHealth":true}];
  }
}
