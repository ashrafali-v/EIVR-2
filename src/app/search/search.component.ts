import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { SubSink } from 'subsink';
import {CallLog} from '../model/call-log'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserLogComponent } from '../modals/user-log/user-log.component';
import { ViewLogComponent } from '../modals/view-log/view-log.component';
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
  searchStatusContactId:boolean = false;
  searchStatusPhoneNumber:boolean = false;
  searchStatusAccountNumber:boolean = false;
  userNotFound:boolean = false;
  searchBy:string='contactId';
  userLogInfo:any='';
  accountByArray:any=[];
  private observableSubscriptions = new SubSink();
  public scrollbarOptions = { axis: 'y', theme: '3d-dark' };
  constructor(private sharedService: CommonAppService,private modalService: NgbModal) {
    this.sharedService.setComponentStatus(true,true,true);
   }

  ngOnInit(): void {
  }
  searchCallLog(){
    this.callArray.length = 0;
    if(this.searchKey != ''){
      if(this.searchBy =='contactId'){
        this.observableSubscriptions.add(this.sharedService.getCallLogByContactId(this.searchKey).subscribe(data => {
          this.searchStatusContactId = true;
          this.searchStatusPhoneNumber = false;
          this.searchStatusAccountNumber = false;
          if(data.length == 0){
            this.userNotFound = true;
          }else{
            this.userNotFound = false;
          }
          this.userLogInfo =data[0];
        }));
      }else if(this.searchBy =='phoneNumber'){
        this.observableSubscriptions.add(this.sharedService.getCallLogByPhoneNumber(this.searchKey).subscribe(data => {
          this.searchStatusPhoneNumber = true;
          this.searchStatusContactId = false;
          this.searchStatusAccountNumber = false;
          for(let i in data){
            var userCallLOg = this.formatCallLog(data[i]);
            this.callArray.push(userCallLOg);
          };
        }));
      }else{
        this.observableSubscriptions.add(this.sharedService.getCallLogByAccountNumber(this.searchKey).subscribe(data => {
          this.searchStatusAccountNumber = true;
          this.searchStatusPhoneNumber = false;
          this.searchStatusContactId = false;
          this.accountByArray = data; 
        }));
      }
    }else{
      return false;
    }
  }
  clearSearch(){
    this.searchStatusPhoneNumber = false;
    this.searchStatusContactId = false;
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
    callLog.timeStamp = log.timeStamp?log.timeStamp:'Null';
    callLog.callHealth = !log.callError;
    return callLog;
  }
  onSearchByChange(radioValue:any){
    this.searchBy = radioValue;
  }
  getUserLog(contactId:any){
    const messageInfoModalRef = this.modalService.open(UserLogComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "xl",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "View User Log";
    messageInfoModalRef.componentInstance.modalDescription = "View userlog description";
    messageInfoModalRef.componentInstance.contactId = contactId; 
  }
  viewUserLog(userLog:any){
    const messageInfoModalRef = this.modalService.open(ViewLogComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "xl",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "View User Log";
    messageInfoModalRef.componentInstance.modalDescription = "View userlog description";
    messageInfoModalRef.componentInstance.logs = userLog; 
  }
}
