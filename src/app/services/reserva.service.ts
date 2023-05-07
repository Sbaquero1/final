import { Injectable } from '@angular/core';

//modulos de firestore
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

//importacion del modelo
import { Reserva } from '../model/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private reservasCollection: AngularFirestoreCollection<Reserva>;    //referencia a la coleccion de reservas en firestore
  reservas: Observable<Reserva[]>;                                  //referencia a la coleccion de reservas en forma de observable

  constructor(private angularFirestore: AngularFirestore) {
    this.reservasCollection = angularFirestore.collection<Reserva>('reservas');
    this.reservas = this.reservasCollection.valueChanges();
   }

    getReservas(){
      return this.reservas;
    }

    createDatosResereva(reserva: Reserva){
      return new Promise<any>((resolve, reject) => {
        this.angularFirestore
          .collection("reservas")
          .add(reserva)
          .then(res => {
            console.log(res);
            resolve(res)
          }, err => reject(err));
      });
    }
    createDatosCliente(reserva: Reserva){
      return new Promise<any>((resolve, reject) => {
        this.angularFirestore
          .collection("clientes")
          .add(reserva)
          .then(res => {
            console.log(res);
            resolve(res)
          }, err => reject(err));
      });
    }

    createDatosPago(reserva: Reserva){
      return new Promise<any>((resolve, reject) => {
        this.angularFirestore
          .collection("pagos")
          .add(reserva)
          .then(res => {
            console.log(res);
            resolve(res)
          }, err => reject(err));
      });
    }
}
