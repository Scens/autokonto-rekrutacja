import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent {
  loginForm = this.fb.group({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(8)
    ])
  });

  constructor(
    private userSrv: UserService,
    private fb: FormBuilder
  ) { }

  login() {
    this.userSrv.username = this.loginForm.controls['name'].value; //tells UserService to change the displayed name
    let user: User = {
      name: this.userSrv.username ? this.userSrv.username : '',
      visits: 1,
    }
    this.userSrv.loginUser(user);
  }
}
