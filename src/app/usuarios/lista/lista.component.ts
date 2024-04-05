import { Component, OnInit } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',

})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(public UsuarioService: UsuarioService) { }


  ngOnInit(): void {
    this.UsuarioService.getUsers().subscribe(
      users => {
        console.log(users);
        this.usuarios= users;
      });
  }


}
