import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { usuarioI } from '../../models/usuario';
import { isNullOrUndefined } from 'util'
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public _http: HttpClient
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  authUser(data: usuarioI): Observable<any> {
    // return this._http.post('http://chamba-back.test/api/usuario/login', JSON.stringify(data), { headers: this.headers });

    const fakeResponse = {
      status: "200",
      success: true,
      user: {
        id: 1,
        nombre: 'Usuario Demo',
        correo: data.correo || 'demo@chamba.test'
      },
      token: 'fake-token'
    };

    return of(fakeResponse).pipe(delay(500));
  }

  getCurrentUser() {
    let user = localStorage.getItem('currentUser')
    if (!isNullOrUndefined(user)) {
        return user;
    } else {
        return null;
    }
  }

  setUser(usuario: usuarioI) {
    localStorage.setItem('currentUser', JSON.stringify(usuario));
  }

  logoutUser() {
    localStorage.removeItem('currentUser');
  }
}
