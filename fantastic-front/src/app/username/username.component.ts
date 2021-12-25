import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  editName = new FormControl('');

  constructor(
    private router: Router,
    private userSrv: UserService
  ) { }

  ngOnInit(): void {
    this.editName.setValidators([
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(8)
    ]);
  }

  saveName() {
    this.userSrv.username = this.editName.value; //tell UserService to change the displayed name
    this.router.navigateByUrl('/user-info');
  }
}
