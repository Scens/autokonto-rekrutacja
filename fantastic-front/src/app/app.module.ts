import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieFormComponent } from './cookie-form/cookie-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    UserInfoComponent,
    CookieFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
