import { Injectable } from '@angular/core';

//modulos de firestore
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { BehaviorSubject, Observable, map } from 'rxjs';

//importacion del modelo
import { ProductsOrden } from '../model/products-orden.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsOrdenService {

  private ordenCollection: AngularFirestoreCollection<ProductsOrden>;    //referencia a la coleccion de reservas en firestore
  orden: Observable<ProductsOrden[]>;

  constructor(private angularFirestore: AngularFirestore) {
    this.ordenCollection = angularFirestore.collection<ProductsOrden>('carrito');
    this.orden = this.ordenCollection.snapshotChanges().pipe(
      map(changes =>
        changes.map(a => ({
          id: a.payload.doc.id,
          ...a.payload.doc.data()
        }))
      )
    );
  }

  getCarritoOrdenes() {
    return this.orden;
  }

  calcularTotal(): Observable<number> {
    return this.orden.pipe(
      map((productos: ProductsOrden[]) => {
        let total = 0;
        productos.forEach(producto => {
          total += producto.precio * producto.cantidad;
        });
        return total;
      })
    );
  }

  eliminarProducto(id: string): void {
    this.ordenCollection.doc(id).delete();
  }

  guardarOrden(cliente: any, productos: ProductsOrden[]): void {
    const orden = {
      cliente: cliente,
      productos: productos,
      fecha: new Date()
    };
    this.angularFirestore.collection('ordenes').add(orden);
  }

  //borrar los productos del carrito
  limpiarCarrito(): void {

    this.orden.subscribe((res) => {
      res.forEach((producto) => {
        this.ordenCollection.doc(producto.id).delete();
      });
    } , (error) => {
      console.log(error);
    }
    );
  }
}
