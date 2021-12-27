import { Injectable } from '@angular/core';
import { Cookie } from './cookie';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CookieService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addCookie(cookie: Cookie): Observable<Cookie> {
    return this.http.post<Cookie>(`${this.apiServerUrl}/cookie/add`, cookie);
  }
}
