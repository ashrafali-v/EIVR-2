import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:any='';
  password:any='';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log('Logged');
    console.log(this.userName);
    console.log(this.password);
    if(this.userName =='eivr' && this.password =='123'){
      this.router.navigate(['home']);
    }
  }
}
