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
  constructor(private router: Router,private sharedService: CommonAppService) { 
    this.sharedService.setComponentStatus(false,false,false);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    /*Get form value chnage event of  loginForm*/
    this.loginForm.valueChanges.subscribe(selectedValue => {
      this.invalidCred =false;
    })
  }
  login(formData: any){
    if(formData.userName =='eivr' && formData.userPassword =='123'){
      this.router.navigate(['messages']);
      this.sharedService.setComponentStatus(true,true,true);   
    }else{
      this.invalidCred = true;
    }
  }
}
