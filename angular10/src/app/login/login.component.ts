import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginId ='';
  password ='';
  message ='';
  constructor(private route : Router) { }

  signIn(){
    if(this.loginId == 'admin' && this.password =='admin'){
      this.route.navigateByUrl('/welcome');

    } else{
      this.message = 'Invalid login id or password';
    }
  }

  signUp(){
    this.route.navigateByUrl('/signup');
  }
  
  ngOnInit(): void {
  }

}
