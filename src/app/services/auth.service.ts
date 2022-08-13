import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const existingUser = {
  login: 'qwerty', password: '123456'
};
const existingToken = 'alfghbnd;oagiu945723hjdd';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token = '';

  constructor(
    private _router: Router,
  ){}

  public login(login: string, password: string): void {
    if (login === existingUser.login && password === existingUser.password) {
      this.token = existingToken;
      this._router.navigate(['feed']);   
    } else {

    }
  }
}
