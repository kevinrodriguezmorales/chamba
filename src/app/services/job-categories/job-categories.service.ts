import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';

import { LIST_CATEGORIES } from 'src/app/@core/mocks/categories';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JobService {

  public collectionCategories: Array<any>;

  constructor(
    public _http: HttpClient
  ) {
    this.collectionCategories = [];
  }

  public listCategoriesWorkers(): Observable<any> {
    // let url = environment.apiUrl + "oficio";
    // return this._http.get(url);

    this.collectionCategories = LIST_CATEGORIES;
    return of(this.collectionCategories).pipe(delay(500));
  }

  public cleanCharacters(input: string): string {
    let acentos = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç ";
    let original = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc-";

    for (var i = 0; i < acentos.length; i++) {
      input = input.replace(acentos.charAt(i), original.charAt(i)).toLowerCase();
    }

    return input;
  }
}
