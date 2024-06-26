import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store'
import { cargarUsuario } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit  {

usuario: any ;
/**
 *
 */
constructor(private router: ActivatedRoute,
            private store: Store<AppState>,

) {


}
  ngOnInit(): void {
    this.store.select('usuario').subscribe( ({ user, loaded, loading }) =>{
      this.usuario = user;
    } )
    this.router.params.subscribe( ({ id}) => {
     this.store.dispatch( cargarUsuario({ id }));
    }

  )



  }
}
