import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string;

  constructor(private router: Router) { }

  getToken(): string {
    return this.token;
  }

  login(id: string, password: string): void {
    // Authentication logic
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  isAdmin(): boolean {
    // isAdmin logic
    return true;
  }

  isJury(): boolean {
    // isJury logic
    return true;
  }

  isUser(): boolean {
    // isUser logic
    return true;
  }

  logout(): void {
    this.token = null;
    this.router.navigate(['login']);
  }
}
