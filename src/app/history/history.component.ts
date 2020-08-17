import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { catchError,retry } from 'rxjs/operators';
import { Subject,of } from 'rxjs';
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
  public scrollbarOptions = { axis: 'y', theme: 'dark-3' };
  constructor(private sharedService: CommonAppService) { this.sharedService.setComponentStatus(true,true,true); }

  ngOnInit(): void {
    this.paymentList$ = this.sharedService.getPaymentList().pipe(
      catchError(error => {
        console.error('error loading the list of users', error);
        this.loadingError$.next(true);
        return of();
      }),
      retry(2)
    );
  }

}
