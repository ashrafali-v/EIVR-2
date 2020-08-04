import { Component, OnInit,OnDestroy } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { switchMap,takeUntil,catchError } from 'rxjs/operators'
import { timer,Subject,of } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit,OnDestroy {
  systemHaelth$:any;
  totalCallCountToday:any;
  totalPaymentCountToday:any;
  totalCSRCountToday:number;
  errorObject:any;
  private killTrigger: Subject<void> = new Subject();
  single: any[];
  multi: any[];
  view: any[];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private sharedService: CommonAppService) { 
    this.sharedService.setComponentStatus(true,true,true);
  }

  ngOnInit(): void {
    this.view = [320, 200];
    var single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
    this.errorObject = null;
    timer(0,5*60*1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getTodayCallCount()),
      catchError(error => of('Error'))
    ).subscribe(result => this.totalCallCountToday = result);

    timer(0,5*60*1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getTodayPayment()),
      catchError(error => of('Error'))
    ).subscribe(result => this.totalPaymentCountToday = result);

    timer(0,5*60*1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getTodayCSRCount()),
      catchError(error => of('Error'))
    ).subscribe(result => this.totalCSRCountToday = result);

    Object.assign(this, { single });
  }
  ngOnDestroy() {
    this.killTrigger.next();
  }
}
