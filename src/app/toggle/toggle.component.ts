import { Component, OnInit } from '@angular/core';
import { CommonAppService } from '../services/common-app.service';
import { catchError,retry } from 'rxjs/operators';
import { Subject,of } from 'rxjs';
import { SubSink } from 'subsink';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CreateToggleComponent} from '../modals/create-toggle/create-toggle.component'
@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  private observableSubscriptions = new SubSink();
  constructor(private sharedService: CommonAppService,private modalService: NgbModal,public toastService: ToastrService) { 
    this.sharedService.setComponentStatus(true,true,true);
  }
  toggles$:any = [];
  currentPage: any = 1;
  pageSize: number = 10;
  toggleKey:any='';
  loadingError$ = new Subject<boolean>();
  ngOnInit(): void {
    this.toggles$ = this.sharedService.getAllToggles().pipe(
      catchError(error => {
        console.error('error loading the list of users', error);
        this.loadingError$.next(true);
        return of();
      }),
      retry(2)
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
  createToggle(){
    const createToggleModalRef = this.modalService.open(CreateToggleComponent, {
      ariaLabelledBy: "modal-basic-title",
      size: "lg",
      scrollable: true,
      backdrop: 'static'
    });
    createToggleModalRef.componentInstance.modalTitle = "Create Toggle";
    createToggleModalRef.componentInstance.modalDescription = "Create message description";
    createToggleModalRef.componentInstance.emitService.subscribe((result) => {
      if (result) {
        this.observableSubscriptions.add(this.sharedService.saveToggle(result).subscribe(data => {
          createToggleModalRef.close();
          this.toggles$ = this.sharedService.getAllToggles().pipe(
            catchError((error) => {
              console.error('error loading the list of users', error);
              this.loadingError$.next(true);
              return of();
            })
          );
          this.toastService.success("A new toggle has been created.");
        }, err => {
          this.toastService.error("Failed to create a toggle.");
        }));
      }
    }, (reason) => {
      console.log(reason);
    });
  }

}
