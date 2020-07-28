import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { SubSink } from 'subsink';
import {CallLog} from '../model/call-log'
import { element } from 'protractor';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  call:any = [];
  callArray:any = [];
  currentPage: any = 1;
  pageSize: number = 10;
  searchKey:any = '';
  calLog:any;
  private observableSubscriptions = new SubSink();
  constructor(private sharedService: CommonAppService) {
    this.calLog = new CallLog();
    this.sharedService.setComponentStatus(true,true,true);
   }

  ngOnInit(): void {
    // this.callArray = [{"PhoneNo":8005,"ContactId":"INV-123","CallDuration":22,"TimeStamp":'12/01/23',"CallHealth":true},
    // {"PhoneNo":8006,"ContactId":"INV-123","CallDuration":23,"TimeStamp":'12/01/23',"CallHealth":true},
    // {"PhoneNo":8007,"ContactId":"INV-103","CallDuration":12,"TimeStamp":'12/01/23',"CallHealth":true},
    // {"PhoneNo":8008,"ContactId":"INV-023","CallDuration":18,"TimeStamp":'12/01/23',"CallHealth":true},
    // {"PhoneNo":8009,"ContactId":"INV-153","CallDuration":11,"TimeStamp":'12/01/23',"CallHealth":true},
    // {"PhoneNo":8012,"ContactId":"INV-623","CallDuration":34,"TimeStamp":'12/01/23',"CallHealth":true}];
  }
  searchCallLog(){
    this.callArray.length = 0;
    if(this.searchKey != ''){
      this.observableSubscriptions.add(this.sharedService.getCallLog(this.searchKey).subscribe(data => {
        console.log(data);
        data.forEach(element => {
          this.calLog.contactId = element.contactId;
          this.calLog.phoneNo = element.phoneNo;
          this.calLog.callDuration = element.endTime - element.startTime;
          this.calLog.timeStamp = element.phoneNo;
          this.calLog.callHealth = !element.callError;
          this.call.push(this.calLog);
        });
        this.callArray = this.call;
        
      }));
    }else{
      return false;
    }
  }
  clearSearch(){
    if(this.searchKey != ''){
      this.searchKey = '';
      this.callArray.length = 0;
    }else {
      return false;
    }
  }
}
