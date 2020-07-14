import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { ToggleRoutingModule } from './toggle-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [ToggleComponent],
  imports: [
    CommonModule,
    ToggleRoutingModule,
    FormsModule,
    NgbModule,
    ToastrModule
  ],providers:[
    ToastrService
  ]
})
export class ToggleModule { }
