import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    NgbModule,
    FormsModule,
    MalihuScrollbarModule.forRoot()
  ]
})
export class HistoryModule { }
