import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Info, InfoUsuario } from '../models/info.models';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  getUsers() {
   let usuarios =  this.http.get<Info>(`${this.url}/users?per_page=6`)
     .pipe(map(resp => resp.data));

     return usuarios ;
  }

  getUserById(id:string) {
    let usuario =  this.http.get<InfoUsuario>(`${this.url}/users/${id}`)
      .pipe(map(resp => resp.data));

      return usuario ;
   }
}
