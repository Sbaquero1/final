import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.scss']
})
export class DesayunoComponent implements OnInit {

  cantidad: number = 0;

  increment(producto) {
    producto.cantidad++; // Incrementamos la cantidad del objeto de producto específico
  }
  
  decrement(producto) {
    if (producto.cantidad > 0) {
      producto.cantidad--; // Decrementamos la cantidad del objeto de producto específico solo si es mayor que cero
    }
  }
  productos = [];

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('productos').valueChanges().subscribe(data => {
      this.productos = data;
    });
  }

  agregarAlCarrito(producto) {
    if (producto.cantidad > 0) {
      this.firestore.collection('carrito').add({
        nombre: producto.nombre,
        imagen: producto.imagen,
        precio: producto.precio,
        cantidad: producto.cantidad,
      });
      console.log('Producto agregado al carrito');
      producto.cantidad = 0;
    }else{
      console.log('ingrese una cantidad mayor a 0');
    }
  }

  ngOnInit(): void {
  }

}
