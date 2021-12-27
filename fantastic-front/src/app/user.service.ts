import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
  
/**
 * The service changes the displayed name,
 * stores it in a local storage and does 
 * http requests.
 */
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  usernameValue = new BehaviorSubject(this.username);

  /**
   * Adds user to database, changes the displayed name
   * and changes view to user-info
   */
  public loginUser(user: User): void {
    this.addUser(user).subscribe(
      () => {
        this.usernameValue.next(user.name);
        this.router.navigateByUrl('/user-info');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiServerUrl}/user/add`, user);
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${localStorage.getItem('username')}`);
  }

  set username(value) {
    if (value)
      localStorage.setItem('username', value);
  }

  get username() {
    return localStorage.getItem('username');
  }
}
