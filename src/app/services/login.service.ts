import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {SessionService} from './session.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private token: string;

  constructor(private router: Router,
              private sessionService: SessionService) { }

  getToken(): string {
    return this.token;
  }

  login(id: string, password: string): void {
    // Authentication logic
    this.sessionService.setLocalStorageItem();
  }

  isAuthenticated(): boolean {
    if (this.token) {
      this.sessionService.setLocalStorageItem();
    } else {
      this.sessionService.deleteLocalStorageSessionItems();
    }
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
    this.sessionService.deleteLocalStorageSessionItems();
    this.router.navigate(['login']);
  }
}
