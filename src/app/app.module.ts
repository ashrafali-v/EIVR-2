import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpInterceptorProviders } from '../app/httpInterceptors/interceptor.providers';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { CreateNotificationTypeComponent } from './modals/create-notification-type/create-notification-type.component'
import { CreateCampaignModalComponent } from './modals/create-campaign-modal/create-campaign-modal.component';
import {SanitizerUrlPipe} from './modals/create-notification-type/create-notification-type.component';
import { CreateArfileComponent } from './modals/create-arfile/create-arfile.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    CreateNotificationTypeComponent,
    CreateCampaignModalComponent,
    SanitizerUrlPipe,
    CreateArfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxChartsModule,
    ToastrModule.forRoot({
      closeButton: true}),
    MalihuScrollbarModule.forRoot()
  ],
  providers: [HttpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
