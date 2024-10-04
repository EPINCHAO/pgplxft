import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl='http://localhost:3002/auth/register';

  http= inject(HttpClient)

  constructor() { }

  registerUser(user: any) {
    return this.http.post(this.baseUrl, user);
  }
 

}
