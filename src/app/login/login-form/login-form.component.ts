import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  hide = true;
  message = '';
  user;
  constructor(private router: Router) { 
    this.user ={
      'username':'',
      'password':''
    }
  }
    
  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.user)
    if(this.user.username=='test' && this.user.password=='test'){
      this.message = 'Correcto!!!'; 
      this.router.navigate(['dashboard-index']);
    }else{
      this.message = 'Datos incorrectos, Verifique!!!';
    }

  }
}