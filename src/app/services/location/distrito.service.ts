import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(
    public _http: HttpClient
  ) { }

  public listar()
  {
    // let url = environment.apiUrl+"distrito";
    // return this._http.get(url);
    return of([]).pipe(delay(500));
  }
}
