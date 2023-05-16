import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsOrdenService } from '../../../../services/products-orden.service';
import { AngularFirestore, } from '@angular/fire/compat/firestore';
import { MatFormFieldModule } from '@angular/material/form-field'; // importa el modulo MatFormFieldModule
import { MatAutocompleteModule } from '@angular/material/autocomplete'; // importa el modulo MatAutocompleteModule


import { ProductsOrden } from '../../../../model/products-orden.model';


@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.component.html',
  styleUrls: ['./modal-cliente.component.scss']
})
export class ModalClienteComponent implements OnInit {

  clienteForm: FormGroup;


  constructor(
    private dialogRef: MatDialogRef<ModalClienteComponent>,
    private afs: AngularFirestore,
    private fb: FormBuilder,
    private productsOrdenService: ProductsOrdenService,
  ) { }

  ngOnInit(): void {

    this.clienteForm = this.fb.group({
      identificacion: ['', Validators.required],
      nombres: ['', Validators.required],
      habitacion: ['', Validators.required],
    });
  }

  guardarPersona(): void {
    const cliente = this.clienteForm.value;
    let productos: ProductsOrden[];
    this.productsOrdenService.getCarritoOrdenes().subscribe((res) => {
      productos = res;
      this.productsOrdenService.limpiarCarrito(); 
      this.productsOrdenService.guardarOrden(cliente, productos);
      this.dialogRef.close();
      console.log('Su orden ha sido registrada');
    }, (error) => {
      console.log(error);
    });
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
