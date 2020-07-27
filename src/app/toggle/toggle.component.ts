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
  toggleKey:any='';
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
  searchToggle(){
    console.log(this.toggleKey);
    this.toggles$.length = 0;
    if(this.toggleKey != ''){
      this.toggles$ = this.sharedService.searchToggle(this.toggleKey).pipe(
        catchError((error) => {
          console.error('error loading the list of users', error);
          this.loadingError$.next(true);
          return of();
        })
      );
    }else{
      return false;
    }
  }
  claerSearchToggle(){
    if(this.toggleKey != ''){
      this.toggleKey = '';
      this.toggles$ = this.sharedService.getAllToggles().pipe(
        catchError((error) => {
          console.error('error loading the list of users', error);
          this.loadingError$.next(true);
          return of();
        })
      );
    }else {
      return false;
    }
  }

}
