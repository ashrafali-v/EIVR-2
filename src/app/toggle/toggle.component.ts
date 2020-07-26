import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { catchError } from 'rxjs/operators';
import { Subject,of } from 'rxjs';
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  constructor(private sharedService: CommonAppService) { 
    this.sharedService.setComponentStatus(true,true,true);
  }
  toggles$:any = [];
  currentPage: any = 1;
  pageSize: number = 10;
  loadingError$ = new Subject<boolean>();
  ngOnInit(): void {
    this.toggles$ = this.sharedService.getAllToggles().pipe(
      catchError((error) => {
        console.error('error loading the list of users', error);
        this.loadingError$.next(true);
        return of();
      })
    );
  }
  enableToggle(event:any){
    console.log(event);
    
  }

}
