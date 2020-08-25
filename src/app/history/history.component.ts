import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { catchError,retry } from 'rxjs/operators';
import { Subject,of } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserLogComponent } from '../modals/user-log/user-log.component';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  paymentList$:any = [];
  loadingError$ = new Subject<boolean>();
  currentPage: any = 1;
  pageSize: number = 10;
  day: any;
  month: any;
  public scrollbarOptions = { axis: 'y', theme: '3d-dark' };
  model: NgbDateStruct;
  placement = 'bottom';
  maxDate:any;
  constructor(private sharedService: CommonAppService,private modalService: NgbModal) { this.sharedService.setComponentStatus(true,true,true); }

  ngOnInit(): void {
    const current = new Date();
    this.maxDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };
    this.getPayementsList('today');
  }
  getUserLog(contactId:any){
    const messageInfoModalRef = this.modalService.open(UserLogComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "xl",
      scrollable: true,
      backdrop: 'static'
    });
    messageInfoModalRef.componentInstance.modalTitle = "View User Info";
    messageInfoModalRef.componentInstance.modalDescription = "View userlog description";
    messageInfoModalRef.componentInstance.contactId = contactId; 
  }
  getPayementsList(dateStaus:string){
    let date = this.todayDate();
    if(dateStaus == 'custom'){
      console.log(this.model);
      date = this.model.month + '/' + this.model.day + '/' + this.model.year;
    }
    this.paymentList$ = this.sharedService.getPaymentList(date).pipe(
      catchError(error => {
        console.error('error loading the list of users', error);
        this.loadingError$.next(true);
        return of();
      }),
      retry(2)
    );
  }
  public todayDate() {
    const today = new Date();
    this.day = today.getDate();
    this.month = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var todayDate = this.month + '/' + this.day + '/' + yyyy;
    console.log(today);
    return todayDate;
  }
}
