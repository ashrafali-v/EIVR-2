import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { DashboardService } from '../services/dashboard.service';
import { switchMap, takeUntil, catchError, delay, take, map } from 'rxjs/operators'
import { timer, Subject, of, forkJoin, combineLatest, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  systemHaelth$: any;
  totalCallCountToday: any;
  totalPaymentCountToday: any;
  totalCSRCountToday: number;
  errorObject: any;
  private killTrigger: Subject<void> = new Subject();
  single: any[];
  multi: any[];
  view: any[];
  loaderPaymentsTab: boolean = true;
  loaderCallsTab: boolean = true;
  isError: boolean = false;
  period: any;
  /*---- Chart options----*/
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendPosition = 'below';
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  groupPadding = 15;
  barPadding = 0;
  /*---- Chart options----*/
  /*-----Chart array declarations-------*/
  forkJoinArray: any = [];
  noOfPaymentsProcessed: any;
  amountOfPaymentsProcessed: any;
  noOfPaymentsDenied: any;
  totalNoOfTextMessages: any;
  totalCallsRecieved: any;
  totalCallsTransferedIvrToCsr: any;
  callsCompleted: any;
  averageDurationOfCalls: any;
  callsTerminatedBeforeCompletion: any;
  /*-----Chart array declarations-------*/
  paymentChartsColorScheme = {
    domain: ['#fd7e14', '#020B7A', '#dc3545']
  };
  totalTextMessagesColorScheme = {
    domain: ['#0CC474', '#EF4444']
  };
  callsTransferedIvrToCsrColorSceme = {
    domain: ['#EF4460']
  };
  totalCallsRecievedColorScheme = {
    domain: ['#fd7e14', '#020B7A']
  };
  callsCompletedColorSceme = {
    domain: ['#47CEF9']
  };
  averageDurationColorSceme = {
    domain: ['#0CC474']
  };
  constructor(private sharedService: CommonAppService) {
    this.sharedService.setComponentStatus(true, true, true);
  }

  ngOnInit(): void {
    this.sharedService.getTotalCalls().subscribe(data=>{
      console.log(data);
      
    });
    this.view = [700, 200];
    const noOfPaymentsProcessed$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
    const amountOfPaymentsProcessed$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
    const noOfPaymentsDenied$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
    const totalNoOfTextMessages$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));

    const example = forkJoin(
      //of('World').pipe(delay(3000)),
      noOfPaymentsProcessed$, amountOfPaymentsProcessed$, noOfPaymentsDenied$, totalNoOfTextMessages$
    );

    example.subscribe(([noOfPaymentsProcessed, amountOfPaymentsProcessed, noOfPaymentsDenied, totalNoOfTextMessages]) => {
      this.loaderPaymentsTab = false;
      noOfPaymentsProcessed = [
        {
          "name": "Germany",
          "series": [
            {
              "name": "2010",
              "value": 73
            },
            {
              "name": "2011",
              "value": 89
            }
          ]
        },

        {
          "name": "USA",
          "series": [
            {
              "name": "2010",
              "value": 50
            },
            {
              "name": "2011",
              "value": 15
            }
          ]
        },
        {
          "name": "France",
          "series": [
            {
              "name": "2010",
              "value": 30
            },
            {
              "name": "2011",
              "value": 27
            }
          ]
        },
        {
          "name": "Belgium",
          "series": [
            {
              "name": "2010",
              "value": 55
            },
            {
              "name": "2011",
              "value": 35
            }
          ]
        },
        {
          "name": "Holand",
          "series": [
            {
              "name": "2010",
              "value": 50
            },
            {
              "name": "2011",
              "value": 58
            }
          ]
        },
        {
          "name": "Turkey",
          "series": [
            {
              "name": "2010",
              "value": 58
            },
            {
              "name": "2011",
              "value": 39
            }
          ]
        },
        {
          "name": "Italy",
          "series": [
            {
              "name": "2010",
              "value": 58
            },
            {
              "name": "2011",
              "value": 39
            }
          ]
        }
      ];
      amountOfPaymentsProcessed = [
        {
          "name": "27 MON",
          "series": [
            {
              "name": "2010",
              "value": 73
            },
            {
              "name": "2011",
              "value": 89
            }
          ]
        },

        {
          "name": "27 TUE",
          "series": [
            {
              "name": "2010",
              "value": 20
            },
            {
              "name": "2011",
              "value": 25
            }
          ]
        },
        {
          "name": "27 TWED",
          "series": [
            {
              "name": "2010",
              "value": 30
            },
            {
              "name": "2011",
              "value": 45
            }
          ]
        }
      ];
      noOfPaymentsDenied = [
        {
          "name": "27 MON",
          "series": [
            {
              "name": "2010",
              "value": 73
            },
            {
              "name": "2011",
              "value": 89
            }
          ]
        },

        {
          "name": "27 TUE",
          "series": [
            {
              "name": "2010",
              "value": 20
            },
            {
              "name": "2011",
              "value": 25
            }
          ]
        },
        {
          "name": "27 WED",
          "series": [
            {
              "name": "2010",
              "value": 30
            },
            {
              "name": "2011",
              "value": 45
            }
          ]
        },
        {
          "name": "27 THU",
          "series": [
            {
              "name": "2010",
              "value": 20
            },
            {
              "name": "2011",
              "value": 15
            }
          ]
        }
      ];
      totalNoOfTextMessages = [
        {
          "name": "27 MON",
          "series": [
            {
              "name": "2010",
              "value": 73
            },
            {
              "name": "2011",
              "value": 89
            }
          ]
        },

        {
          "name": "27 TUE",
          "series": [
            {
              "name": "2010",
              "value": 20
            },
            {
              "name": "2011",
              "value": 25
            }
          ]
        },
        {
          "name": "27 WED",
          "series": [
            {
              "name": "2010",
              "value": 30
            },
            {
              "name": "2011",
              "value": 45
            }
          ]
        },
        {
          "name": "27 THU",
          "series": [
            {
              "name": "2010",
              "value": 20
            },
            {
              "name": "2011",
              "value": 15
            }
          ]
        }
      ];
      Object.assign(this, { noOfPaymentsProcessed });
      Object.assign(this, { amountOfPaymentsProcessed });
      Object.assign(this, { noOfPaymentsDenied });
      Object.assign(this, { totalNoOfTextMessages });
    });

    this.errorObject = null;
    timer(0, 5 * 60 * 1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getSystemHealth()),
      catchError(error => of('Error'))
    ).subscribe(result => console.log(result));

    timer(0, 5 * 60 * 1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getTodayCallCount()),
      catchError(error => of('Error'))
    ).subscribe(result => this.totalCallCountToday = result);

    timer(0, 5 * 60 * 1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getTodayPayment()),
      catchError(error => of('Error'))
    ).subscribe(result => this.totalPaymentCountToday = result);

    timer(0, 5 * 60 * 1000).pipe(
      takeUntil(this.killTrigger),
      switchMap(() => this.sharedService.getTodayCSRCount()),
      catchError(error => of('Error'))
    ).subscribe(result => this.totalCSRCountToday = result);

    function yAxisTickFormatting(value) {
      return this.currencyTickFormatting(value);
    }
  }
  ngOnDestroy() {
    this.killTrigger.next();
  }
  currencyTickFormatting(value) {
    return '$' + value.toLocaleString();
  }
  onSelectTab() {
    if (this.loaderCallsTab) {
      const totalCallsRecieved$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
      const totalCallsTransferedIvrToCsr$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
      const callsCompleted$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
      const averageDurationOfCalls$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));
      const callsTerminatedBeforeCompletion$ = this.sharedService.getAllToggles().pipe(catchError(error => of(undefined)));

      const example = forkJoin(
        totalCallsRecieved$, totalCallsTransferedIvrToCsr$, callsCompleted$, averageDurationOfCalls$, callsTerminatedBeforeCompletion$
      );
      example.subscribe(([totalCallsRecieved, totalCallsTransferedIvrToCsr, callsCompleted, averageDurationOfCalls, callsTerminatedBeforeCompletion]) => {
        this.loaderCallsTab = false;
        totalCallsRecieved = [
          {
            "name": "27 MON",
            "series": [
              {
                "name": "2010",
                "value": 73
              },
              {
                "name": "2011",
                "value": 89
              }
            ]
          },

          {
            "name": "27 TUE",
            "series": [
              {
                "name": "2010",
                "value": 20
              },
              {
                "name": "2011",
                "value": 25
              }
            ]
          },
          {
            "name": "27 WED",
            "series": [
              {
                "name": "2010",
                "value": 30
              },
              {
                "name": "2011",
                "value": 45
              }
            ]
          },
          {
            "name": "27 THU",
            "series": [
              {
                "name": "2010",
                "value": 20
              },
              {
                "name": "2011",
                "value": 15
              }
            ]
          }
        ];
        totalCallsTransferedIvrToCsr = [
          {
            "name": "27 MON",
            "value": 10
          },

          {
            "name": "28 TUE",
            "value": 15
          },
          {
            "name": "29 WED",
            "value": 30
          },
          {
            "name": "30 THU",
            "value": 17
          }
        ];
        Object.assign(this, { totalCallsRecieved });
        Object.assign(this, { totalCallsTransferedIvrToCsr });
        Object.assign(this, { callsCompleted });
        Object.assign(this, { averageDurationOfCalls });
        Object.assign(this, { callsTerminatedBeforeCompletion });
      });
    }
  }
  //event handler for the select element's change event
  selectChangeHandler(event: any) {
    //update the ui
    this.period = event.target.value;
    console.log(this.period);

  }
}
