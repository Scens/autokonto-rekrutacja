import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cookie } from '../cookie';
import { User } from '../user';
import { UserService } from '../user.service';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-all-users-cookies',
  templateUrl: './all-users-cookies.component.html',
  styleUrls: ['./all-users-cookies.component.scss']
})
export class AllUsersCookiesComponent implements OnInit {
  users: User[] = [];
  map = new Map<User, Cookie[]>();

  constructor(
    private userSrv: UserService,
    private cookieSrv: CookieService
  ) { }

  ngOnInit(): void {
    this.fillMap();
  }

  // public fillMap(): void {
  //   this.userSrv.getAllInfo().subscribe(
  //     (response: Map<User, Cookie[]>) => {
  //       this.map = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public fillMap(): void {
    this.userSrv.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        for (let user of this.users) {
          this.getCookies(user);
        }
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getCookies(user: User): void {
    if (!user || !user.id)
      return;
    this.cookieSrv.getCookiesByUserId(user.id).subscribe(
      (response: Cookie[]) => {
        this.map.set(user, response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
