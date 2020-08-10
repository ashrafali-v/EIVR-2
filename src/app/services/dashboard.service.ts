import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { ComponentStatus } from '../model/component.status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  jsonHttpHeader: any;
  textHttpHeader:any;
  componentStatus: any;
  queryParamObject:any ={"frequency":"DAILY","count":4};
  queryParams:any;
  serviceBase = 'https://d1y2d7gwuud31v.cloudfront.net:443/eivr/dashboard/';
  eivrApiEndpoints = {
    SystemHealth:'health/',
    TodayCallCount:'getTodayCallCount/',
    TodayPayment:'getTodayPaymentCount/',
    TodayCSRCount:'getTodayCSRCount/',
    PaymentsProcessed:'getPaymentProcessed/',
    PaymentsAmountProcessed:'getPaymentAmount/',
    PaymentsDenied:'getPaymentDeclined/',
    GetTextGenerated:'getTextGenerated/',
    TotalCalls:'getTotalCalls/',
    GetCallTransferedCSR:'getCallTransferedCSR/',
    GetCallsCompleted:'getCallCompleted/',
    GetCallsDuration:'getCallDuration/',
    GetCallsTerminated:'getCallTerminated/'
  }
  constructor(private httpClient: HttpClient) {
    this.componentStatus = new ComponentStatus();
    this.jsonHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.textHttpHeader = {
      headers: new HttpHeaders({'Content-Type': 'application/json',  accept: 'text/plain'}),
      responseType: 'text'
    }
    var frequency = 'DAILY';
    var count = 4;
    this.setQueryParams(frequency,count);
  }
  public setQueryParams(freq:any,count:any){
    this.queryParams = '?frequency='+freq+'&count='+count;
    console.log(this.queryParams);
  }
  public getSystemHealth(){
    var url = this.eivrApiEndpoints['SystemHealth'];
    return this.httpClient.get(this.serviceBase+url,this.textHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getTodayCallCount(){
    var url = this.eivrApiEndpoints['TodayCallCount'];
    return this.httpClient.get(this.serviceBase+url,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getTodayPayment(){
    var url = this.eivrApiEndpoints['TodayPayment'];
    return this.httpClient.get(this.serviceBase+url,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getTodayCSRCount(){
    var url = this.eivrApiEndpoints['TodayCSRCount'];
    return this.httpClient.get(this.serviceBase+url,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }

  /*--------PAYMENTS tab APIs start-------- */
  public getPaymentsProcessed(){
    var url = this.eivrApiEndpoints['PaymentsProcessed'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getPaymentsAmountProcessed(){
    var url = this.eivrApiEndpoints['PaymentsAmountProcessed'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getPaymentsDenied(){
    var url = this.eivrApiEndpoints['PaymentsDenied'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getToatlTextMessages(){
    var url = this.eivrApiEndpoints['GetTextGeneratedtest'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  /*--------PAYMENTS tab APIs ends-------- */

  /*--------CAllS tab APIs start-------- */
  public getTotalCalls(){
    var url = this.eivrApiEndpoints['TotalCalls'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getCallsTransferedCSR(){
    var url = this.eivrApiEndpoints['GetCallTransferedCSRtest'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getCallsCompleted(){
    var url = this.eivrApiEndpoints['GetCallsCompleted'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getCallDuration(){
    var url = this.eivrApiEndpoints['GetCallsDuration'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getCallTerminated(){
    var url = this.eivrApiEndpoints['GetCallsTerminatedtest'];
    return this.httpClient.get(this.serviceBase+url+this.queryParams, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  /*--------CAllS tab APIs ends-------- */
}
