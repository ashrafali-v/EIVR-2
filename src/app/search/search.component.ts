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
  searchStatus:boolean = false;
  searchBy:string='contactId';
  private observableSubscriptions = new SubSink();
  constructor(private sharedService: CommonAppService) {
    this.sharedService.setComponentStatus(true,true,true);
   }

  ngOnInit(): void {
  }
  searchCallLog(){
    this.callArray.length = 0;
    console.log(this.searchBy);
    if(this.searchKey != ''){
      if(this.searchBy =='contactId'){
        this.observableSubscriptions.add(this.sharedService.getCallLogByContactId(this.searchKey).subscribe(data => {
          this.searchStatus = true;
          for(let i in data){
            var userCallLOg = this.formatCallLog(data[i]);
            this.callArray.push(userCallLOg);
          };
        }));
      }else{
        this.observableSubscriptions.add(this.sharedService.getCallLogByPhoneNumber(this.searchKey).subscribe(data => {
          this.searchStatus = true;
          for(let i in data){
            var userCallLOg = this.formatCallLog(data[i]);
            this.callArray.push(userCallLOg);
          };
        }));
      }
    }else{
      return false;
    }
  }
  clearSearch(){
    this.searchStatus = false;
    if(this.searchKey != ''){
      this.searchKey = '';
      this.callArray.length = 0;
    }else {
      return false;
    }
  }
  formatCallLog(log){
    var callLog = new CallLog();
    callLog.contactId = log.contactId;
    callLog.phoneNo = log.phoneNo;
    callLog.callDuration = log.endTime - log.startTime;
    callLog.timeStamp = log.phoneNo;
    callLog.callHealth = !log.callError;
    return callLog;
  }
  onSearchByChange(radioValue:any){
    console.log(radioValue);
    this.searchBy = radioValue;
  }
}
