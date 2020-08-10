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
  componentStatus: any;
  serviceBase = 'https://prod.schoolguard360.com/eivr/dashboard/';
  eivrApiEndpoints = {
    GetAllMessages:'getAllMessages/',
    GetMessageByKey:'getMessageByKey/',
    SaveMessage:'saveMessages/'
  }
  constructor(private httpClient: HttpClient) {
    this.componentStatus = new ComponentStatus();
    this.jsonHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
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
}
