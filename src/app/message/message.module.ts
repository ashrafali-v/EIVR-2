import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule
  ]
})
export class MessageModule { }
