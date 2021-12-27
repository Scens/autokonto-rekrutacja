import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  editName = new FormControl('');

  constructor(
    private userSrv: UserService
  ) { }

  ngOnInit(): void {
    this.editName.setValidators([
      Validators.required,
      Validators.maxLength(8)
    ]);
  }

  saveName() {
    this.userSrv.username = this.editName.value; //tells UserService to change the displayed name
    let user: User = {
      name: this.editName.value,
      visits: 1,
    }
    this.userSrv.loginUser(user);
  }
}
