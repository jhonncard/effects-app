import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Info } from '../models/info.models';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
   return this.http.get<Info>(`${this.url}/users?per_page=6`)
     .pipe(map(resp => resp.data));
  }
}
