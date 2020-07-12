import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonAppService {
  jsonHttpHeader: any;
  serviceBase = 'https://prod.schoolguard360.com/eivr/dashboard/';
  eivrApiEndpoints = {
    GetAllMessages:'getAllMessages/',
    GetMessageByKey:'getMessageByKey/',
    SaveMessage:'saveMessages/'
  }
  constructor(private httpClient: HttpClient) { 
    this.jsonHttpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
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
}
