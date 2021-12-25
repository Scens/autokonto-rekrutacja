import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fantastic-front';
  displayName = '';

  constructor(
    private userSrv: UserService
  ) { 
    this.userSrv.usernameValue.subscribe((nextValue) => {
      this.displayName = nextValue ? nextValue : '';
    }) //change the displayed name after every succesful 'login' attempt
  }
}
