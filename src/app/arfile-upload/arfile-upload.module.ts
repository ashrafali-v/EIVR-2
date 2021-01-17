import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArfileUploadRoutingModule } from './arfile-upload-routing.module';
import { ArfileUploadComponent } from './arfile-upload.component';


@NgModule({
  declarations: [ArfileUploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArfileUploadRoutingModule
  ]
})
export class ArfileUploadModule { }
