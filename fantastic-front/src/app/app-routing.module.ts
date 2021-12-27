import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CookieFormComponent } from './cookie-form/cookie-form.component';

const routes: Routes = [
  {
    path: 'username',
    component: UsernameComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
    children: [
      {
        path: '',
        component: CookieFormComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/username',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
