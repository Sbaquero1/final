import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  cantidad: number = 0;
  productos = [];

  increment(producto) {
    producto.cantidad++; // Incrementamos la cantidad del objeto de producto específico
  }

  decrement(producto) {
    if (producto.cantidad > 0) {
      producto.cantidad--; // Decrementamos la cantidad del objeto de producto específico solo si es mayor que cero
    }
  }


  constructor(
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
    ) {
    this.firestore.collection('productoBar').valueChanges().subscribe(data => {
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
      // this.snackBar.open('Producto agregado al carrito', '', {
      //   duration: 4000,
      //   verticalPosition: 'top',
      //   horizontalPosition: 'left',
      //   panelClass: ['blue-snackbar']
      // });
      producto.cantidad = 0;

    }else{
      console.log('ingrese una cantidad mayor a 0');
      // this.snackBar.open('Debe seleccionar una cantidad mayor a 0', '', {
      //   duration: 4000,
      //   verticalPosition: 'top',
      //   horizontalPosition: 'center',
      //   panelClass: ['blue-snackbar']
      // });
    }
  }
  ngOnInit(): void {
  }

}
