import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from '../user.service';
import { CookieService } from '../cookie.service';
import { Cookie } from '../cookie';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cookie-form',
  templateUrl: './cookie-form.component.html',
  styleUrls: ['./cookie-form.component.scss']
})
export class CookieFormComponent implements OnInit {
  imgSrc = '';

  addForm = this.fb.group({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9]+$')
    ]),
    quantity: new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(18)
    ]),
    bakingDate: new FormControl('', [
      Validators.required
    ]),
    veganFriendly: new FormControl('')
  });

  constructor(
    private userSrv: UserService,
    private cookieSrv: CookieService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public onAddCookie(): void {
    const today = new Date();
    alert(today.getDay + ' ' + today.toString)
    if (this.userSrv.currentUser.id) {
      let cookie: Cookie = this.addForm.value;
      cookie.userId = this.userSrv.currentUser.id;
      cookie.imgSrc = this.imgSrc;
      this.cookieSrv.addCookie(cookie).subscribe(
        () => { },
        (err: HttpErrorResponse) => {
          alert(err.message);
        }
      );
    }
  }

  onImageChange(event: any) {
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
        this.imgSrc = reader.result as string;
      };
    }
  }
}
