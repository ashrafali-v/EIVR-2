import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonAppService } from '../services/common-app.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit  {
  @ViewChild('loginForm') loginForm: NgForm;
  userName:any='';
  password:any='';
  invalidCred:boolean = false;
  isLoginInProgress:boolean = false;
  loginFailed:any;
  constructor(private router: Router,private sharedService: CommonAppService) { 
    this.sharedService.setComponentStatus(false,false,false);
  }
  ngOnInit(): void {
    if (localStorage.getItem('AccessToken') !== null) {
      this.router.navigate(['/home']);
    }
  }
  ngAfterViewInit(){
    /*Get form value chnage event of  loginForm*/
    this.loginForm.valueChanges.subscribe(selectedValue => {
      this.invalidCred =false;
    })
  }
  login(formData: any){
    this.isLoginInProgress = true;
    this.sharedService.getUserLogin(formData.userName,formData.userPassword).subscribe(result=>{
      this.loginSuccess(result.data);
      this.sharedService.setComponentStatus(true,true,true);  
    },err=>{
      this.loginError(err);
    });
  }
  loginSuccess(token:any):void{
    localStorage.AccessToken = token;
    this.isLoginInProgress = false;
    this.sharedService.setLoggedInStatus(true);
    this.router.navigate(['home']);
  }
  loginError(error:any):void{
    this.isLoginInProgress = false;
    this.invalidCred = true;
  }
}
