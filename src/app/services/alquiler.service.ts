import { Injectable } from '@angular/core';

//modulos de firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

//importar modelo
import { Alquiler } from '../model/alquiler.model';


@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  
  private AlquilerCollection: AngularFirestoreCollection<Alquiler>;    //referencia a la coleccion de reservas en firestore
  alquiler: Observable<Alquiler[]>;                                  //referencia a la coleccion de reservas en forma de observable

  constructor(private angularFirestore: AngularFirestore) {
    
    this.AlquilerCollection = angularFirestore.collection<Alquiler>('alquiler');
    this.alquiler = this.AlquilerCollection.valueChanges();
  }
  
    //crear una alquiler. 
  
    createAlquiler(alquiler: Alquiler){
      return new Promise<any>((resolve, reject) => {
        this.angularFirestore
          .collection("alquiler")
          .add(alquiler)
          .then(res => {
            console.log(res);
            resolve(res)
          }, err => reject(err));
      });
    }
    
    //obtener todas las alquiler
  
}
