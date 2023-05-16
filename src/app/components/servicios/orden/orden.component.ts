import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClienteComponent } from '../modal/modal-cliente/modal-cliente.component';

//importacion de servicios
import { ProductsOrdenService } from '../../../services/products-orden.service';
import { ProductsOrden } from 'src/app/model/products-orden.model';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent {

  productsOrden: ProductsOrden[] = [];
  total: number;

  constructor(
    private dialog: MatDialog,
    private productsOrdenService: ProductsOrdenService
  ) { }

  ngOnInit(): void {

    //obtener las ordenes del carrito de compras
    this.getCarritoOrdenes().subscribe((res) => {
      console.log(res);
      this.productsOrden = res;
      console.log('Listado de ordenes', this.productsOrden);
    }, (error) => {
      console.log(error);
    });

    //obtener el total de la compra
    this.productsOrdenService.calcularTotal().subscribe((res) => {
      console.log(res);
      this.total = res;
      console.log('Total de la compra', this.total);
    }, (error) => {
      console.log(error);
    });

  }

  getCarritoOrdenes() {
    return this.productsOrdenService.getCarritoOrdenes();
  }

  eliminarProducto(producto: ProductsOrden): void {
    this.productsOrdenService.eliminarProducto(producto.id);
  }

  solicitarOrden(): void {
    const dialogRef = this.dialog.open(ModalClienteComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      // console.log('El modal se ha cerrado');
    });
  }
}
