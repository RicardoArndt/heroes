import {ErrorHandler, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DEV } from '../../dev';
import {Hero} from '../hero-detail/hero.model';
import {Observable} from '../../../../node_modules/rxjs';
import {catchError} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {HeroesError} from '../../error/HeroesError';

@Injectable()
export class HeroService {

  public errorHandle;

  // private toastr: ToastrService

  constructor(private _http: HttpClient, private error: ErrorHandler, private heroErro: HeroesError) { }

  public getAll(): Observable<Hero[]> {
    return this._http.get<Hero[]>(`${DEV.API_URL}/heroes`);
  }

  public saveHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(`${DEV.API_URL}/heroes`, JSON.stringify(hero), DEV.HTTP_OPTIONS);
  }

  public getById(id: string): Observable<Hero> {
    return this._http.get<Hero>(`${DEV.API_URL}/hero/${id}`);
  }

  public update(hero: Hero): Observable<Hero> {
    return this._http.put<Hero>(`${DEV.API_URL}/heroes`, JSON.stringify(hero), DEV.HTTP_OPTIONS);
  }

  public delete(id: string): Observable<Hero> {
    return this._http.delete(`${DEV.API_URL}/hero/${id}`, DEV.HTTP_OPTIONS);
  }
}
