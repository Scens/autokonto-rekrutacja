import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
/**
 * The service changes the displayed name and
 * stores it in a local storage.
 */
export class UserService {

  constructor() { }

  usernameValue = new BehaviorSubject(this.username);

   set username(value) {
     this.usernameValue.next(value);
     if (value)
      localStorage.setItem('username', value);
   }

   get username() {
      return localStorage.getItem('username');
   }
}
