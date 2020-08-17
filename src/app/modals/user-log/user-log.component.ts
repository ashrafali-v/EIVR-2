import { Component, OnInit,Input } from '@angular/core';
import { CommonAppService } from '../../services/common-app.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { catchError,retry } from 'rxjs/operators';
import { Subject,of } from 'rxjs';
@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.scss']
})
export class UserLogComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @Input() contactId: string;
  userLogInfo$:any;
  loadingError$ = new Subject<boolean>();
  constructor(private sharedService: CommonAppService,public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.userLogInfo$ =this.sharedService.getCallLogByContactId(this.contactId).pipe(
      catchError((error) => {
        console.error('error loading the list of users', error);
        this.loadingError$.next(true);
        return of();
      }),
      retry(2)
    );
  }

}
