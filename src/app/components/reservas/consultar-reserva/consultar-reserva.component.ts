import { Component, OnInit } from '@angular/core';

// importar servicio 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

interface Usuario {
  nombre: string;
  apellido: string;
  cod_user: string;
}

interface Publicacion {
  titulo: string;
  cod_public: string;
  cod_user: string;
}

interface UsuarioConPublicaciones {
  nombre: string;
  titulosPublicaciones: string[];
}

@Component({
  selector: 'app-consultar-reserva',
  templateUrl: './consultar-reserva.component.html',
  styleUrls: ['./consultar-reserva.component.scss']
 
})
export class ConsultarReservaComponent  {
 
  private usuariosCollection = this.afs.collection<Usuario>('usuarios');
  private publicacionesCollection = this.afs.collection<Publicacion>('publicaciones');
  
  usuariosConPublicaciones$: Observable<UsuarioConPublicaciones[]>;
  
  constructor(private afs: AngularFirestore) {
    this.usuariosConPublicaciones$ = combineLatest([
      this.publicacionesCollection.valueChanges(),
      this.usuariosCollection.valueChanges()
    ]).pipe(
      map(([publicaciones, usuarios]) => {
        return usuarios.map(u => {
          const titulosPublicaciones = publicaciones
            .filter(p => p.cod_user === u.cod_user)
            .map(p => p.titulo);
          return {
            nombre: u.nombre,
            titulosPublicaciones: titulosPublicaciones
          };
        });
      })
    );
  }
}






