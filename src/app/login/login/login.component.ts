import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;
  constructor() { 
    this.loginForm = new FormGroup({
      user : new FormControl(''),
      password : new FormControl(''),
    })
  } 

  loginuser(){
    let user123 = this.loginForm.get('user').value;
    let password123 = this.loginForm.get('password').value;
    console.log(user123 + '----' + password123) 
    // Showing the login credentials username and password
   
    if (user123 ==="vamsi" && password123==="12345678") {
      alert("login successfuly")
    }else{
      alert("Incorrect Username and Password")
    }
  }
  ngOnInit(): void {
  }


}
