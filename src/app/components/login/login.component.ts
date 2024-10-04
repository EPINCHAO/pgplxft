import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../services';
import { MessageService } from 'primeng/api';
import { LoginPostData } from '../../adapters/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ButtonModule, CardModule, FormsModule ,PasswordModule, InputTextModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = {
    email: '',
    password: '',
  };

  constructor(){}

  private authService= inject(AuthService)
  private router = inject(Router);

  private messageService= inject(MessageService);
  onLogin(){
    const { email, password } = this.login;
    const loginData: LoginPostData = { email, password };
  
    this.authService.loginUser(loginData).subscribe({
      next: (response) => {
        if (response) {
          sessionStorage.setItem('email', email);
          this.router.navigate(['home']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Invalid login credentials',
          });
        }
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      },
    });

  }
}
