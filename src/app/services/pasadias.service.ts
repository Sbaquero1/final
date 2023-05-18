import { Injectable } from '@angular/core';

//modulos de firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

//importar modelo
import { Pasadias } from '../model/pasadias.model';



@Injectable({
  providedIn: 'root'
})
export class PasadiasService {


  private ordenCollection: AngularFirestoreCollection<Pasadias>;    //referencia a la coleccion de reservas en firestore
  pasadia: Observable<Pasadias[]>;                                  //referencia a la coleccion de reservas en forma de observable

  constructor(private angularFirestore: AngularFirestore) {
    
    this.ordenCollection = angularFirestore.collection<Pasadias>('pasadia');
    this.pasadia = this.ordenCollection.valueChanges();
  }
  
  //crear una pasadia. 
  
  createPasadia(pasadia: Pasadias){
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection("pasadia")
        .add(pasadia)
        .then(res => {
          console.log(res);
          resolve(res)
        }, err => reject(err));
    });
  }
  
  //obtener todas las pasadias
  getPasadias(){
    return this.pasadia;
  }
  

}
