import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { switchMap, takeUntil, catchError } from 'rxjs/operators'
import { timer, Subject, of } from 'rxjs';
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


  // options
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

  colorScheme = {
    domain: ['#fd7e14', '#020B7A', '#dc3545']
  };

  constructor(private sharedService: CommonAppService) {
    this.sharedService.setComponentStatus(true, true, true);
  }

  ngOnInit(): void {
    this.view = [700, 200];
    var single = [
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
          },
          {
            "name": "2012",
            "value": 69
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
          },
          {
            "name": "2012",
            "value": 35
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
          },
          {
            "name": "2012",
            "value": 47
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
          },
          {
            "name": "2012",
            "value": 60
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
          },
          {
            "name": "2012",
            "value": 32
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
          },
          {
            "name": "2012",
            "value": 25
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
          },
          {
            "name": "2012",
            "value": 25
          }
        ]
      }
    ];
    this.errorObject = null;
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

    Object.assign(this, { single });
  }
  ngOnDestroy() {
    this.killTrigger.next();
  }
}
