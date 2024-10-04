import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //private loginService: LoginService
  constructor(){}

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    // this.loginService.login(email, password);
  }

}
