import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit{

  productos = [];
  total: number = 0;

  constructor(private firestore: AngularFirestore) {
    this.firestore.collection('carrito').valueChanges().subscribe(data => {
      this.productos = data;
    });
  }

  eliminarProducto(producto) {
    if (confirm('¿Está seguro de eliminar el producto?')) {
      this.firestore.collection('carrito').doc(producto.id).delete();
    }
  }

  solicitarPedido() {
    // if (confirm('¿Está seguro de solicitar el pedido?')) {
    //   this.productos.forEach(producto => {
    //     this.firestore.collection('productos').doc(producto.nombre).update({
    //       stock: producto.stock - producto.cantidad
    //     });
    //     this.firestore.collection('carrito').doc(producto.id).delete();
    //   });
    //   alert('Pedido solicitado');
    // }
  }

  calcularTotal(): void {
    this.total = 0;
    for (let producto of this.productos) {
      this.total += producto.precio * producto.cantidad;
    }
  }

  ngOnInit(): void {
    this.calcularTotal();
  }
}
