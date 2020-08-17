import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    NgbModule,
    MalihuScrollbarModule.forRoot()
  ]
})
export class HistoryModule { }
