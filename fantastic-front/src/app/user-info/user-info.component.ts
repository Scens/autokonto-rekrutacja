import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  visitsNumber = 1;

  constructor(private userSrv: UserService) { 
  }

  //gets current user's number of visits from api and shows it
  ngOnInit(): void {
    this.userSrv.getCurrentUser().subscribe(
      (response: User) => {
        this.visitsNumber = response.visits;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
