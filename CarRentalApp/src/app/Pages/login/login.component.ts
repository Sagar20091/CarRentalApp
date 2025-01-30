import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router : Router){

  }
  // loginObj :LoginUser= new LoginUser();

  loginForm :FormGroup= new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  })

  Onlogin(){
    const loginObj=this.loginForm.value;
    if(loginObj.userName=='Admin' && loginObj.password=='2233'){
      this.router.navigateByUrl("/dashboard")
    }else{
      alert('Wrong username or password')
    }
  }

  }

  



export class LoginUser{
  userName :string;
  password :string;

  constructor(){
    this.userName='';
    this.password=''
  }
}
