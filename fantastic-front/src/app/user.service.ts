import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { Cookie } from './cookie';
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
  public usernameValue = new BehaviorSubject(this.username);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  set username(value) {
    if (value)
      localStorage.setItem('username', value);
  }

  get username() {
    return localStorage.getItem('username');
  }

  set currentUser(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  get currentUser() {
    let json = localStorage.getItem('currentUser');
    return json ? JSON.parse(json) : null;
  }

  /**
   * Adds user to database, changes the displayed name
   * and changes view to user-info
   */
  public loginUser(user: User): void {
    this.addUser(user).subscribe(
      (addedUser) => {
        this.usernameValue.next(addedUser.name);
        this.currentUser = addedUser;
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
    return this.http.get<User>(`${this.apiServerUrl}/user/find/${this.username}`);
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/all`);
  }

  public getAllInfo(): Observable<Map<User, Cookie[]>> {
    return this.http.get<Map<User, Cookie[]>>(`${this.apiServerUrl}/user/all-info`);
  }
}
