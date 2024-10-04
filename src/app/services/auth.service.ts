import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { LoginPostData, RegisterPostData, User } from '../adapters/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl='http://localhost:3002/auth';

  http= inject(HttpClient)

  constructor() { }



  registerUser(postData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/register`, postData);
  }


  loginUser(postData: LoginPostData) {
    
    return this.http.post(`${this.baseUrl}/login`, postData);
  }
 
 

}
