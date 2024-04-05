import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',

})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(private store: Store<AppState>) { }


  ngOnInit(){
    this.store.dispatch(cargarUsuarios())
   /* this.UsuarioService.getUsers().subscribe(
      users => {
        console.log(users);
        this.usuarios= users;
      });*/
  }


}
