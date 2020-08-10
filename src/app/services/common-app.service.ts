import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { ComponentStatus } from '../model/component.status';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonAppService {
  @Output() OnChange: EventEmitter<any> = new EventEmitter();
  @Output() Ontoggle: EventEmitter<any> = new EventEmitter();
  jsonHttpHeader: any;
  textHttpHeader: any;
  headerSatus:boolean = true;
  asideSatus:boolean =true;
  footerSatus:boolean=true;
  componentStatus: any;
  serviceBase = 'https://prod.schoolguard360.com/eivr/dashboard/';
  eivrApiEndpoints = {
    GetAllMessages:'getAllMessages/',
    GetMessageByKey:'getMessageByKey/',
    SaveMessage:'saveMessages/',
    GetAllToggles:'getAllToggles/',
    GetToggleByKey:'getToggleByKey/',
    SaveToggle:'saveToggle/',
    getLogByContactId:'getContactId/',
    getLogByPhoneNumber:'getContactDetailByPhone/',
    SystemHealth:'health/',
    TodayCallCount:'getTodayCallCount/',
    TodayPayment:'getTodayPaymentCount/',
    TodayCSRCount:'getTodayCSRCount/',
    TotalCalls:'getTotalCalls/'
  }
  constructor(private httpClient: HttpClient) {
    this.componentStatus = new ComponentStatus();
    this.jsonHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.textHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'text'
      })
    }
  }
  public getAllMessages(){
    var url = this.eivrApiEndpoints['GetAllMessages'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getMessage(key:any){
    var url = this.eivrApiEndpoints['GetMessageByKey']+'?messageKey='+key;
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public saveMessage(message:any){
    var url = this.eivrApiEndpoints['SaveMessage'];
    var data = {"messageKey":message.messageKey,"messageText":message.messageText};
    console.log(data);
    
    return this.httpClient.post(this.serviceBase+url,data,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  setComponentStatus(header:boolean,aside:boolean,footer:boolean){

    this.componentStatus.header = header;
    this.componentStatus.aside = aside;
    this.componentStatus.footer = footer;
    this.OnChange.emit(this.componentStatus);
  }
  public getComponentStatus(): Observable<any> {
    return this.OnChange;
  }
  setMenuToggle(status:boolean){
    this.Ontoggle.emit(status);
  }
  public getMenuToggle(): Observable<any> {
    return this.Ontoggle;
  }
  public getAllToggles(){
    var url = this.eivrApiEndpoints['GetAllToggles'];
    return this.httpClient.get(this.serviceBase+url, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public searchToggle(key:any){
    var url = this.eivrApiEndpoints['GetToggleByKey'];
    return this.httpClient.get(this.serviceBase+url+'?toggleKey='+key, this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public saveToggle(data:any){
    var url = this.eivrApiEndpoints['SaveToggle'];
    return this.httpClient.post(this.serviceBase+url,data,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getCallLogByContactId(key:any){
    var url = this.eivrApiEndpoints['getLogByContactId'];
    return this.httpClient.get(this.serviceBase+url+'?contactId='+key,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
  public getCallLogByPhoneNumber(key:any){
    var url = this.eivrApiEndpoints['getLogByPhoneNumber'];
    return this.httpClient.get(this.serviceBase+url+'?phoneNumber='+key,this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
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
  public getTotalCalls(){
    var url = this.eivrApiEndpoints['TotalCalls'];
    return this.httpClient.get(this.serviceBase+url+'?frequency=DAILY&count=4', this.jsonHttpHeader).pipe(
      map((res:any) => res)
    )
  }
}
