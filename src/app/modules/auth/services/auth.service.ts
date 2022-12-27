import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.api;

  constructor(private httpClient:HttpClient, private cookieService:CookieService) { }

  submitLogin(credentials: {email:string, password:string}):Observable<any> {
    return this.httpClient.post(
        `${this.URL}/auth/login`,
        credentials
      )
      .pipe(
        tap((stream:any) => {
            const {tokenSession} = stream;
            this.cookieService.put('token_session', tokenSession, {
              path:'/'
            })
        }),
        catchError(() => {
          console.log('Algo ocurrió!!')
          return of([])
        })
      )
  }
}
